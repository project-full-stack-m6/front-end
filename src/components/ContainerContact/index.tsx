import { Contact } from "../Contact";

export const ContainerContact = () => {
  return (
    <section className="flex flex-col gap-3 md:w-1/2">
      <h1 className="text-heading-1 text-gray-2">Contate xxxx</h1>
      <h3 className="text-body-2 text-gray-2 mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </h3>
      <Contact />
    </section>
  );
};
