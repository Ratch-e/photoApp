import * as React from "react";

import { GalleryContext } from "./galleryContext";

interface Coordinates {
    latitude: number;
    longitude: number;
}

export const GalleryProvider = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    const [coordinates, setCoordinates] = React.useState<Coordinates>({
        latitude: 37.7577,
        longitude: -122.4376,
    });

    React.useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        }
    }, []);

    return (
        <GalleryContext.Provider
            value={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                setCoordinates: (latitude: number, longitude: number) =>
                    setCoordinates({ latitude, longitude }),
            }}
        >
            {children}
        </GalleryContext.Provider>
    );
};
