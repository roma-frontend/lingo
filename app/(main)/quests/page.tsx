import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { quests } from "@/constants";
import { getUserProgress, getUserSubscriptions } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = await getUserSubscriptions();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscribtion={isPro}
        />
        {!isPro && <Promo />}
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/quests.png" alt="Quests" width={90} height={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points and unlocking rewards.
          </p>
          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;
              return (
                <li
                  className="flex items-center justify-between w-full p-4 gap-x-4 border-t-2 hover:bg-gray-200/30"
                  key={quest.title}
                >
                  <Image
                    src="/points.png"
                    alt="Points"
                    width={60}
                    height={60}
                  />
                  <div className="w-full flex flex-col items-center gap-y-2">
                    <p className="font-bold text-xl text-neutral-700">
                      {quest.title}
                    </p>
                    <Progress value={progress} className="h-3" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
