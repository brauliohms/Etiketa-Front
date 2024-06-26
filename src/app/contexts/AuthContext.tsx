import { createContext, useCallback, useState } from "react";
import { UserInfoType } from "../../view/types";
import { localStorageKeys } from "../config/localStorageKeys";

interface AuthContextProps {
	isSignedIn: boolean;
	signin(token: string, account: UserInfoType): void;
	signout(): void;
	user: UserInfoType | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
		const hasTokenStoraged = localStorage.getItem(
			localStorageKeys.ACCESS_TOKEN,
		);

		return !!hasTokenStoraged;
	});
	const [user, setUser] = useState<UserInfoType | null>(() => {
		const storedUser = localStorage.getItem(localStorageKeys.ACCESS_USER);
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const signin = useCallback((token: string, account: UserInfoType) => {
		localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
		localStorage.setItem(localStorageKeys.ACCESS_USER, JSON.stringify(account));
		setIsSignedIn(true);
		setUser(account);
	}, []);

	const signout = useCallback(() => {
		localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
		localStorage.removeItem(localStorageKeys.ACCESS_USER);
		setIsSignedIn(false);
		setUser(null);
	}, []);

	console.log({ user, isSignedIn });

	return (
		<AuthContext.Provider value={{ signin, isSignedIn, signout, user }}>
			{children}
		</AuthContext.Provider>
	);
}
