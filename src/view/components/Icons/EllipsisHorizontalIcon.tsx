import { SVGAttributes } from "react";

export function EllipsisHorizontalIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			// dataSlot="icon"
			aria-hidden="true"
			fill="none"
			strokeWidth={1.5}
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
