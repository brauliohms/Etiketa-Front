import { PropertiesInterface } from "../../../../types";

interface PropertyProps {
	property: PropertiesInterface;
}

export function Property({ property }: PropertyProps) {
	return (
		<>
			<span>Icone</span>
			<span>Nome da propriedade</span>
			<span>Valor da Propriedade</span>
			{property}
		</>
	);
}
