import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/images/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/images/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/images/fr.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/images/hr.svg",
      },
      {
        id: 5,
        title: "Japanese",
        imageSrc: "/images/jp.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nuons",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Vocabulary",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Grammar",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Pronunciation",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Vocabulary",
        order: 5,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: "the woman is a",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);

    await db.insert(schema.challengesOptions).values([
      {
        challengeId: 1,
        text: "el hombre",
        correct: true,
        imageSrc: "/images/man.png",
        audioSrc: "/audio/es_man.mp3",
      },
      {
        challengeId: 1,
        text: "la mujer",
        correct: false,
        imageSrc: "/images/woman.png",
        audioSrc: "/audio/es_woman.mp3",
      },
      {
        challengeId: 1,
        text: "el robot",
        correct: false,
        imageSrc: "/images/robot.png",
        audioSrc: "/audio/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengesOptions).values([
      {
        challengeId: 2,
        text: "el hombre",
        correct: false,
        audioSrc: "/audio/es_man.mp3",
      },
      {
        challengeId: 2,
        text: "la mujer",
        correct: true,
        audioSrc: "/audio/es_woman.mp3",
      },
      {
        challengeId: 2,
        text: "el robot",
        correct: false,
        audioSrc: "/audio/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengesOptions).values([
      {
        challengeId: 3,
        text: "el hombre",
        correct: false,
        imageSrc: "/man.png",
        audioSrc: "/audio/es_man.mp3",
      },
      {
        challengeId: 3,
        text: "la mujer",
        correct: false,
        imageSrc: "/woman.png",
        audioSrc: "/audio/es_woman.mp3",
      },
      {
        challengeId: 3,
        text: "el robot",
        correct: true,
        imageSrc: "/robot.png",
        audioSrc: "/audio/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: "the woman is a",
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
