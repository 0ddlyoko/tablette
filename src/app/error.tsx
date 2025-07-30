"use client";

import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Erreur capturée par error.tsx :", error);
  }, [error]);

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Error 💥
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, an unexpected error has occurred.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <button
              className="rounded-md flex items-center gap-2 bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={() => reset()}
            >
              <FaArrowLeft /> Go back home
            </button> */}
            <Button onClick={() => reset()}>
              <FaArrowLeft /> Go back home
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
