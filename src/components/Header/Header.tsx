import * as React from "react";
import { Link, useHistory } from "react-router-dom";

import { PureButton } from "../../core-ui/Button/PureButton/PureButton";
import { ROUTES } from "../../constants";
import { Logo } from "./Logo";

import styles from "./Header.module.css";
import { UserContext } from "../Auth/context/userContext";
import { CurrentUserBadge } from "../User/CurrentUserBadge";
import { auth } from "../../firebase";

export const Header = () => {
    const { user } = React.useContext(UserContext);
    const history = useHistory();

    const signOut = async () => {
        await auth.signOut();
        history.push(ROUTES.HOME);
    };

    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.actionsPanel}>
                {user ? (
                    <PureButton onClick={signOut}>
                        <CurrentUserBadge
                            name={user.displayName}
                            imageURL={user.photoURL}
                        />
                    </PureButton>
                ) : (
                    <Link className={styles.link} to={ROUTES.LOGIN}>
                        <PureButton className={styles.mainButton}>
                            Login
                        </PureButton>
                    </Link>
                )}
            </div>
        </header>
    );
};
