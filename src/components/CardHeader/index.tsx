import { iUser } from "../../features/user/userSlice";

interface iCardHeader {
  user: iUser;
  onClick: () => void;
}

export const CardHeader = ({ user, onClick }: iCardHeader) => {
  return (
    <div
      className="flex justify-center items-center gap-2 cursor-pointer bg-gray-3 p-2 rounded-radius-2"
      onClick={onClick}
    >
      <figure className="w-10 h-10 rounded-full bg-gray-2">
        <img className="object-cover" src="" alt="" />
      </figure>
      <h2 className="text-heading-4 text-gray-2">{user?.name.split(" ")[0]}</h2>
    </div>
  );
};
