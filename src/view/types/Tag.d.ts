export type Properties =
	| "text"
	| "number_int"
	| "number_real"
	| "checkbox"
	| "date";

export interface PropertiesInterface {
	text?: string;
	number_int?: number;
	number_real?: number;
	checkbox?: boolean;
	date?: Date;
}

export interface TagInterface {
	id: string;
	user_id: string;
	name: string;
	icon: string;
	properties: PropertiesInterface[];
	child: TagInterface[];
}
