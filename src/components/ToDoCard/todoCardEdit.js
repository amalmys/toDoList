import "./index.scss";
import React, { useEffect, useRef } from "react";
import { Input, Button, Form, message } from "antd";
import { observer } from "mobx-react";

const ToDoCardEdit = observer(({ todo }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const editTodo = (values) => {
    const { task } = values;
    if (!task) {
      message.error("To-Do cannot be empty");
      return;
    }
    todo.task = task;
    todo.is_edit = false;
    todo.is_completed = false;
  };
  return (
    <div className="to-do-card-edit">
      <Form onFinish={editTodo}>
        <Form.Item
          name="task"
          //   rules={[

          //     {
          //       required: true,

          //     },
          //   ]}
        >
          <Input
            id="task"
            className="input-todo"
            type="text"
            //   placeholder="Enter To-Dos"
            ref={inputRef}
          />
        </Form.Item>
        <Button className="add-button" htmlType="submit">
          EDIT
        </Button>
      </Form>
    </div>
  );
});

export default ToDoCardEdit;
