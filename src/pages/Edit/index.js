import "./index.scss";
import React from "react";
import ToDoCard from "../../components/ToDoCard";
import NoData from "../../components/Nodata";
import { observer, inject } from "mobx-react";
//edit to do component
const Edit = inject("toDoStore")(
  observer((props) => {
    const { toDoStore } = props;
    return (
      <div className="edit-parent">
        <div className="left-edit">
          {toDoStore.activeCount > 0 ? (
            <ul>
              {toDoStore.todos.map((todo, idx) => {
                if (!todo.is_deleted)
                  return <ToDoCard title={todo} key={idx} todo={todo} />;
              })}
            </ul>
          ) : (
            <NoData from="edit" />
          )}
        </div>
      </div>
    );
  })
);

export default Edit;
