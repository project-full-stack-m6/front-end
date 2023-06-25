import { SubmitHandler, useForm } from "react-hook-form";
import { patchUser } from "../../features/user/userApi";
import { useAppDispatch } from "../../hooks";
import { addUser, iUser } from "../../features/user/userSlice";
import { Dispatch, SetStateAction } from "react";

interface iFormEditUser {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  user: iUser | null;
}

export const FormEditUser = ({ setOpenModal, user }: iFormEditUser) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const submitContact: SubmitHandler<any> = (data: iUser) => {
    dispatch(patchUser(data)).then((res) => dispatch(addUser(res.payload)));
  };
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-4 gap-5">
      <form
        className=" bg-gray-5 border-2 rounded-radius-3 p-6 b flex flex-col justify-between gap-4"
        onSubmit={handleSubmit(submitContact)}
      >
        <label className="text-body-1 text-gray-1 font-600" htmlFor="">
          Nome
        </label>
        <input
          className="pl-2 pr-1 py-2 border-2 shadow-sm rounded-radius-2"
          type="text"
          defaultValue={user?.name}
          {...register("name")}
        />
        <label className="text-body-1 text-gray-1 font-600" htmlFor="">
          Email
        </label>
        <input
          className="pl-2 pr-1 py-2 border-2 shadow-sm rounded-radius-2"
          type="text"
          defaultValue={user?.email}
          {...register("email")}
        />
        <label className="text-body-1 text-gray-1 font-600" htmlFor="">
          Telefone
        </label>
        <input
          className="pl-2 pr-1 py-2 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("phone")}
          defaultValue={user?.phone}
        />
        <div className="flex gap-3 self-end">
          <button className="p-2 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1 text-center">
            Confirmar
          </button>
          <button
            onClick={() => setOpenModal(false)}
            className="p-2 rounded-radius-2 bg-gray-3 text-gray- text-body-1 text-center"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
