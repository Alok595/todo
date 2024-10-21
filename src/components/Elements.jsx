import React from "react";
import Items from "./Items";

const Elements = ({ tasks, onDeleteTask }) => {
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3">
        {tasks.map((task, index) => (
          <Items key={index} work={task} onDelete={() => onDeleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default Elements;
