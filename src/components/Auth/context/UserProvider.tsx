import * as React from "react";
import { auth, generateUserDocument } from "../../../firebase";
import { UserContext } from "./userContext";

export const UserProvider = ({
    children,
}: React.PropsWithChildren<unknown>) => {
    const [user, setUser] = React.useState<firebase.User | null>(null);

    React.useEffect(() => {
        auth.onAuthStateChanged(async (newUser) => {
            if (newUser) {
                const updatedUser = await generateUserDocument(newUser);
                setUser(updatedUser);
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};
