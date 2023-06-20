import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginUser } from "../../features/auth/authApi";
import { useRouter } from "next/router";
import { iUser } from "../../features/user/userSlice";

export const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<any> = (data: iUser) => {
    dispatch(loginUser(data)).then((res) => {
      if (res.payload) {
        router.push("home");
      }
    });
  };

  return (
    <div className="p-6 border-2 border-gray-2 rounded-radius-3 flex flex-col gap-6">
      <h1 className="text-heading-1 text-gray-2">Seja bem vindo novamente</h1>
      <form className="flex flex-col  gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Email
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("email")}
        />
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Senha
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("password")}
        />

        <button className="w-full p-4 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1 text-center">
          Entrar
        </button>
        <span className="text-center text-body-2 text-gray-2">
          Esqueceu a senha?
        </span>
        <Link href="/register">Ainda não possui conta? se cadastre aqui</Link>
      </form>
    </div>
  );
};
