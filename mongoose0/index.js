const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kcourses')
.then(() => {
    console.log("Successfully connected to the database");
    const thingSchema = new mongoose.Schema({
        name: String,
        count: Number
    });

    const Thing = mongoose.model('thing', thingSchema);
    const newThing = new Thing({ name: 'Bob', count: 42 });
    newThing.save((err) => {
      if(err) {
        console.log('Thing failed to save.');
        console.log(err);
      } else {
        console.log('Thing saved.');
      }
    });

  })
  .catch((err) => {
    console.log('Failed to connect to DB.');
    console.log(err);
  });

