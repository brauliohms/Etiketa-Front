export const DefaultProfile = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 1080 1080"
		{...props}
	>
		<defs>
			<filter
				id="a"
				width="140%"
				height="140%"
				x="-20%"
				y="-20%"
				colorInterpolationFilters="linearRGB"
				filterUnits="objectBoundingBox"
				primitiveUnits="userSpaceOnUse"
			>
				<feMorphology
					in="SourceAlpha"
					operator="dilate"
					radius="20 20"
					result="morphology"
				/>
				<feFlood floodColor="#fff" floodOpacity={1} result="flood" />
				<feComposite
					in="flood"
					in2="morphology"
					operator="in"
					result="composite"
				/>
				<feMerge result="merge">
					<feMergeNode in="composite" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>
		<g filter="url(#a)">
			<g fill="#fff">
				<title>{"Face/ 5"}</title>
				<path
					fillRule="evenodd"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={24}
					d="M532 379c132.548 0 240 107.452 240 240s-67.452 240-240 240c-126.157 0-196.133-57.44-224.641-140.133C265.337 716.465 232 681.625 232 639c0-39.865 29.159-72.92 67.312-79C325.6 455.98 419.81 379 532 379ZM295.859 624.545l8.282 30.91"
				/>
			</g>
			<title>{"Nose/ 3"}</title>
			<path
				fillRule="evenodd"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={16}
				d="M637.781 595.783c17.399 41.893 25.164 70.871 23.294 86.933C659.205 698.78 647.514 703.54 626 697"
			/>
			<g
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={12}
			>
				<path
					d="M696 748.043s-43.307 3.649-71.381 2.348C596.544 749.09 544 741 544 741s23.514 72 77.26 72c29.392 0 43.229-11.56 57.944-33.652 6.011-9.024 16.796-31.305 16.796-31.305Z"
					clipRule="evenodd"
				/>
				<path d="M708 745.444s-47.788 7.778-85.515 4.667C584.758 747 542 740 542 740" />
				<path d="M537 745s2.438-4.615 5.688-6.923C545.938 735.769 550 735 550 735M569 788s19.349-11 56.365-11c37.016 0 49.635 9.429 49.635 9.429" />
			</g>
			<title>{"Eyes/ 8"}</title>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M570 516c8.837 0 16 10.745 16 24s-7.163 24-16 24-16-10.745-16-24 7.163-24 16-24Zm138 0c8.837 0 16 10.745 16 24s-7.163 24-16 24-16-10.745-16-24 7.163-24 16-24Z"
			/>
			<title>{"Eyebrows/ 0"}</title>
			<g
				fillRule="evenodd"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={16}
			>
				<path d="M525 508c12.889-10.667 27.889-16 45-16s32.111 5.333 45 16M663 508c12.889-10.667 27.889-16 45-16s32.111 5.333 45 16" />
			</g>
			<path
				fill="#fff"
				fillRule="evenodd"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={12}
				d="M805.209 500.217c.604-8.933-6.557-16.217-15.51-16.217H455c-8.837 0-16 7.163-16 16v75.76c0 4.946 2.26 9.592 6.249 12.515C465.881 603.396 532.959 650 575.94 650c51.304 0 43.821-61.657 90.381-61.657S690.97 650 747.116 640.514c44.584-7.532 55.492-101.797 58.093-140.297Z"
				clipRule="evenodd"
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				d="M783.642 509.995c.251-4.486-3.342-8.148-7.835-8.148H465a8 8 0 0 0-8 8v51.502c0 2.41 1.047 4.659 2.946 6.144 14.62 11.434 80.299 60.977 120.6 60.977 31.061 0 22.851-54.981 81.541-59.979 58.69-4.999 42.557 54.981 80.867 51.649 32.079-2.79 39.215-83.852 40.688-110.145Z"
				clipRule="evenodd"
			/>
			<mask
				id="b"
				width={327}
				height={128}
				x={457}
				y={501}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "alpha",
				}}
			>
				<path
					fill="#fff"
					fillRule="evenodd"
					d="M783.642 509.995c.251-4.486-3.342-8.148-7.835-8.148H465a8 8 0 0 0-8 8v51.502c0 2.41 1.047 4.659 2.946 6.144 14.62 11.434 80.299 60.977 120.6 60.977 31.061 0 22.851-54.981 81.541-59.979 58.69-4.999 42.557 54.981 80.867 51.649 32.079-2.79 39.215-83.852 40.688-110.145Z"
					clipRule="evenodd"
				/>
			</mask>
			<g
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				mask="url(#b)"
			>
				<path strokeWidth={16} d="m671.808 492.742 109.456 88.086" />
				<path strokeWidth={8} d="m696.436 478.979 109.456 88.086" />
			</g>
			<path
				fill="#000"
				fillRule="evenodd"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={12}
				d="M439 492.036 284 523v43.875L439 552v-59.964Z"
				clipRule="evenodd"
			/>
			<path
				fill="#000"
				fillRule="evenodd"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={12}
				d="M304.306 565.52c32.937 20.231 61.205 107.192 61.205 107.192S365.252 601.808 393 560c27.749-41.808 67.001-77 67.001-77s-7-16-15.561-31.05c-8.56-15.051-44.541-42.66-44.541-42.66s182.635 56.941 242.713 45.067c60.078-11.873 107.009-34.055 137.903-89.408 30.894-55.354 36.075-151.701 36.075-151.701s-83.176 53.218-120.758 47.246c-37.582-5.971-56.064-22.314-75.88-52.586-7.691-11.749-26.792-45.438-26.792-45.438s-6.741 22.896-6.343 29.609c1.388 23.422 6.799 26.98-1.136 22.814-16.463-8.643-33.951-17.752-52.357-27.486-14.27-7.546-35.694-36.624-35.694-36.624s-6.595 20.106-3.982 34.672c1.644 9.16 17.173 38.852 17.173 38.852s-25.169-24.836-68.727-25.362c-25.239-.304-61.145 11.872-108.117 23.66-7.072 1.775-22.153-.697-22.153-.697l42.443 23.48s-79.733 25.804-98.478 51.717c-6.389 8.831-15.388 20.76-23.007 37.801-7.285 16.294-21.266 65.43-21.266 65.43s8.284-23.15 26.363-39.348c18.079-16.199 57.655-18.972 57.655-18.972s-54.317 32.808-63.425 68.478c-9.107 35.671 19.226 162.194 19.226 162.194s20.033-27.399 52.971-7.168Z"
				clipRule="evenodd"
			/>
			<title>{"Accessories/ 0"}</title>
			<title>{"Details/ 0"}</title>
			<title>{"Beard/ 0"}</title>
		</g>
	</svg>
);
