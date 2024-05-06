"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createSelectors } from "@/store/create-selector";
import { usePracticeModal } from "@/store/use-practice-modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);

  const useModal = createSelectors(usePracticeModal);
  const isOpen = useModal.use.isOpen();
  const close = useModal.use.onClose();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-5">
            <Image src="/hearts.png" alt="Mascot" width={100} height={100} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use practice lessons to reagain hearts and points. You cannot loose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              size="lg"
              variant="primary"
              className="w-full"
              onClick={close}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
