import { ReactNode } from "react";
import { EllipsisHorizontalIcon, PlusIcon } from "../../../../components/Icons";
import { TagInterface } from "../../../../types";

interface TagProps {
	delTag(index: number): void;
	newChild(index: number): void;
	tag: TagInterface;
	index: number;
	children?: ReactNode;
}

export function Tag({ newChild, delTag, tag, index, children }: TagProps) {
	return (
		<details
			// open
			key={index}
			className="group max-h-[40px] w-full overflow-hidden rounded-md transition-[max-height] duration-500 open:!max-h-fit"
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
				{tag.child.map((childTag, childIndex) => (
					<Tag
						key={`${index}-${childIndex}`}
						delTag={delTag}
						index={childIndex}
						newChild={newChild}
						tag={childTag}
					/>
				))}
				{children}
			</div>
		</details>
	);
}
