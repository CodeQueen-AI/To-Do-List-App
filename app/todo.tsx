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
    <div className="flex items-center my-2 w-full gap-2">
      {/* Todo Text Box */}
      <div
        className={`flex-1 p-3 border border-gray-400 cursor-pointer transition 
        ${todo.completed ? 'line-through text-gray-500 bg-gray-100' : 'text-gray-800 bg-white hover:shadow'} `}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>

      {/* Delete Button Box */}
      <button
        className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer transition"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <MdDelete size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
