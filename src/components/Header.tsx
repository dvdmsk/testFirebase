import Image from "next/image";
import Link from "next/link";
import React from "react";
import xLogo from '@public/x-logo.svg?react'
type Props = {};

export default function Header({}: Props) {
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

      <nav className="flex gap-6 text-sm text-white/80 ml-auto">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
