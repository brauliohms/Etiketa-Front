import { useEffect } from "react";
import { Id } from "../../../../../app/common";
import { useAuth } from "../../../../../app/hooks/useAuth";
import { useTagStore } from "../../../../../store/TagStore";
import { EllipsisHorizontalIcon, PlusIcon } from "../../../../components/Icons";
import { TagInterface } from "../../../../types";
import { useTag } from "./hooks";

interface TagProps {
	tag: TagInterface;
}

export function TagMenuItem({ tag }: TagProps) {
	const { user } = useAuth();
	const { isTagMenuItemOpen, openTagMenuItem, closeTagMenuItem } = useTag();
	const { handleSelectTag, tags, updateTags } = useTagStore();

	useEffect(() => {
		if (tag.child.length > 0) {
			openTagMenuItem();
		} else {
			closeTagMenuItem();
		}
	}, [closeTagMenuItem, openTagMenuItem, tag.child.length]);

	// Funções para adicionar/remover tags de forma recursiva --------------------
	function addChildTag(parentId: string, tags: TagInterface[]): TagInterface[] {
		return tags.map((tag) => {
			if (tag.id === parentId) {
				return {
					...tag,
					child: [
						...tag.child,
						{
							id: Id.gerar(),
							user_id: user!.accountId,
							name: "Sem Título",
							icon: "#️⃣",
							properties: [],
							child: [],
						},
					],
				};
			} else if (tag.child.length > 0) {
				return {
					...tag,
					child: addChildTag(parentId, tag.child),
				};
			}
			return tag;
		});
	}

	function removeTag(tagId: string, tags: TagInterface[]): TagInterface[] {
		return tags
			.filter((tag) => tag.id !== tagId)
			.map((tag) => ({
				...tag,
				child: removeTag(tagId, tag.child),
			}));
	}
	// ---------------------------------------------------------------------------

	// Funções para manipular todas as tags após adicionar/remover ---------------
	function handleAddChildTag(id: string): void {
		const newArrayTags = addChildTag(id, tags);
		updateTags(newArrayTags);
	}

	function handleRemoveTag(id: string): void {
		const newArrayTags = removeTag(id, tags);
		updateTags(newArrayTags);
	}
	// ---------------------------------------------------------------------------

	return (
		<details
			open={isTagMenuItemOpen}
			className="group max-h-fit w-full overflow-hidden rounded-md transition-[max-height] duration-500 open:!max-h-fit"
		>
			<summary
				className="relative flex w-full cursor-pointer items-center justify-between px-2 py-2 text-base outline-none marker:text-transparent before:absolute before:-left-1 before:top-2/4 before:h-[18px] before:w-[18px] before:origin-center before:-translate-y-2/4 before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')] before:bg-[length:18px_18px] before:bg-center before:bg-no-repeat before:transition-transform before:duration-200 hover:bg-zinc-900 group-open:before:rotate-90"
				onClick={() => handleSelectTag(tag.id)}
			>
				<div className="space-x-2">
					<span className="ml-4">{tag.icon}</span>
					<span className="text-white">{tag.name}</span>
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={() => handleRemoveTag(tag.id)}
						className="rounded-full hover:bg-gray-700"
					>
						<EllipsisHorizontalIcon className="w-5 text-gray-400 transition hover:stroke-white" />
					</button>
					<button
						onClick={() => handleAddChildTag(tag.id)}
						className="rounded-full hover:bg-gray-700"
					>
						<PlusIcon className="w-5 text-gray-400 transition hover:stroke-white" />
					</button>
				</div>
			</summary>
			<div className="mt-4 px-4 text-base text-white">
				{tag.child.map((childTag) => (
					<TagMenuItem key={childTag.id} tag={childTag} />
				))}
			</div>
		</details>
	);
}
