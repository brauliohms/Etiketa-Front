import { useAuth } from "../../../../../app/hooks/useAuth";
import { useTagStore } from "../../../../../store/TagStore";
import { Button } from "../../../../components/Button";
import { ConfIcon, PlusIcon, UserIcon } from "../../../../components/Icons";
import { TagMenuItem } from "../Tag";
import { MenuItem } from "./MenuItem";

export function Menu() {
	const { user } = useAuth();
	const { addTag, tags, cleanSelectedTag } = useTagStore();
	console.log(tags);
	// TODO: criar fetch para obter as tags do usuário ao iniciar o componente e colocar no estado com o
	// updateTags(tags: TagInterface[])

	return (
		<aside className="flex w-14 flex-col gap-y-6 border-r-2 border-zinc-800 py-6 pl-4 lg:w-96 lg:pl-8">
			<MenuItem title="Meu Perfil" icon={UserIcon} url="#" />
			<MenuItem title="Configurações" icon={ConfIcon} url="#" />
			<h3 className="invisible text-base text-white lg:visible">SUPERTAGS</h3>
			<section className="mb-4 flex flex-col gap-y-4">
				<button
					type="button"
					onClick={cleanSelectedTag}
					className="text-center text-white"
				>
					Remover SelectedTAG
				</button>
				{tags.map((tag) => (
					<TagMenuItem key={tag.id} tag={tag} />
				))}
			</section>
			<div>
				<Button
					type="button"
					className="flex items-center justify-center gap-x-4 border bg-transparent px-0.5 text-white lg:w-64"
					onClick={() => addTag(user!.accountId)}
				>
					<PlusIcon className="w-6" />
					<span className="hidden lg:inline">Nova SuperTag</span>
				</Button>
			</div>
		</aside>
	);
}
