
export default async function  getAllUsers() {
    
    const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!fetchUsers.ok) return undefined

  return fetchUsers.json()
}
