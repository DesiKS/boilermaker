const { db } = require('./server/db');
// this means that we need to make sure our local NODE_ENV variable is in fact set to 'development'
// Node may have actually done this for you when you installed it! If not though, be sure to do that.
if (process.env.NODE_ENV === 'development') {
  require('./localSecrets'); // this will mutate the process.env object with your secrets.
}
const app = require('./server');
const PORT = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () =>
      console.log(`
    Server listening on port ${PORT}
    http://localhost:3000/
    `)
    );
  });
