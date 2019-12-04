
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css' 
// we have to import this normalize.css file(that we've already added using yarn add normalize.css) 
// to make our application look same in different browsers(chrome, firefox, ...)
import './styles/style.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
