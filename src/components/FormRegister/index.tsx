import Link from "next/link";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useAppDispatch } from "../../hooks";
import { postUser } from "../../features/user/api";

export const FormRegister = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<any> = async (data) =>
    await dispatch(postUser(data));
  return (
    <div className="p-6 border-2 border-gray-2 rounded-radius-3 flex flex-col gap-5">
      <h1 className="text-heading-1 text-gray-2">
        Seja bem vindo, faça seu cadastro já
      </h1>
      <form className="flex flex-col  gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Nome Completo
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("name")}
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Email
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("email")}
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Telefone
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("phone")}
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Senha
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="password"
          {...register("password")}
        />
        {/* <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Telefone
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("senha")}
        /> */}

        <button className="w-full p-4 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1">
          Cadastro
        </button>
        <span className="text-center text-body-2 text-gray-2">
          Esqueceu a senha?
        </span>
        <Link href="/" replace>
          Você já tem uma conta? entre aqui
        </Link>
      </form>
    </div>
  );
};
