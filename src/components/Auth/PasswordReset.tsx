import * as React from "react";
import { Form, Field } from "react-final-form";

import { WithLabel } from "../../core-ui/WithLabel/WithLabel";
import { FormInput } from "../../core-ui/Input/FormInput/FormInput";
import { Button } from "../../core-ui/Button/Button/Button";
import { BUTTON_TYPE } from "../../core-ui/Button/constants";

import styles from "./Auth.module.css";
import { auth } from "../../firebase";

interface ResetCredentials {
    email: string;
}

export const PasswordReset = () => {
    const [emailSent, setEmailSent] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const onSubmit = async ({ email }: ResetCredentials) => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setEmailSent(true);
                setTimeout(() => {
                    setEmailSent(false);
                }, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
        return null;
    };

    return (
        <section className={styles.page}>
            <Form
                onSubmit={onSubmit}
                validate={(values) => {
                    const errors: Partial<ResetCredentials> = {};

                    if (!values.email) {
                        errors.email = "Please enter an email";
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
                            {submitErrors && (
                                <p className={styles.error}>{submitErrors}</p>
                            )}
                            {error && <p className={styles.error}>{error}</p>}
                            <Button type={BUTTON_TYPE.SUBMIT}>
                                Send password reset link
                            </Button>
                            {emailSent && (
                                <p>
                                    Email has been sent to you, check you inbox
                                </p>
                            )}
                        </form>
                    );
                }}
            />
        </section>
    );
};
