import { Suspense } from "react";

import "@/app/globals.css";
import Loading from "./loading";
import Error from "./error";

export const metadata = {
  title: "About Page",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <h3>About Layout</h3>
      <main>
        <Suspense fallback={<Loading />}>
         {children}
        </Suspense>
      </main>
    </div>
  );
}
