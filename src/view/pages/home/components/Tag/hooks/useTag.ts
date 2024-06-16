import { useCallback, useState } from "react";
import { TagInterface } from "../../../../../types";

export function useTag() {
	const [tagsState, setTagsState] = useState<TagInterface[]>([]);
	const [isTagMenuItemOpen, setIsTagMenuItemOpen] = useState<boolean>(false);

	const closeTagMenuItem = useCallback(() => setIsTagMenuItemOpen(false), []);
	const openTagMenuItem = useCallback(() => setIsTagMenuItemOpen(true), []);

	const newTag = () => {
		setTagsState((tagsStateAtualizada) => {
			return [
				...tagsStateAtualizada,
				{ id: "", name: "Sem Título", icon: "#️⃣", properties: [], child: [] },
			];
		});
	};

	// const newChild = (index: number) => {
	// 	setTagsState((tagsStateAtualizada) => {
	// 		const updatedTags = tagsStateAtualizada.map((tag, idx) => {
	// 			if (idx === index) {
	// 				return {
	// 					...tag,
	// 					child: [
	// 						...tag.child,
	// 						{
	// 							id: "",
	// 							name: "Sem Título",
	// 							icon: "#️⃣",
	// 							properties: [],
	// 							child: [],
	// 						},
	// 					],
	// 				};
	// 			}
	// 			return tag;
	// 		});
	// 		return updatedTags;
	// 	});
	// };
	const newChild = (index: number) => {
		setTagsState((tagsStateAtualizada) => {
			const addNewChild = (
				tags: TagInterface[],
				idx: number,
			): TagInterface[] => {
				return tags.map((tag, i) => {
					if (i === idx) {
						return {
							...tag,
							child: [
								...tag.child,
								{
									id: "",
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
							child: addNewChild(tag.child, idx),
						};
					}
					return tag;
				});
			};

			return addNewChild(tagsStateAtualizada, index);
		});
	};

	// const delTag = (index: number) => {
	// 	setTagsState((tagsStateAtualizada) =>
	// 		tagsStateAtualizada.filter((_, i) => i !== index),
	// 	);
	// };

	const delTag = (parentIndex: number, childIndex?: number) => {
		setTagsState((tagsStateAtualizada) => {
			const removeTag = (
				tags: TagInterface[],
				pIndex: number,
				cIndex?: number,
			): TagInterface[] => {
				return tags
					.map((tag, i) => {
						if (i === pIndex) {
							if (cIndex !== undefined) {
								return {
									...tag,
									child: tag.child.filter((_, j) => j !== cIndex),
								};
							} else {
								// Remove the parent tag itself
								return null;
							}
						}
						if (tag.child.length > 0) {
							return {
								...tag,
								child: removeTag(tag.child, pIndex, cIndex),
							};
						}
						return tag;
					})
					.filter(Boolean) as TagInterface[];
			};

			return removeTag(tagsStateAtualizada, parentIndex, childIndex);
		});
	};

	return {
		tagsState,
		newChild,
		newTag,
		delTag,
		isTagMenuItemOpen,
		closeTagMenuItem,
		openTagMenuItem,
	};
}
