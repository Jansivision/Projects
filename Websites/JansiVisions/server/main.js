import { Meteor } from 'meteor/meteor';
import '../imports/startup/both';
import '../imports/startup/server';
import '../imports/api/tasks.js';
import '../lib/collections/books.js'


Meteor.startup(function() {
  if (!Books.findOne()){
    Books.insert({title: "Great work on the webiste, Didn't think you guys could pull it off", author: "Jansi African Construction Limited"});
    Books.insert({title: "Smart inovations, hope we can partner up on some projects as we progress", author: "Moriah Gardens"});
    Books.insert({title: "You guys are doing a great Job, Keep up the progress", author: "Syben Plumbing Solutions Limited"});
  }

});
