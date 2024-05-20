"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { createSelectors } from "@/store/create-selector";
import { useSheetStore } from "@/store/use-sidebar-toggle";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const useSidebar = createSelectors(useSheetStore);
  const open = useSidebar.use.isOpen();
  const close = useSidebar.use.toggleSheet();

  return (
    <Sheet open={open} onOpenChange={close}>
      <SheetTrigger asChild>
        <Menu
          className="text-[var(--main-text-color)] cursor-pointer hover:opacity-80"
          aria-label="Button to open sidebar"
        />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
