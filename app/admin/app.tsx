"use client";

import simpleResProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { CourseList } from "./course/list";

import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { LessonList } from "./lesson/list";

import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";
import { UnitList } from "./unit/list";

import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeList } from "./challenge/list";

import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";
import { ChallengeOptionList } from "./challengeOption/list";

const dataProvider = simpleResProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        edit={CourseEdit}
        recordRepresentation="title"
        create={CourseCreate}
      />
      <Resource
        name="units"
        list={UnitList}
        edit={UnitEdit}
        recordRepresentation="title"
        create={UnitCreate}
      />
      <Resource
        name="lessons"
        list={LessonList}
        edit={LessonEdit}
        recordRepresentation="title"
        create={LessonCreate}
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        edit={ChallengeEdit}
        recordRepresentation="question"
        create={ChallengeCreate}
      />
      <Resource
        name="challengeOptions"
        list={ChallengeOptionList}
        edit={ChallengeOptionEdit}
        recordRepresentation="text"
        create={ChallengeOptionCreate}
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  );
};

export default App;
