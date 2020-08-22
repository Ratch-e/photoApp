import * as React from "react";
import classnames from "classnames";

import { PureButton } from "../PureButton/PureButton";

import styles from "./Button.module.css";
import { BUTTON_TYPE } from "../constants";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: BUTTON_TYPE;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { children, className, ...props }: React.PropsWithChildren<ButtonProps>,
        ref
    ) => (
        <PureButton
            className={classnames(styles.button, className)}
            ref={ref}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </PureButton>
    )
);
