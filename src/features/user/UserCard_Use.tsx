import { FC, use } from "react";
import { fetchUser } from "./fetchUser";

type UserCard_UseProps = {
  fetchUserPromise: ReturnType<typeof fetchUser>;
};

export const UserCard_Use: FC<UserCard_UseProps> = ({ fetchUserPromise }) => {
  const user = use(fetchUserPromise);

  return (
    <div className="text-4xl h-10">
      {user.type} {user.name}
    </div>
  );
};

export const UserCard_UseSkeleton = ({}) => {
  return <div className="text-4xl h-10">loading...</div>;
};
