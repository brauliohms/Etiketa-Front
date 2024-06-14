import { UserSignIn } from "../../../view/types";
import { api } from "../api";

export async function signin(user: UserSignIn) {
	const { data } = await api.post(`/signin`, user);
	return data;
}
