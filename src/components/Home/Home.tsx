import * as React from "react";

import { Map } from "../Map/Map";

import styles from "./Home.module.css";

export const Home = () => (
    <section className={styles.home}>
        <div className={styles.photos}>some photos</div>
        <div className={styles.map}>
            <Map />
        </div>
    </section>
);
