import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Signup } from "./components/Auth/Signup";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";
import { ROUTES } from "./constants";
import { UserProvider } from "./components/Auth/context/UserProvider";

export function App() {
    return (
        <Router>
            <UserProvider>
                <Header />
                <Switch>
                    <Route path={ROUTES.LOGIN}>
                        <Login />
                    </Route>
                    <Route path={ROUTES.SIGNUP}>
                        <Signup />
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <Home />
                    </Route>
                </Switch>
            </UserProvider>
        </Router>
    );
}
