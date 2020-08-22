import * as React from "react";
import classnames from "classnames";

import { PureInput } from "../PureInput/PureInput";

import styles from "./FormInput.module.css";

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
}

export const FormInput = ({ className, ...props }: FormInputProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <PureInput className={classnames(styles.input, className)} {...props} />
);
