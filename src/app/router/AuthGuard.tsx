import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface AuthGuardProps {
	isProtected: boolean;
}

export function AuthGuard({ isProtected }: AuthGuardProps) {
	const { isSignedIn } = useAuth();

	if (!isSignedIn && isProtected) {
		return <Navigate to="/signin" replace />;
	}

	if (isSignedIn && !isProtected) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
}
