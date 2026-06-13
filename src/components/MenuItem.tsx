import Link from "next/link";
import type { IMenuItem } from "./menu.data";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  const { href, text } = menuItem
  return (
    <Link href={href} className={isActive ? "text-white" : "text-white/80"}>
      {text}
    </Link>
  );
}
