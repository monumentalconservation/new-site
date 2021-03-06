import React from 'react';
import { Route } from 'react-router';

export default (
  <Route>
    <Route exact path="/" />
    <Route path="/sites" />
    <Route path="/new-site"  />
    <Route path="/about" />
    <Route path="/gdpr" />
  </Route>
);
