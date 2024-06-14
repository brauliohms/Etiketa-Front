import { useMutation } from "@tanstack/react-query";
import { UserSignUp } from "../../view/types";
import { userService } from "../services/users";

export function useSignup() {
	return useMutation({
		mutationFn: async (data: UserSignUp) => userService.signup(data),
	});
}
