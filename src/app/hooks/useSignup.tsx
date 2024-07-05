import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { UserSignUp } from "../../view/types";
import { userService } from "../services/users";

export function useSignup() {
	return useMutation<AxiosResponse<any>, Error, UserSignUp>({
		mutationFn: async (data: UserSignUp) => await userService.signup(data),
		onError(error) {
			// Considera-se que esse erro é na comunicação com o backend nao de credenciais erradas
			console.error(error.message);
			toast.error(
				"Ocorreu um erro ao fazer o registro, tente novamente mais tarde",
			);
		},
	});
}
