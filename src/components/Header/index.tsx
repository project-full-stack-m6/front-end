import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../../features/user/userSlice";
import { CardHeader } from "../CardHeader";
import { ModalEditUser } from "../ModalEditUser";

export const Header = () => {
  const [navBar, setNavBar] = useState<boolean>();
  const [openModal, setOpenModal] = useState(true);

  const select = useAppSelector;
  const user = select(selectUser).user;

  return (
    <header className="h-20  relative flex flex-col items-center justify-between shadow-md">
      <div className="w-full h-full px-[8%] flex items-center justify-between">
        <figure className="">
          <h1 className="w-full text-heading-2 font-600 text-gray-1 text-center rounded-radius-2">
            MyWallet
          </h1>
        </figure>
        {user ? (
          <CardHeader
            onClick={() => setNavBar((active) => !active)}
            user={user}
          />
        ) : (
          <button onClick={() => setNavBar((active) => !active)} className="">
            Menu
          </button>
        )}
      </div>
      <nav
        className={`absolute top-20 w-full z-10 overflow-hidden transition-height duration-700 delay-50 h-0 ${
          navBar ? "h-56" : ""
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            replace
            className="p-4 w-full bg-gray-5 hover:bg-gray-2 text-body font-600 text-gray-1 hover:text-gray-5 text-center "
          >
            Login
          </Link>
          <Link
            href="/register"
            className="p-4 w-full bg-gray-1 hover:bg-gray-2 text-body font-600 text-gray-5 text-center hover:"
          >
            Registro
          </Link>
        </div>
        <ul className="bg-gray-3 flex flex-col items-center">
          {/* <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:text-white cursor-pointer hover:bg-gray-2 delay-50 ease-in-out ">
            home
          </li> */}
          <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:text-white cursor-pointer hover:bg-gray-2 delay-50 ease-in-out ">
            Meu perfil
          </li>
          <ModalEditUser openModal={openModal} setOpenModal={setOpenModal} />
          <li
            onClick={() => setOpenModal(true)}
            className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:text-white cursor-pointer hover:bg-gray-2 delay-50 ease-in-out "
          >
            Editar conta
          </li>
          <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:text-white cursor-pointer hover:bg-gray-2 delay-50 ease-in-out ">
            Deletar conta
          </li>
        </ul>
      </nav>
    </header>
  );
};
