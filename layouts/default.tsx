import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container h-full max-w-full flex-grow ">
        {children}
      </main>

    </div>
  );
}
