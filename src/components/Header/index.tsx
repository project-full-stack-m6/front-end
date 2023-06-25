import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addUser, selectUser } from "../../features/user/userSlice";
import { CardHeader } from "../CardHeader";
import { useRouter } from "next/dist/client/router";
import { Modal } from "../Modal";
import { Perfil } from "../Perfil";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface iButton {
  name: string;
  onClick: () => void;
}

type iNavButtons = iButton[];

export const Header = () => {
  const [navBar, setNavBar] = useState<boolean>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const select = useAppSelector;
  const dispatch = useAppDispatch();
  const user = select(selectUser).user;
  const router = useRouter();
  const { pathname } = router;

  const navButtons: iNavButtons = [
    { name: "Meu perfil", onClick: () => setOpenModal(true) },
    {
      name: "Sair",
      onClick: () => {
        window.localStorage.removeItem("authToken"),
          router.push("/"),
          dispatch(addUser(null));
      },
    },
  ];

  return (
    <header className="h-20  relative flex flex-col items-center justify-between shadow-md">
      <div className="w-full h-full px-[8%] flex items-center justify-between">
        <figure className="">
          <h1 className="w-full text-heading-2 font-600 text-gray-1 text-center rounded-radius-2">
            MyWallet
          </h1>
        </figure>
        {pathname === "/home" ? (
          <CardHeader
            onClick={() => setNavBar((active) => !active)}
            user={user!}
          />
        ) : (
          <button onClick={() => setNavBar((active) => !active)} className="">
            <Bars3Icon className="h-6 w-6 text-gray-1" />
          </button>
        )}
      </div>
      <nav
        className={`absolute top-20 w-full z-10 overflow-hidden transition-height duration-700 delay-50 h-0 ${
          navBar ? "h-56" : ""
        }`}
      >
        {pathname === "/home" ? null : (
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
        )}

        <ul className="bg-gray-3 flex flex-col items-center">
          {pathname === "/home"
            ? navButtons.map((elem) => (
                <li
                  key={elem.name}
                  onClick={elem.onClick}
                  className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:text-white cursor-pointer hover:bg-gray-2 delay-50 ease-in-out "
                >
                  {elem.name}
                </li>
              ))
            : null}
        </ul>
      </nav>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Perfil setOpenModal={setOpenModal} />
      </Modal>
    </header>
  );
};
