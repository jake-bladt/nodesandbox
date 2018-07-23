const mongoose = require('mongoose');

mongoose.connect('http://localhost/kcourses')
.then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log('Failed to connect to DB.');
    console.log(err);
  });

