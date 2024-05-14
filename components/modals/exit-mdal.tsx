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
import { useExitModal } from "@/store/user-exit-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const useModal = createSelectors(useExitModal);
  const isOpen = useModal.use.isOpen();
  const close = useModal.use.onClose();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  const handleClose = () => {
    router.push("/learn");
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-5">
            <Image src="/images/sad.png" alt="Mascot" width={80} height={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wait, don&apos;t go!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&aposre about to leave the lesson. Are you sure
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
              Kepp learning
            </Button>
            <Button
              size="lg"
              variant="dangerOutline"
              className="w-full"
              onClick={handleClose}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
