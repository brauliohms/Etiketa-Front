import { useAuth } from "../../app/hooks/useAuth";
import { Bars3Icon } from "./Icons/Bars3Icon";
import { UserInfo } from "./UserInfo";

export function TopBar() {
	//apenas coloquei logout para teste
	const { signout, user } = useAuth();

	return (
		<nav className="flex h-[88px] w-full items-center justify-between border-b-2 border-zinc-800 bg-zinc-900 px-4 lg:px-8">
			<div className="flex items-center gap-2">
				<button type="button">
					<Bars3Icon className="h-6 text-white" />
				</button>
				<button onClick={signout} className="text-white">
					Sair
				</button>
			</div>

			{user && <UserInfo user={user} />}
		</nav>
	);
}
