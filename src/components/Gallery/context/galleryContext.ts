import { createContext } from "react";

interface GalleryContext {
    latitude: number;
    longitude: number;
    setCoordinates: (lat: number, long: number) => void;
}

export const GalleryContext = createContext<GalleryContext>({
    latitude: 0,
    longitude: 0,
    setCoordinates: () => null,
});
