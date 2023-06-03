import { useAppDispatch } from "../../hooks";
import Link from "next/link";

export const FormRegister = () => {
  return (
    <div className="p-6 border-2 border-gray-2 rounded-radius-3 flex flex-col gap-5">
      <h1 className="text-heading-1 text-gray-2">
        Seja bem vindo, faça seu cadastro já
      </h1>
      <form className="flex flex-col  gap-5" action="">
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Nome Completo
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Email
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Telefone
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Data de Registro
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
        />

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
