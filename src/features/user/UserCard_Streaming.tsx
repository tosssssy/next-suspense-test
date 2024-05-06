import { fetchUser } from "./fetchUser";

export const UserCard_Streaming = async ({}) => {
  const user = await fetchUser("streaming");
  return (
    <div className="text-4xl h-10">
      {user.type} {user.name}
    </div>
  );
};

export const UserCard_StreamingSkeleton = ({}) => {
  return <div className="text-4xl h-10">loading...</div>;
};
