import { create } from "zustand";
import { Id } from "../app/common";
import { TagInterface } from "../view/types";

interface TagState {
	tags: TagInterface[];
	selectedTag: string;
	handleSelectTag: (id: string) => void;
	cleanSelectedTag: () => void;
	addTag: () => void;
	removeTag: (id: string) => void;
	updateTags: (tags: TagInterface[]) => void;
}

const tagInicial: TagInterface = {
	id: Id.gerar(),
	name: "Sem Título",
	icon: "#️⃣",
	properties: [],
	child: [],
};

export const useTagStore = create<TagState>((set) => ({
	tags: [],
	selectedTag: "",
	handleSelectTag: (id) => set(() => ({ selectedTag: id })),
	cleanSelectedTag: () => set(() => ({ selectedTag: "" })),
	addTag: () => set((state) => ({ tags: [...state.tags, tagInicial] })),
	removeTag: (id) =>
		set((state) => ({ tags: state.tags.filter((item) => item.id !== id) })),
	updateTags: (newTags) => set({ tags: newTags }),
}));
