export const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: "Cristiano ronaldo",
      email: "cristiano@mail.com",
      address: "Porto",
      date: "22/12/2001",
    },
    {
      id: 2,
      name: "Ronaldo",
      email: "ronaldo@mail.com",
      address: "Rio de janeiro",
      date: "22/12/1996",
    },
  ];

  return (
    <ul className="flex flex-col justify-center gap-5">
      {contacts.map((elem) => (
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
