import React from "react";
import "./TodoItem.css";
const TodoItem = (props) => {
  const onClomplete = () => {
    alert("clicked " + props.text);
  };

  const onDelete = (props) => {
    alert("clicked delete " + props.text);
  };
  return (
    <div>
      <li className="TodoItem">
        <span
          onClick={onClomplete}
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
        >
          √
        </span>
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span onClick={onDelete} className="Icon Icon-delete">
          X
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
