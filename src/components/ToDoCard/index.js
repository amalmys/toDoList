import "./index.scss";
import React, { useState } from "react";
import { Modal } from "antd";
import {
  DeleteFilled,
  EditFilled,
  CheckSquareOutlined,
} from "@ant-design/icons";
import ToDoCardEdit from "./todoCardEdit";
import { observer } from "mobx-react";
// the todo card component
const ToDoCard = observer(({ todo, fromFlag }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    todo.is_deleted = true;
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClick = (action) => {
    switch (action) {
      case "delete":
        setIsModalVisible(true);
        break;
      case "edit":
        // todo.task = prompt("Task name", todo.task) || todo.task;
        todo.is_edit = true;
        break;
      case "complete":
        todo.is_completed = !todo.is_completed;
        break;
      default:
        break;
    }
  };
  return (
    <div className="cards-container">
      {!fromFlag && todo.is_edit ? (
        <ToDoCardEdit todo={todo} />
      ) : (
        <div className="to-do-card">
          <div
            className="left-portion"
            style={
              todo.is_completed
                ? { color: "var(--black)", textDecoration: "line-through" }
                : { color: "var(--green)" }
            }
          >
            {todo.task}
          </div>
          {!fromFlag && (
            <div className="right-portion">
              <DeleteFilled
                className="edit-icon"
                onClick={() => handleClick("delete")}
              />
              <EditFilled
                className="edit-icon"
                onClick={() => handleClick("edit")}
              />
              <CheckSquareOutlined
                className="edit-icon"
                onClick={() => handleClick("complete")}
              />
            </div>
          )}
        </div>
      )}

      <Modal
        title="Please Confirm"
        visible={isModalVisible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
      >
        <div
          style={{
            fontWeight: "400",
            fontSize: "20px",
            color: "var(--text-grey)",
          }}
        >
          {` Are you sure you want to delete the task "${todo.task}"?`}
        </div>
      </Modal>
    </div>
  );
});

export default ToDoCard;
