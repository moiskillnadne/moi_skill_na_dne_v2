import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Home from './components/Home';
import Contactme from './components/Contactme';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="full-width">
      <Switch>
        <Route path="/contactme">
          <Contactme />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
