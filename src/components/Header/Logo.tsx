import * as React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants";

import styles from "./Logo.module.css";

export const Logo = () => (
    <Link className={styles.link} to={ROUTES.HOME}>
        <h1 className={styles.logo}>Logo</h1>
    </Link>
);
