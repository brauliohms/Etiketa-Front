import { useTagStore } from "../../../../store/TagStore";

export function Main() {
	const { selectedTag } = useTagStore();
	console.log(selectedTag);
	return (
		<main className="container mx-auto flex flex-col items-center justify-center gap-8">
			<h2 className="text-center text-2xl font-semibold text-zinc-500">
				{selectedTag ? selectedTag : "Nenhuma SuperTag criada"}
			</h2>
		</main>
	);
}
