import * as React from "react";
import { Form, Field } from "react-final-form";

import { WithLabel } from "../../core-ui/WithLabel/WithLabel";

import styles from "./Signup.module.css";
import { FormInput } from "../../core-ui/Input/FormInput/FormInput";
import { Button } from "../../core-ui/Button/Button/Button";
import { BUTTON_TYPE } from "../../core-ui/Button/constants";

export const Signup = () => {
    const onSubmit = (data: unknown) => console.log(data);

    return (
        <section className={styles.page}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => {
                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <WithLabel label="Name">
                                <Field
                                    name="username"
                                    render={({ input }) => (
                                        <FormInput
                                            className={styles.row}
                                            value={input.value}
                                            onChange={input.onChange}
                                            placeholder="Input your name"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <WithLabel label="Email">
                                <Field
                                    name="email"
                                    render={({ input }) => (
                                        <FormInput
                                            className={styles.row}
                                            value={input.value}
                                            onChange={input.onChange}
                                            type="email"
                                            placeholder="Input your email"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <WithLabel label="Password">
                                <Field
                                    name="password"
                                    render={({ input }) => (
                                        <FormInput
                                            className={styles.row}
                                            value={input.value}
                                            onChange={input.onChange}
                                            type="password"
                                            placeholder="Input your password"
                                        />
                                    )}
                                />
                            </WithLabel>
                            <Button type={BUTTON_TYPE.SUBMIT}>Submit</Button>
                        </form>
                    );
                }}
            />
        </section>
    );
};
