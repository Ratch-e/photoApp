import * as React from "react";
import { Form, Field } from "react-final-form";
import { Link, useHistory } from "react-router-dom";

import { WithLabel } from "../../core-ui/WithLabel/WithLabel";

import { FormInput } from "../../core-ui/Input/FormInput/FormInput";
import { Button } from "../../core-ui/Button/Button/Button";
import { BUTTON_TYPE } from "../../core-ui/Button/constants";
import { ROUTES } from "../../constants";
import { auth, generateUserDocument, loginWithGoogle } from "../../firebase";

import styles from "./Auth.module.css";

interface NewUserCredentials {
    username: string;
    email: string;
    password: string;
}

export const Signup = () => {
    const history = useHistory();

    const onSubmit = async ({
        email,
        username,
        password,
    }: NewUserCredentials) => {
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            if (user) {
                generateUserDocument(user, { displayName: username });
                history.push(ROUTES.HOME);
            }
        } catch (error) {
            // TODO: should be an error notification
            console.error(error);
        }
    };

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
                            <WithLabel className={styles.row} label="Name">
                                <Field
                                    name="username"
                                    render={({ input }) => (
                                        <FormInput
                                            value={input.value}
                                            onChange={input.onChange}
                                            placeholder="Input your name"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <WithLabel className={styles.row} label="Email">
                                <Field
                                    name="email"
                                    render={({ input }) => (
                                        <FormInput
                                            value={input.value}
                                            onChange={input.onChange}
                                            type="email"
                                            placeholder="Input your email"
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
                            <Button
                                className={styles.button}
                                type={BUTTON_TYPE.SUBMIT}
                            >
                                Create
                            </Button>
                        </form>
                    );
                }}
            />
            <h3 className={styles.section}>Or</h3>
            <Button onClick={onLoginWithGoogle}>
                Sign up with your Google account
            </Button>
            <div className={styles.section}>
                Already have an account?
                <Link className={styles.link} to={ROUTES.LOGIN}>
                    Login
                </Link>
            </div>
        </section>
    );
};
