const router = require('express').Router();
const User = require('../db/models/users');

router.use('/google', require('./usersOauth'));

router.get('/me', (req, res, next) => {
  res.json(req.user || {});
});

// router.put('/login', (req, res, next) => {
//   User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
//     .then(user => {
//       if (!user) {
//         res.status(401).send('User not found');
//       } else if (!user.hasMatchingPassword(req.body.password)) {
//         res.status(401).send('Incorrect password');
//       } else {
//         req.login(user, err => {
//           if (err) next(err);
//           else res.json(user);
//         });
//       }
//     })
//     .catch(next);
// });
router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    });
    if (user) {
      req.login(user, err => (err ? next(err) : res.json(user)));
    } else {
      const err = new Error('Incorrect email or password!');
      err.status = 401;
      throw err;
    }
  } catch (err) {
    next(err);
  }
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy(err => {
    if (err) return next(err);
    res.status(204).end();
  });
});

module.exports = router;
