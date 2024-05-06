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
import { useHeartsModal } from "@/store/use-hearts-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const useModal = createSelectors(useHeartsModal);
  const isOpen = useModal.use.isOpen();
  const close = useModal.use.onClose();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  const handleClose = () => {
    close();
    router.push("/store");
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-5">
            <Image src="/bad.png" alt="Mascot" width={80} height={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get Pro for unlimited hearts, or purchase them in the store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              size="lg"
              variant="primary"
              className="w-full"
              onClick={handleClose}
            >
              Get unlimited hearts
            </Button>
            <Button
              size="lg"
              variant="primaryOutline"
              className="w-full"
              onClick={close}
            >
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
