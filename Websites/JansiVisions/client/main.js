import '../imports/startup/both';
import '../imports/startup/client';
import '../imports/ui/route.js'
import {Meteor} from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import App from '../imports/ui/App.js';
import {Template} from 'meteor/templating';
import '../lib/collections/books.js'

  Template.booklist.helpers({
    books: function(){
      return Books.find();
    }
  });

  //Template.body.events({
    //'submit .new-task' (event) {

      //event.preventDefault();

      //const target = event.target;
      //const name = target.name.value;
    //  const email = target.email.value;

      //Tasks.insert({
        //name,
        //email,
        //createdAt: new Date(),
      //});
      //target.name.value = '';
      //target.email.value = '';
    //},
  //});



Meteor.startup(()=>{

render(<App />,document.getElementById('target'));
});
