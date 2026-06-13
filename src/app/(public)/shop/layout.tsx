"use client";

import React, { type PropsWithChildren } from "react";
import "@/app/globals.css";
import dynamic from "next/dynamic";

const DynamicShopMenu = dynamic(
  () => import("./ShopMenu").then((mod) => mod.default),
  { ssr: false, loading: () => <p>Loadinssssssg...</p>},
);
export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen">
      <h1 className="text-6xl font-bold">Our menu</h1>
      <DynamicShopMenu />
      {children}
    </div>
  );
}
