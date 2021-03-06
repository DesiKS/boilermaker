const router = require('express').Router();
const User = require('../db/models/users');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// This is the route that users hit when they click Sign In With Google
router.get('/', passport.authenticate('google', { scope: 'email' }));

// This is the route that the Provider sends the user back to (along with the temporary auth token)
// after they "sign the contract".
//
// passport.authenticate will automatically send us to google (with the auth token and our client secret),
// and once we clear things with google, we will return to our verification callback with the permanent
// user token and any profile information we're allowed to see
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/'
  })
);

// For passport.authenticate to work, it needs a strategy, which we will configure below!
const googleCredentials = {
  clientID: process.env.GOOGLE_CLIENT_ID || 'foo',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'bar',
  callbackURL: '/auth/google/callback'
};

const verificationCallback = async (token, refreshToken, profile, done) => {
  const info = {
    // name: profile.displayName,
    email: profile.emails[0].value,
    imageUrl: profile.photos ? profile.photos[0].value : undefined
  };

  try {
    const [user] = await User.findOrCreate({
      where: { googleId: profile.id },
      defaults: info
    });
    done(null, user); // the user we pass to done here is piped through passport.serializeUser
  } catch (err) {
    done(err);
  }
};

const strategy = new GoogleStrategy(googleCredentials, verificationCallback);

// configuring the strategy (credentials + verification callback)
// this is used by 'passport.authenticate'
passport.use(strategy);

// // collect our google configuration into an object
// const googleConfig = {
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: '/auth/google/callback'
// };

// // configure the strategy with our config object, and write the function that passport will invoke after google sends
// // us the user's profile and access token
// const strategy = new GoogleStrategy(googleConfig, function(
//   token,
//   refreshToken,
//   profile,
//   done
// ) {
//   const googleId = profile.id;
//   const name = profile.displayName;
//   const email = profile.emails[0].value;

//   User.findOne({ where: { googleId: googleId } })
//     .then(function(user) {
//       if (!user) {
//         return User.create({ name, email, googleId }).then(function(user) {
//           done(null, user);
//         });
//       } else {
//         done(null, user);
//       }
//     })
//     .catch(done);
// });

// // register our strategy with passport
// passport.use(strategy);

module.exports = router;
