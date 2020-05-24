import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Account from "./components/account";
import Index from "./components/index";

function App() {

  return (<Router>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/account" component={Account} />
      </Switch>

    </Router>
  );
}

export default App;