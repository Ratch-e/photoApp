import * as React from "react";

import { Map } from "../Map/Map";
import { GalleryProvider } from "./context/GalleryProvider";

import styles from "./Gallery.module.css";

export const Gallery = () => (
    <section className={styles.gallery}>
        <GalleryProvider>
            <div className={styles.photos}>some photos</div>
            <div className={styles.map}>
                <Map />
            </div>
        </GalleryProvider>
    </section>
);
