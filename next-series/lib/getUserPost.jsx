export default async function getUserPost(id) {
    const fetchUserPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`, {next: {revalidate: 60}}
    );
  
    if (!fetchUserPost.ok) return undefined
    
    return fetchUserPost.json();
  }
  