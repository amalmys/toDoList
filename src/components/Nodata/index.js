import "./index.scss";
import React from "react";
import { Empty } from "antd";
// displayed on empty data
const NoData = (props) => {
  const { from } = props;
  return (
    <div>
      {from === "edit" ? (
        <Empty description="No Todos Left!" />
      ) : (
        <Empty description="Add Some Todos!" />
      )}
    </div>
  );
};

export default NoData;
