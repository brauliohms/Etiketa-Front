import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { UserSignIn } from "../../view/types";
import { userService } from "../services/users";

export function useSignin() {
	return useMutation<AxiosResponse<any>, Error, UserSignIn>({
		mutationFn: async (data: UserSignIn) => await userService.signin(data),
		onError(error) {
			// Considera-se que esse erro é na comunicação com o backend nao de credenciais erradas
			console.error(error.message);
			toast.error("Ocorreu um erro ao fazer login, tente novamente mais tarde");
		},
	});
}
