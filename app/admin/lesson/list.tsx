import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <ReferenceField source="unitId" reference="units" />
        <TextField source="order" />
      </Datagrid>
    </List>
  );
};
