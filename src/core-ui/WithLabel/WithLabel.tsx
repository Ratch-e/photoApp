import * as React from "react";
import classnames from "classnames";

import styles from "./WithLabel.module.css";

interface WithLabelProps {
    className?: string;
    label: string | Element;
}

export const WithLabel = ({
    label,
    className,
    children,
}: React.PropsWithChildren<WithLabelProps>) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.label}>
        <p className={classnames(styles.text, className)}>{label}</p>
        {children}
    </label>
);
