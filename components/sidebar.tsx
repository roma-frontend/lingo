"use client";

import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/images/mascot.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/images/learn.png" href="/learn" />
        <SidebarItem
          label="Leaderboard"
          iconSrc="/images/leaderboard.png"
          href="/leaderboard"
        />
        <SidebarItem
          label="Quests"
          iconSrc="/images/quests.png"
          href="/quests"
        />
        <SidebarItem label="Shop" iconSrc="/images/shop.png" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
