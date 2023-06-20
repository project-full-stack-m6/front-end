import { useRouter } from "next/router";
import { deleteUser } from "../../features/user/userApi";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Modal } from "../Modal";
import { FormEditUser } from "../FormEditUser";
import { Dispatch, SetStateAction, useState } from "react";
import { selectUser } from "../../features/user/userSlice";

interface iPerfil {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const Perfil = ({ setOpenModal }: iPerfil) => {
  const select = useAppSelector;
  const dispatch = useAppDispatch();
  const user = select(selectUser).user;
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const submitDeleteUser = () => {
    dispatch(deleteUser()).then(() => {
      localStorage.removeItem("authToken");
      router.push("/");
    });
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-4 gap-5">
      <div className="relative bg-gray-5 border-2 rounded-radius-3 p-8 b flex flex-col justify-between gap-4 min-w-[260px]">
        <figure className="w-20 h-20 self-center rounded-full bg-gray-2">
          <img className=" object-cover" src="" alt="" />
        </figure>
        <p className="text-body-1 text-gray-1 font-600">Nome: {user?.name}</p>
        <p className="text-body-1 text-gray-1 font-600">Email: {user?.email}</p>
        <p className="text-body-1 text-gray-1 font-600">
          Telefone: {user?.phone}
        </p>
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-3 right-3 rounded-full w-8 h-8 bg-gray-1 text-gray-5 "
        >
          X
        </button>
        <button
          onClick={() => setOpenModalEdit(true)}
          className="p-2 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1 text-center"
        >
          Editar perfil
        </button>
        <button
          onClick={() => submitDeleteUser()}
          className="p-2 rounded-radius-2 bg-red-500 text-gray-5 text-body-1 text-center"
        >
          Excluir perfil
        </button>
      </div>
      <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
        <FormEditUser setOpenModal={setOpenModalEdit} />
      </Modal>
    </div>
  );
};
