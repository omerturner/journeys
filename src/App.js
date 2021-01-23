import 'antd/dist/antd.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Journey from './components/Journey/Journey';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact />
        <Route path="/journey/:name" component={Journey} exact />
      </Switch>
    </Router>
  );
}

export default App;
