import { IconTags } from "@tabler/icons-react";
import { useTagStore } from "../../../../store/TagStore";
import { TagInfo } from "./Tag";

export function Main() {
	const { selectedTag } = useTagStore();
	return (
		<main className="container mx-auto flex flex-col">
			{selectedTag ? (
				<TagInfo tagId={selectedTag} />
			) : (
				<section className="flex min-h-full flex-col items-center justify-center">
					<h2 className="flex items-center gap-x-2 text-4xl font-black text-zinc-800">
						<IconTags stroke={2} />
						Selecione Algo
					</h2>
					<small className="text-center text-base font-light text-zinc-800">
						Não tenho nada para exibir agora ... :)
					</small>
				</section>
			)}
		</main>
	);
}
