import * as React from "react";

export const useWindowResize = (cb: () => void) => {
    React.useLayoutEffect(() => {
        window.addEventListener("resize", cb);
        return () => window.removeEventListener("resize", cb);
    }, [cb]);
};
