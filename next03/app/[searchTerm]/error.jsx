"use client"; // Error components must be Client components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {

    const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push('/')
        }
      >
        Go back to the Home Page
      </button>
    </div>
  );
}

