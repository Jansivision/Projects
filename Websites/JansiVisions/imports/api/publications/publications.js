import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simple-schema';
import Property from '../collections/collections.js';


Meteor.publish('blog', ()=>{
	return Property.find();
});






//Meteor.publish('blog', function ()=> {
    //return Meteor.users.find({}, {fields: {'username': 1, 'profile': 1}});
//},
//{is_auto: true});

//Meteor.publish('users-list', () => Property.find({}, {sort: {date: -1}, limit: 100}));

//Blog.scheme = new SimpleSchema({
	//user: String;
//});

//console.log(Blog.isValid());
//console.log(Blog.validationErrors());

//const validationContext = new SimpleSchema({
 // user: String;,
//}).newContext();


//console.log(validationContext.isValid());
//console.log(validationContext.validationErrors());

//Meteor.publish('files.images.all', function () {

    // find data and return cursor if
    // data exists
   // const data = Images.collection.find();
    //if (data && data.count() >0)
       // return data;

    //this.ready(); // set ready if no data exists
//});
