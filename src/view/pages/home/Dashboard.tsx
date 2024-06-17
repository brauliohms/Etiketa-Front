import { Main } from "./components/Main";
import { Menu } from "./components/Menu/Menu";
import { useTag } from "./components/Tag";

export function Dashboard() {
	const { handleSelectTag, selectedTag, cleanSelectTag } = useTag();

	// Vale a pena colocar o tagsState no Context ou Zustand
	// useEffect(() => {
	// 	if (tagsState.length === 0) cleanSelectTag();
	// }, [cleanSelectTag, tagsState.length]);

	return (
		<>
			<Menu setSelectedTag={handleSelectTag} />
			<Main tagId={selectedTag} />
		</>
	);
}
