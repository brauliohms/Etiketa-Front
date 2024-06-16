import { useState } from "react";
import { Button } from "../../../../components/Button";
import {
	ConfIcon,
	EllipsisHorizontalIcon,
	PlusIcon,
	UserIcon,
} from "../../../../components/Icons";
import { MenuItem } from "./MenuItem";

export function Menu() {
	const [tagsState, setTagsState] = useState<any[]>([]);

	const newTag = () => {
		setTagsState((tagsStateAtualizada) => {
			return [
				...tagsStateAtualizada,
				{ id: null, name: "Sem Título", icon: "#️⃣", child: [] },
			];
		});
	};
	// const newChild = (index: number) => {
	// 	setTagsState((tagsStateAtualizada) => {
	// 		const tag = tagsStateAtualizada.find((t) => t[index]);
	// 		tag.child.push({ id: null, name: "Sem Título", icon: "#️⃣", child: [] });
	// 		tagsStateAtualizada.filter((_, i) => i !== index);
	// 		return [...tagsStateAtualizada, tag];
	// 	});
	// };

	const newChild = (index: number) => {
		setTagsState((tagsStateAtualizada) => {
			const updatedTags = tagsStateAtualizada.map((tag, idx) => {
				if (idx === index) {
					return {
						...tag,
						child: [
							...tag.child,
							{ id: null, name: "Sem Título", icon: "#️⃣", child: [] },
						],
					};
				}
				return tag;
			});
			return updatedTags;
		});
	};
	const delTag = (index: number) => {
		setTagsState((tagsStateAtualizada) =>
			tagsStateAtualizada.filter((_, i) => i !== index),
		);
	};

	return (
		<aside className="flex w-14 flex-col gap-y-6 border-r-2 border-zinc-800 py-6 pl-4 lg:w-96 lg:pl-8">
			<MenuItem title="Meu Perfil" icon={UserIcon} url="#" />
			<MenuItem title="Configurações" icon={ConfIcon} url="#" />
			<h3 className="invisible text-base text-white lg:visible">SUPERTAGS</h3>
			<section className="mb-4 flex flex-col gap-y-4">
				{tagsState.map((tag, index) => (
					<details
						// open
						key={index}
						className="group max-h-[40px] w-full overflow-hidden rounded-md transition-[max-height] duration-500 open:!max-h-[120px]"
					>
						<summary className="relative flex w-full cursor-pointer items-center justify-between px-2 py-2 text-base outline-none marker:text-transparent before:absolute before:-left-1 before:top-2/4 before:h-[18px] before:w-[18px] before:origin-center before:-translate-y-2/4 before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')] before:bg-[length:18px_18px] before:bg-center before:bg-no-repeat before:transition-transform before:duration-200 hover:bg-zinc-900 group-open:before:rotate-90">
							<div className="space-x-2">
								<span className="ml-4">{tag.icon}</span>
								<span className="text-white">{tag.name}</span>
							</div>
							<div className="flex items-center gap-1">
								<button onClick={() => delTag(index)}>
									<EllipsisHorizontalIcon className="w-4 transition hover:stroke-white" />
								</button>
								<button
									onClick={() => newChild(index)}
									className="text-center hover:text-white"
								>
									<PlusIcon className="w-4 transition hover:stroke-white" />
								</button>
							</div>
						</summary>
						<div className="mt-4 px-4 text-base text-white">
							{tag.child.map((c, idx) => (
								<details
									// open
									key={`${index}-${idx}`}
									className="group max-h-[40px] w-full overflow-hidden rounded-md transition-[max-height] duration-500 open:!max-h-[80px]"
								>
									<summary className="relative flex w-full cursor-pointer items-center justify-between px-2 py-2 text-base outline-none marker:text-transparent before:absolute before:-left-1 before:top-2/4 before:h-[18px] before:w-[18px] before:origin-center before:-translate-y-2/4 before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')] before:bg-[length:18px_18px] before:bg-center before:bg-no-repeat before:transition-transform before:duration-200 hover:bg-zinc-900 group-open:before:rotate-90">
										<div className="space-x-2">
											<span className="ml-4">{c.icon}</span>
											<span className="text-white">{c.name}</span>
										</div>
										<div className="flex items-center gap-1">
											<button onClick={() => delTag(idx)}>
												<EllipsisHorizontalIcon className="w-4 transition hover:stroke-white" />
											</button>
											<button
												onClick={() => console.log("clicou")}
												className="text-center hover:text-white"
											>
												<PlusIcon className="w-4 transition hover:stroke-white" />
											</button>
										</div>
									</summary>
									<div className="mt-4 px-4 text-base text-white"></div>
								</details>
							))}
						</div>
					</details>
				))}
			</section>
			<div>
				<Button
					type="button"
					className="flex items-center justify-center gap-x-4 border bg-transparent px-0.5 text-white lg:w-64"
					onClick={() => newTag()}
				>
					<PlusIcon className="w-6" />
					<span className="hidden lg:inline">Nova SuperTag</span>
				</Button>
			</div>
		</aside>
	);
}
