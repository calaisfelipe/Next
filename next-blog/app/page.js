import Posts from "./components/Posts"
import Profile from "./components/Profile"



export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-700 flex flex-col">
        <Profile />
        <Posts />
    </main>
  )
}
