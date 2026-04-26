import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/works/:workId">
                <App />
            </Route>
            <Redirect from="/" to="/works/city" />
        </Switch>
    </Router>,
    document.getElementById("root"),
);
