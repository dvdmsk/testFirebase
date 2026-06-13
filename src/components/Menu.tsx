"use client";

import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 text-sm text-white/80 ml-auto">
      {MENU_ITEMS.map((menuItem) => (
        <MenuItem
          key={menuItem.href}
          menuItem={menuItem}
          isActive={!!match(menuItem.href)(pathname)}
        />
      ))}
    </nav>
  );
}
