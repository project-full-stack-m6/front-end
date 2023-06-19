import {
  addContact,
  iInitialState,
  selectUser,
} from "../../features/user/userSlice";
import { removeContact } from "../../features/user/userApi";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Contact = () => {
  const user = useAppSelector(selectUser) as iInitialState;

  const contacts = user.contacts;
  const dispatch = useAppDispatch();

  const submitContact: any = (contactId: number) => {
    dispatch(removeContact(contactId)).then((res: any) => {
      dispatch(addContact(res.payload));
    });
  };

  return (
    <ul className="flex flex-col justify-start gap-5 overflow-y-scroll h-52 w-full pr-4 bg-gray-3 p-4 rounded-radius-3">
      {contacts.map((elem: any) => (
        <li className="relative p-5 bg-gray-4 rounded-radius-2" key={elem.id}>
          <p className=" text-body-1 text-gray-1 font-600">{elem.name}</p>
          <p className="text-body-2 text-gray-2 font-500">{elem.email}</p>
          <p className="text-body-2 text-gray-2 font-500">{elem.address}</p>
          <p className="text-body-2 text-gray-2 font-500">{elem.date}</p>
          <button
            onClick={() => submitContact(elem.id)}
            className="absolute w-6 h-6 top-2 right-2 rounded-full bg-red-400"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
