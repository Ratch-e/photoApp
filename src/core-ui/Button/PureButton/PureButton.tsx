import * as React from "react";
import classnames from "classnames";
import { BUTTON_TYPE } from "../constants";

import styles from "./PureButton.module.css";

interface PureButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: BUTTON_TYPE;
}

export const PureButton = React.forwardRef<HTMLButtonElement, PureButtonProps>(
    (
        {
            children,
            className,
            type = BUTTON_TYPE.BUTTON,
            ...props
        }: React.PropsWithChildren<PureButtonProps>,
        ref
    ) => (
        <button
            className={classnames(styles.button, className)}
            ref={ref}
            // eslint-disable-next-line react/button-has-type
            type={type}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    )
);
