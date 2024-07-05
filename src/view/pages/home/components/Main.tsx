interface MainProps {
	tagId?: string;
}

export function Main({ tagId }: MainProps) {
	return (
		<main className="container mx-auto flex flex-col items-center justify-center gap-8">
			<h2 className="text-center text-2xl font-semibold text-zinc-500">
				{tagId ? tagId : "Nenhuma SuperTag criada"}
			</h2>
		</main>
	);
}
