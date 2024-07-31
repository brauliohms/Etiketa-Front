import { zodResolver } from "@hookform/resolvers/zod";
import { IconListDetails, IconPlus } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTagStore } from "../../../../../store";
import { Property } from "./Property";
import TagSchema from "./TagSchema";

interface TagInfoProps {
	tagId: string;
}

export function TagInfo({ tagId }: TagInfoProps) {
	const { tags } = useTagStore();
	const tag = tags.find((tag) => tag.id === tagId);

	const form = useForm<z.infer<typeof TagSchema>>({
		resolver: zodResolver(TagSchema),
		defaultValues: {
			icon: tag?.icon,
			name: tag?.name,
		},
	});
	return (
		<section className="min-h-full px-4 py-8">
			<h2 className="text-zinc-800">{tagId}</h2>
			<form className="flex flex-col gap-y-8">
				<div className="space-x-2">
					<input
						type="text"
						className="input w-12"
						{...form.register("icon")}
					/>
					<input type="text" className="input" {...form.register("name")} />
				</div>

				<div className="space-y-4">
					<div className="flex items-center gap-x-2 px-2 text-lg font-semibold text-zinc-400">
						<IconListDetails />
						<span>Propriedades</span>
					</div>
					<div className="flex h-20 items-center rounded border-l-4 border-purple-900 bg-zinc-900 px-12 text-zinc-200">
						{tag?.properties.map((property) => (
							<Property property={property} />
						))}
						<button type="button" className="flex items-center gap-x-3">
							<IconPlus /> Adicionar Propriedade
						</button>
					</div>
				</div>
				<div className="w-ful min-h-12 rounded-md border-2 border-zinc-800 p-2 text-zinc-800">
					<textarea
						placeholder="Type ‘’/’’ to see commands or ‘’#/’’ to see internal links"
						className="inputBase w-full"
					></textarea>
				</div>
			</form>
		</section>
	);
}
