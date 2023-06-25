import { RegisterContact } from "../RegisterContact";

export const ContainerRegisterContact = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-6 md:w-1/2">
      <h3 className=" text-heading-3 text-gray-1 font-700 text-center">
        Aumente a sua rede de contatos
      </h3>
      <RegisterContact />
    </section>
  );
};
