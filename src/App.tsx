import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { ROUTES } from "./constants";
import { UserProvider } from "./components/Auth/context/UserProvider";
import { Auth } from "./components/Auth/Auth";

export function App() {
    return (
        <Router>
            <UserProvider>
                <Header />
                <Switch>
                    <Auth />
                    <Route path={ROUTES.HOME}>
                        <Home />
                    </Route>
                </Switch>
            </UserProvider>
        </Router>
    );
}
