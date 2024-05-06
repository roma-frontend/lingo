import { courses } from "@/db/schema";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscribtion: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscribtion,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
            className="rounded-md"
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button
          variant={"ghost"}
          className="text-orange-500 flex items-center gap-2"
        >
          <Image src="/points.png" alt="points" width={28} height={28} />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button
          variant={"ghost"}
          className="text-rose-500 flex items-center gap-2"
        >
          <Image src="/hearts.png" alt="hearts" width={22} height={22} />
          {hasActiveSubscribtion ? (
            <InfinityIcon className="w-4 h-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
