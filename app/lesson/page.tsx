import { getLesson, getUserProgress, getUserSubscriptions } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

export const dynamic = "force-dynamic";

const LessonPage = async () => {
  const lessonData = await getLesson();
  const userProgressData = await getUserProgress();
  const userSubscriptionData = await getUserSubscriptions();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge: any) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonPage;
