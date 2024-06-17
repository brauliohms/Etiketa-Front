import { Button } from "../../../../components/Button";
import { ConfIcon, PlusIcon, UserIcon } from "../../../../components/Icons";
import { TagMenuItem, useTag } from "../Tag";
import { MenuItem } from "./MenuItem";

interface MenuProps {
	setSelectedTag(id: string): void;
}

export function Menu({ setSelectedTag }: MenuProps) {
	const { delTag, newChild, newTag, tagsState } = useTag();

	return (
		<aside className="flex w-14 flex-col gap-y-6 border-r-2 border-zinc-800 py-6 pl-4 lg:w-96 lg:pl-8">
			<MenuItem title="Meu Perfil" icon={UserIcon} url="#" />
			<MenuItem title="Configurações" icon={ConfIcon} url="#" />
			<h3 className="invisible text-base text-white lg:visible">SUPERTAGS</h3>
			<section className="mb-4 flex flex-col gap-y-4">
				{tagsState.map((tag, index) => (
					<TagMenuItem
						key={index}
						delTag={delTag}
						index={index}
						newChild={newChild}
						tag={tag}
						setSelectedTag={setSelectedTag}
					/>
				))}
			</section>
			<div>
				<Button
					type="button"
					className="flex items-center justify-center gap-x-4 border bg-transparent px-0.5 text-white lg:w-64"
					onClick={newTag}
				>
					<PlusIcon className="w-6" />
					<span className="hidden lg:inline">Nova SuperTag</span>
				</Button>
			</div>
		</aside>
	);
}
