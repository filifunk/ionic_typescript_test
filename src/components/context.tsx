import { SetStateAction, createContext, useContext, Dispatch } from "react";




export interface User {
    isSubscribed: boolean,
    name: string


}

export interface DashboardInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

export const DashboardContext = createContext<DashboardInterface>(undefined);


export function useUserContext() {
    const { user, setUser } = useContext(DashboardContext);
    if (user === undefined) {
        throw new Error("useUserContext must be used with a Dashboard Context");
    }
    return { user, setUser };
}
