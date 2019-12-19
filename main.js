// const { db } = require('./server/db');
const app = require('./server');
// const PORT = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   .then(() => {
//     console.log('db synced');
//     app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
//   });

const port = 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function() {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
