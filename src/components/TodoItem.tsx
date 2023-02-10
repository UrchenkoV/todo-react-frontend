import React from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../redux/todo/todo.slice";
import { TTodoItem } from "../redux/todo/todo.types";
import { BaseIcon } from "./BaseIcon";

export const TodoItem: React.FC<TTodoItem> = ({ title, done = false }) => {
  const { todos } = useSelector(selectTodo);

  return (
    <div className="flex">
      <span>{title}</span>

      <div className="flex gap-2">
        <button className="bg-gray-200 hover:bg-gray-300 duration-300 fill-gray-800 p-3 rounded-full focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow">
          <BaseIcon name="pencil" />
        </button>
        <button className="bg-green-500 hover:bg-green-400 duration-300 fill-green-800 p-3 rounded-full focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow">
          <BaseIcon name="check" />
        </button>
        <button className="bg-red-500 hover:bg-red-400 duration-300 text-red-800 p-3 rounded-full focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow">
          <BaseIcon name="trash" />
        </button>
      </div>
    </div>
  );
};
