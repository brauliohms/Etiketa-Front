import { create } from "zustand";
import { Id } from "../app/common";
import { TagInterface } from "../view/types";

interface TagState {
	tags: TagInterface[];
	selectedTag: string;
	handleSelectTag: (id: string) => void;
	cleanSelectedTag: () => void;
	addTag: (user_id: string) => void;
	removeTag: (id: string) => void;
	updateTags: (tags: TagInterface[]) => void;
}

export const useTagStore = create<TagState>((set) => ({
	tags: [],
	selectedTag: "",
	handleSelectTag: (id) => set(() => ({ selectedTag: id })),
	cleanSelectedTag: () => set(() => ({ selectedTag: "" })),
	addTag: (user_id) =>
		set((state) => ({
			tags: [
				...state.tags,
				{
					id: Id.gerar(),
					user_id,
					name: "Sem Título",
					icon: "#️⃣",
					properties: [],
					child: [],
				},
			],
		})),
	removeTag: (id) =>
		set((state) => ({ tags: state.tags.filter((item) => item.id !== id) })),
	updateTags: (newTags) => set({ tags: newTags }),
}));
