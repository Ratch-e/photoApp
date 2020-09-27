import { createContext } from "react";

interface UserContext {
    user: firebase.User | null;
}

export const UserContext = createContext<UserContext>({ user: null });
