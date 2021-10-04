import React, { useEffect, useRef, useState } from "react";
import ToDoCard from "../../components/ToDoCard";
import { Button, Form, Input } from "antd";
import NoData from "../../components/Nodata";
import { observer, inject } from "mobx-react";
import "./index.scss";
//create to do component
const Create = inject("toDoStore")(
  observer((props) => {
    const inputRef = useRef();
    const { toDoStore } = props;
    useEffect(() => {
      inputRef.current.focus();
    }, []);
    const onNewTodo = (values) => {
      const { task } = values;
      toDoStore.addTodo(task);
      inputRef.current.value = "";
    };
    return (
      <div className="create-parent">
        <div className="left-create">
          {toDoStore.activeCount > 0 ? (
            <ul>
              {toDoStore.todos.map((todo, idx) => {
                if (!todo.is_deleted)
                  return <ToDoCard fromFlag key={idx} todo={todo} />;
              })}
            </ul>
          ) : (
            <NoData from="create" />
          )}
        </div>
        <div className="right-create">
          <Form layout="vertical" onFinish={onNewTodo}>
            <Form.Item
              name="task"
              rules={[
                {
                  min: 2,
                  message: "Too Short!",
                },
                {
                  max: 30,
                  message: "Too Long!",
                },
                {
                  required: true,
                  message: "Required",
                },
              ]}
            >
              <Input
                id="task"
                className="input-todo"
                type="text"
                placeholder="Enter To-Dos"
                ref={inputRef}
              />
            </Form.Item>
            <Button className="add-button" htmlType="submit">
              ADD To-Dos
            </Button>
          </Form>
        </div>
      </div>
    );
  })
);

export default Create;
