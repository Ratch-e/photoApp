import * as React from "react";
import { Link } from "react-router-dom";

import { PureButton } from "../../core-ui/Button/PureButton/PureButton";
import { ROUTES } from "../../constants";
import { Logo } from "./Logo";

import styles from "./Header.module.css";

export const Header = () => (
    <header className={styles.header}>
        <Logo />
        <div className={styles.actionsPanel}>
            <Link className={styles.link} to={ROUTES.LOGIN}>
                <PureButton className={styles.mainButton}>Login</PureButton>
            </Link>
        </div>
    </header>
);
