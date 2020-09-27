import * as React from "react";
import { auth } from "../../../firebase";
import { UserContext } from "./userContext";

export const UserProvider = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    const [user, setUser] = React.useState<firebase.User | null>(null);

    React.useEffect(() => {
        auth.onAuthStateChanged((newUser) => {
            setUser(newUser);
        });
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
