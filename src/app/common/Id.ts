import { v4 as uuid } from "uuid";

export default class Id {
	static gerar(): string {
		return uuid();
	}
}
