import { useMutation } from "@tanstack/react-query";
import { UserSignIn } from "../../view/types";
import { userService } from "../services/users";

export function useSignin() {
	return useMutation({
		mutationFn: (data: UserSignIn) => userService.signin(data),
	});
}
