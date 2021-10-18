import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Home from './pages/Home';
import SalaryDetails from './pages/SalaryDetails';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/salary-details" component={ SalaryDetails } />
      </Switch>
    </Provider>
  );
}

export default App;
