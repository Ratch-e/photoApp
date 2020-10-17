import * as React from "react";
import { Route } from "react-router-dom";

import { ROUTES } from "../../constants";
import { Login } from "./Login";
import { PasswordReset } from "./PasswordReset";
import { Signup } from "./Signup";

export const Auth = () => (
    <>
        <Route path={ROUTES.LOGIN}>
            <Login />
        </Route>
        <Route path={ROUTES.SIGNUP}>
            <Signup />
        </Route>
        <Route path={ROUTES.PASSWORD_RESET}>
            <PasswordReset />
        </Route>
    </>
);
