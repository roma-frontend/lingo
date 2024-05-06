import { Progress } from "@/components/ui/progress";
import { createSelectors } from "@/store/create-selector";
import { useExitModal } from "@/store/user-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  const useModal = createSelectors(useExitModal);
  const open = useModal.use.onOpen();

  return (
    <header className="lg:pt-[3.125rem] pt-[1.25rem] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X
        onClick={open}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src="/hearts.png"
          alt="Heart"
          width={20}
          height={28}
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
