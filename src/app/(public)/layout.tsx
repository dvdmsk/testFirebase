import Header from "@/components/Header";
import React, { type PropsWithChildren } from "react";
import "../globals.css";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-full max-w-xl flex justify-center px-4 py-8">
        {children}
      </div>
    </div>
  );
}
