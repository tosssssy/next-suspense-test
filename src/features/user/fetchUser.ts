export const fetchUser = async (type: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?id=3",
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const user = await response.json();

  return {
    name: user[0].name,
    type,
  };
};
