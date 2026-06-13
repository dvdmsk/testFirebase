import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu";

export default function Header() {
  return (
    <div className="border-b flex bg-black">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/x-logo.svg"
          alt={"logo"}
          width={28}
          height={28}
          color="#fff"
          priority
        />
      </Link>

      <Menu />
      
    </div>
  );
}
