import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
  title: 'Users'
}

export default function RootLayout({ children }) {

  return (
    <div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
