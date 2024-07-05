import axios from "axios";
import { UserSignIn } from "../../../view/types";
import { api } from "../api";

export async function signin(user: UserSignIn) {
	// const { data }  = await api.post(`/signin`, user);
	try {
		// Utlizando o try cat mas mantendo o que tinha sido feito
		// const { data } = await api.post(`/signin`, user);
		// return data;

		// Opcao para melhor retorno do erro
		return await api.post(`/signin`, user);
	} catch (error) {
		// Verificando se o erro é uma instância de AxiosError
		if (axios.isAxiosError(error) && error.response) {
			return error.response;
		} else {
			// Se o erro não for do Axios, relance ele para tratamento em outro lugar
			throw error;
		}
	}
}
