import * as React from "react";
import classnames from "classnames";

import styles from "./WithLabel.module.css";

interface WithLabelProps {
    label: React.ReactNode;
    className?: string;
    labelClassName?: string;
}

export const WithLabel = ({
    label,
    className,
    labelClassName,
    children,
}: React.PropsWithChildren<WithLabelProps>) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classnames(styles.label, className)}>
        <p className={classnames(styles.text, labelClassName)}>{label}</p>
        {children}
    </label>
);
