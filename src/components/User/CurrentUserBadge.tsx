import * as React from "react";
import { CurrentUser } from "./constants";

import placehoderAvatar from "../../assets/images/avatar-placeholder.png";

import styles from "./CurrentUserBadge.module.css";

export const CurrentUserBadge = ({ name, imageURL }: CurrentUser) => (
    <div className={styles.body}>
        <img
            className={styles.avatar}
            src={imageURL ?? placehoderAvatar}
            alt={name ?? "user"}
        />
        {name}
    </div>
);
