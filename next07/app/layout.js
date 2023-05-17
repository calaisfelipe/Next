import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Chatting",
  description: "Artifical inteligence Chat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      max-h-screen max-w-screen`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
