import React from 'react';
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleComplete, deleteTodo }: TodoItemProps) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg my-2 shadow-md w-full">
      <div
        className={`flex-1 ${todo.completed ? 'line-through' : ''} cursor-pointer`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button
        className="ml-4 text-red-500 text-3xl"
        onClick={() => deleteTodo(todo.id)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default TodoItem;
