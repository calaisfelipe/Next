export default async function getUserByID(id) {
  const fetchUserById = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

 if (!fetchUserById.ok) return undefined

  return fetchUserById.json();
}
