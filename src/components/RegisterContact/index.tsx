import { SubmitHandler, useForm } from "react-hook-form";
import { postContact } from "../../features/user/userApi";
import { useAppDispatch } from "../../hooks";
import { addContact } from "../../features/user/userSlice";

interface iRegisterContact {
  email: string;
}

export const RegisterContact = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();

  const submitContact: SubmitHandler<any> = (data: iRegisterContact) => {
    dispatch(postContact(data)).then((res) =>
      dispatch(addContact(res.payload))
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <form
        className="border-gray-2 border-2 rounded-radius-2 p-6 b flex flex-col justify-between gap-5"
        onSubmit={handleSubmit(submitContact)}
      >
        <label className="text-body-1 text-gray-2 font-600" htmlFor="">
          Email
        </label>
        <input
          className="pl-2 pr-1 py-3 border-2 shadow-sm rounded-radius-2"
          type="text"
          {...register("email")}
        />
        <button className="p-2 rounded-radius-2 bg-gray-1 text-gray-5 text-body-1 text-center">
          Adicionar Contato
        </button>
      </form>
    </div>
  );
};
