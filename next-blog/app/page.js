import Posts from "./components/Posts";
import Profile from "./components/Profile";

export const revalidate = 10;

export default function Home() {
  
  return (
    <main className="min-h-screen bg-teal-700 flex flex-col">
      <Profile />
      <Posts />
   
    </main>
  );
}
