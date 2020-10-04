import * as React from "react";
import classnames from "classnames";

import { PureInput } from "../PureInput/PureInput";

import styles from "./FormInput.module.css";

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    error?: string;
}

export const FormInput = ({ className, error, ...props }: FormInputProps) => (
    <>
        <PureInput
            className={classnames(styles.input, className)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
        {error && <p className={styles.error}>{error}</p>}
    </>
);
