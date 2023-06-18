import { iInitialState, selectUser } from "../../features/user/userSlice";
import { useAppSelector } from "../../hooks";

export const Contact = () => {
  const user = useAppSelector(selectUser) as iInitialState;

  const contacts = user.contacts;

  return (
    <ul className="flex flex-col justify-center gap-5">
      {contacts.map((elem: any) => (
        <li className="relative" key={elem.id}>
          <p className=" text-body-1 text-gray-1 font-600">{elem.name}</p>
          <p className="text-body-2 text-gray-2 font-500">{elem.email}</p>
          <p className="text-body-2 text-gray-2 font-500">{elem.address}</p>
          <p className="text-body-2 text-gray-2 font-500">{elem.date}</p>
          <button className="absolute top-0 right-0"> X </button>
        </li>
      ))}
    </ul>
  );
};
