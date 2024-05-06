import { lessons, units } from "@/db/schema";
import { LessonButton } from "./lesson-button";
import { UnitBanner } from "./unit-banner";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col">
        {lessons.map((lesson, index) => {
          const isCorrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCorrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              locked={isLocked}
              current={isCorrent}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
