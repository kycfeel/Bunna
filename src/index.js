import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App, Home, Login, Register } from './containers';

ReactDOM.render(
  <Router>
    <div>
      <App />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>,
  document.getElementById('root'));
