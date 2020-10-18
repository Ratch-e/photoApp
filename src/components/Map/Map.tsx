import * as React from "react";
import ReactMapGL from "react-map-gl";
import { useWindowResize } from "../../utils/hooks/useWindowResize";

import styles from "./Map.module.css";

export const Map = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = React.useState({
        width: ref.current?.offsetWidth ?? 0,
        height: ref.current?.offsetHeight ?? 0,
        latitude: 37.7577,
        longitude: -122.4376,
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

    return (
        <div className={styles.wrapper} ref={ref}>
            <ReactMapGL
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...viewport}
                /* TODO add .env */
                mapboxApiAccessToken="pk.eyJ1IjoicmF0Y2giLCJhIjoiY2tnZmhreHN0MTNobTJ6bnYxa2hkMXlzOSJ9.XUZdEVvPSrVBU8Spi6ZWvg"
                onViewportChange={(newViewport) => setViewport(newViewport)}
            />
        </div>
    );
};
