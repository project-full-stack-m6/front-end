import { Contact } from "../Contact";

export const ContainerContact = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-3 md:w-1/2">
      <h1 className="text-heading-1 text-center text-gray-1">Seus Contatos</h1>
      <h3 className="text-body-2 text-gray-2 mb-5 text-center">
        Aqui você pode adicionar novos contatos e assim estabelecer clientes e
        aumentar o seu networking!
      </h3>
      <Contact />
    </section>
  );
};
