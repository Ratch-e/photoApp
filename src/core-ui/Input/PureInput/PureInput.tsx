import * as React from "react";
import classnames from "classnames";

import styles from "./PureInput.module.css";

interface PureInputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
}
export const PureInput = ({ className, ...rest }: PureInputProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <input className={classnames(styles.input, className)} {...rest} />
);
