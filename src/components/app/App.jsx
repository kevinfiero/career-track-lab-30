import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnimalCrossing from '../../containers/AnimalCrossing';
import CharacterBio from '../../containers/CharacterBio';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AnimalCrossing} />
        <Route path="/:id" component={CharacterBio} />
      </Switch>
    </Router>
  );
}
