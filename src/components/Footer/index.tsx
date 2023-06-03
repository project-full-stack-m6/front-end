export const Footer = () => {
  return (
    <footer className="bg-gray-2 px-[7%] py-5 text-gray-4">
      <div className="w-full flex flex-col items-center ">
        <h2 className="">Uma organização que você tem que fazer parte</h2>
        <button className="p-4 rounded-radius-2"> Venha se juntar a nós</button>
      </div>
      <div className="w-full flex justify-between ">
        <div>
          <h3>projeto</h3>
          <p>somos uma empresa</p>
        </div>
        <ul className="flex justify-between gap-6">
          <ul>
            <li>Links</li>
            <li>opção 2</li>
            <li>opção 3</li>
            <li>opção 4</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>opção 2</li>
            <li>opção 3</li>
            <li>opção 4</li>
          </ul>
          <ul>
            <li>Get in Tech</li>
            <li>opção 2</li>
            <li>opção 3</li>
            <li>opção 4</li>
          </ul>
        </ul>
      </div>
    </footer>
  );
};
