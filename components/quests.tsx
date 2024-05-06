import { quests } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

type QuestsProps = {
  points: number;
};

export const Quests = ({ points }: QuestsProps) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;
          return (
            <li
              className="flex items-center justify-between w-full pb-4 gap-x-3"
              key={quest.title}
            >
              <Image src="/points.png" alt="Points" width={40} height={40} />
              <div className="w-full flex flex-col items-center gap-y-2">
                <p className="font-bold text-sm text-neutral-700">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
