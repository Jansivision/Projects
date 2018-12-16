import  { Meteor } from 'meteor/meteor';
import Blog from '../collections/collections.js';

Meteor.methods({
	'newBlog': (blog)=> {
		Blog.insert(blog)
}


})


 
Meteor.methods({
	'removeBlog': (blog)=> {
		Blog.remove(_id)
}

})
