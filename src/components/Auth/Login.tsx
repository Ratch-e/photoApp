import * as React from "react";
import { Form, Field } from "react-final-form";
import { Link, useHistory } from "react-router-dom";

import { WithLabel } from "../../core-ui/WithLabel/WithLabel";
import { FormInput } from "../../core-ui/Input/FormInput/FormInput";
import { Button } from "../../core-ui/Button/Button/Button";
import { BUTTON_TYPE } from "../../core-ui/Button/constants";
import { ROUTES } from "../../constants";
import { auth, loginWithGoogle } from "../../firebase";

import styles from "./Auth.module.css";

interface LoginCredentials {
    email: string;
    password: string;
}

export const Login = () => {
    const history = useHistory();

    const onSubmit = async ({ email, password }: LoginCredentials) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push(ROUTES.HOME);
        } catch (error) {
            return error.message;
        }

        return null;
    };

    const onLoginWithGoogle = async () => {
        await loginWithGoogle();
        history.push(ROUTES.HOME);
    };

    return (
        <section className={styles.page}>
            <Form
                onSubmit={onSubmit}
                validate={(values) => {
                    const errors: Partial<LoginCredentials> = {};

                    if (!values.email) {
                        errors.email = "Please enter an email";
                    }
                    if (!values.password) {
                        errors.password = "Please enter a password";
                    }

                    return errors;
                }}
                render={({ handleSubmit, submitErrors }) => {
                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <WithLabel label="Email" className={styles.row}>
                                <Field
                                    name="email"
                                    render={({ input, meta }) => (
                                        <FormInput
                                            type="email"
                                            value={input.value}
                                            onChange={input.onChange}
                                            error={meta.touched && meta.error}
                                            placeholder="Input your email"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <WithLabel label="Password" className={styles.row}>
                                <Field
                                    name="password"
                                    render={({ input, meta }) => (
                                        <FormInput
                                            value={input.value}
                                            onChange={input.onChange}
                                            type="password"
                                            error={meta.touched && meta.error}
                                            placeholder="Input your password"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <p className={styles.error}>{submitErrors}</p>
                            <Button type={BUTTON_TYPE.SUBMIT}>Login</Button>
                        </form>
                    );
                }}
            />
            <h3 className={styles.section}>Or</h3>
            <Button onClick={onLoginWithGoogle}>
                Login with your Google account
            </Button>
            <div className={styles.section}>
                Don`t have an account yet?
                <Link className={styles.link} to={ROUTES.SIGNUP}>
                    Signup
                </Link>
            </div>
        </section>
    );
};
