import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../../../app/hooks/useAuth";
import { useSignin } from "../../../app/hooks/useSignin";
import { Button } from "../../components/Button";
import { ErrorStringFeedback } from "../../components/ErrorStringFeedback";
import { InputLabel } from "../../components/InputLabel";
import { Spinner } from "../../components/Spinner";
import { UserSignIn } from "../../types";

const schema = z.object({
	email: z.string().email("Preencha um email valído"),
	password: z.string().min(4, "Sua senha deve conter ao menos 4 caracteres"),
});

type DataForm = z.infer<typeof schema>;

export function Signin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataForm>({
		resolver: zodResolver(schema),
	});

	const { mutateAsync, isPending } = useSignin();

	const { signin: signinCredentials } = useAuth();

	const onSignin = async (dataForm: UserSignIn) => {
		try {
			const response: AxiosResponse<any> = await mutateAsync(dataForm);
			const token = response.data.token;
			const account = response.data.account;

			if (token && account) {
				signinCredentials(token, account);
			} else {
				if (response.status === 401) {
					throw new Error("Dados de autenticação inválidos");
				} else {
					throw new Error(
						response.data.message || "Ocorreu um erro ao fazer login",
					);
				}
			}
		} catch (error: any) {
			toast.error(error.message || "Ocorreu um erro ao fazer login");
		}
	};
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-4 p-5 text-white">
			<h1 className="max-w-[383px] text-center text-[32px] font-bold">
				Entre com a sua conta
			</h1>
			<form
				onSubmit={handleSubmit(onSignin)}
				className="flex w-full max-w-md flex-col gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-8 shadow-md"
			>
				<InputLabel
					id="email"
					label="Email"
					type="email"
					control={{ ...register("email") }}
				/>
				{errors.email && (
					<ErrorStringFeedback message={errors?.email.message} />
				)}
				<InputLabel
					id="password"
					label="Senha"
					type="password"
					control={{ ...register("password") }}
				/>
				{errors.password && (
					<ErrorStringFeedback message={errors?.password.message} />
				)}

				<Button disabled={isPending} type="submit" className="mt-10">
					{isPending ? <Spinner variant="md" /> : "Login"}
				</Button>
				<Link
					className="flex h-10 items-center justify-center rounded-md border border-zinc-700 bg-transparent transition-opacity hover:opacity-80"
					to="/signup"
				>
					Deseja se registrar?
				</Link>
			</form>
		</div>
	);
}
