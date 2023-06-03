import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../hooks";

export const FormLogin = () => {
  return (
    <div className="p-6 border-2 border-gray-2 rounded-radius-3 flex flex-col gap-6">
      <h1 className="text-heading-1 text-gray-2">Seja bem vindo novamente</h1>
      <label className="text-body-1 text-gray-2 font-600" htmlFor="">
        Email
      </label>
      <input
        className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
        type="text"
      />
      <form className="flex flex-col  gap-5" action="">
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Senha
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
        />

        <Link
          href="/home"
          className="w-full p-4 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1 text-center"
        >
          Entrar
        </Link>
        <span className="text-center text-body-2 text-gray-2">
          Esqueceu a senha?
        </span>
        <Link href="/register">Ainda não possui conta? se cadastre aqui</Link>
      </form>
    </div>
  );
};
