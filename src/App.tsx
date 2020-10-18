import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Gallery } from "./components/Gallery/Gallery";
import { ROUTES } from "./constants";
import { UserProvider } from "./components/Auth/context/UserProvider";
import { Login } from "./components/Auth/Login";
import { PasswordReset } from "./components/Auth/PasswordReset";
import { Signup } from "./components/Auth/Signup";

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
                    <Route path={ROUTES.PASSWORD_RESET}>
                        <PasswordReset />
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <Gallery />
                    </Route>
                </Switch>
            </UserProvider>
        </Router>
    );
}
