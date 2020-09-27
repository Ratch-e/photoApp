import * as React from "react";
import { Form, Field } from "react-final-form";
import { Link, useHistory } from "react-router-dom";

import { WithLabel } from "../../core-ui/WithLabel/WithLabel";
import { FormInput } from "../../core-ui/Input/FormInput/FormInput";
import { Button } from "../../core-ui/Button/Button/Button";
import { BUTTON_TYPE } from "../../core-ui/Button/constants";
import { ROUTES } from "../../constants";
import { loginWithGoogle } from "../../firebase";

import styles from "./Auth.module.css";

export const Login = () => {
    const onSubmit = (data: unknown) => console.log(data);
    const history = useHistory();

    const onLoginWithGoogle = async () => {
        await loginWithGoogle();
        history.push(ROUTES.HOME);
    };

    return (
        <section className={styles.page}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => {
                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <WithLabel label="Name" className={styles.row}>
                                <Field
                                    name="username"
                                    render={({ input }) => (
                                        <FormInput
                                            value={input.value}
                                            onChange={input.onChange}
                                            placeholder="Input your name or email"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <WithLabel label="Password" className={styles.row}>
                                <Field
                                    name="password"
                                    render={({ input }) => (
                                        <FormInput
                                            value={input.value}
                                            onChange={input.onChange}
                                            type="password"
                                            placeholder="Input your password"
                                        />
                                    )}
                                />
                            </WithLabel>
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
