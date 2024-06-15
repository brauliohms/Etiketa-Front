import axios from "axios";
import { UserSignUp } from "../../../view/types";
import { api } from "../api";

export async function signup(user: UserSignUp) {
	try {
		return await api.post(`/signup`, user);
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			return error.response;
		} else {
			throw error;
		}
	}
}
