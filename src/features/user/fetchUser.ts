export const fetchUser = async (type: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    name: "ユーザー",
    type,
  };
};
