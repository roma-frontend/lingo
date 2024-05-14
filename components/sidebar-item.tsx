"use client";

import { createSelectors } from "@/store/create-selector";
import { useSheetStore } from "@/store/use-sidebar-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const useSidebar = createSelectors(useSheetStore);
  const close = useSidebar.use.toggleSheet();
  const pathname = usePathname();
  const active = pathname === href;

  const handleItemClick = () => {
    close();
  };

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[3.2rem]"
      asChild
      onClick={handleItemClick}
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt="Sidebar icon"
          className="mr-5"
          width={32}
          height={32}
        />
        {label}
      </Link>
    </Button>
  );
};
