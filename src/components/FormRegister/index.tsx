import Link from "next/link";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useAppDispatch } from "../../hooks";
import { postUser } from "../../features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "./schemas";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    mode: "onBlur",
    resolver: zodResolver(formRegisterSchema),
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<any> = async (data) =>
    await dispatch(postUser(data));
  return (
    <div className="p-8 border-2 border-gray-2 rounded-radius-3 flex flex-col gap-5">
      <h1 className="text-heading-1 text-gray-1 mb-4">
        Seja bem vindo a <span className="font-600">myWallet</span>, faça seu
        cadastro já
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Nome Completo
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-body-2 text-red-500">
            {errors.name.message}
          </span>
        )}
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Email
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-body-2 text-red-500">
            {errors.email.message}
          </span>
        )}
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Telefone
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("phone")}
        />
        {errors.phone && (
          <span className="text-body-2 text-red-500">
            {errors.phone.message}
          </span>
        )}
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Senha
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-body-2 text-red-500">
            {errors.password.message}
          </span>
        )}
        <button className="w-full p-4 mt-4 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1">
          Cadastro
        </button>
        <span className="text-center text-body-2 text-gray-2">
          Esqueceu a senha?
        </span>

        <Link className="text-center text-body-1 text-gray-1" href="/">
          Você já tem uma conta? entre aqui
        </Link>
      </form>
    </div>
  );
};
