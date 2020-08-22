import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Signup } from "./components/Auth/Signup";
import { Home } from "./components/Home/Home";
import { ROUTES } from "./constants";

export function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={ROUTES.LOGIN}>
                    <Signup />
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
