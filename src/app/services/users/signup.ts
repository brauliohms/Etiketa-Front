import { UserSignUp } from "../../../view/types";
import { api } from "../api";

export async function signup(user: UserSignUp) {
	console.log(user);
	const { data } = await api.post(`/signup`, user);
	return data;
}
