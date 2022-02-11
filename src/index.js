import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Home = () => {
  return <h1>This is home page</h1>;
};

const About = () => {
  return <h1>This is about page</h1>;
};

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Root Page</Link>
        </li>
        <li>
          <Link to="/home">Home Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
