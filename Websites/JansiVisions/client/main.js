import '../imports/startup/both';
import '../imports/startup/client';
import '../imports/ui/route.js'
import {Meteor} from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import App from '../imports/ui/App.js';

Meteor.startup(()=>{

render(<App />,document.getElementById('target'));
});


