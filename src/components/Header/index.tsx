import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [navBar, setNavBar] = useState<boolean>();

  return (
    <header className="h-20  relative flex flex-col items-center justify-between shadow-md">
      <div className="w-full h-full px-[8%] flex items-center justify-between">
        <figure className="">
          <h1> projeto </h1>
        </figure>
        <button onClick={() => setNavBar((active) => !active)} className="">
          X
        </button>
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
            className="p-4 w-full bg-gray-5 text-body font-600 text-gray-1 text-center hover:"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="p-4 w-full bg-gray-1 text-body font-600 text-gray-5 text-center hover:"
          >
            Registro
          </Link>
        </div>
        <ul className="bg-gray-3 flex flex-col items-center">
          <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:">
            home
          </li>
          <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:">
            meu perfil
          </li>
          <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:">
            sobre
          </li>
          <li className="w-full text-center text-body-1 font-600 p-2 border-b-2 border-gray-2 text-gray-1 hover:">
            ajuda
          </li>
        </ul>
      </nav>
    </header>
  );
};
