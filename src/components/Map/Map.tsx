import * as React from "react";
import ReactMapGL, { ViewportProps } from "react-map-gl";
import { useWindowResize } from "../../utils/hooks/useWindowResize";
import { GalleryContext } from "../Gallery/context/galleryContext";

import styles from "./Map.module.css";

export const Map = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { latitude, longitude, setCoordinates } = React.useContext(
        GalleryContext
    );
    const [viewport, setViewport] = React.useState({
        width: ref.current?.offsetWidth ?? 0,
        height: ref.current?.offsetHeight ?? 0,
        zoom: 8,
    });

    useWindowResize(() =>
        setViewport((state) => ({
            ...state,
            width: ref.current?.offsetWidth ?? 0,
            height: ref.current?.offsetHeight ?? 0,
        }))
    );

    React.useEffect(() => {
        setViewport((state) => ({
            ...state,
            width: ref.current?.offsetWidth ?? 0,
            height: ref.current?.offsetHeight ?? 0,
        }));
    }, [ref]);

    const onVieportChange = (newViewport: ViewportProps) => {
        setViewport(newViewport);
        setCoordinates(newViewport.latitude, newViewport.longitude);
    };

    return (
        <div className={styles.wrapper} ref={ref}>
            <ReactMapGL
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...viewport}
                latitude={latitude}
                longitude={longitude}
                /* TODO add .env */
                mapboxApiAccessToken="pk.eyJ1IjoicmF0Y2giLCJhIjoiY2tnZmhreHN0MTNobTJ6bnYxa2hkMXlzOSJ9.XUZdEVvPSrVBU8Spi6ZWvg"
                onViewportChange={onVieportChange}
            />
        </div>
    );
};
