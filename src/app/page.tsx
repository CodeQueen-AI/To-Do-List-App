'use client'
import React, { useState, ChangeEvent } from 'react';
import { RiAddLine } from "react-icons/ri";
import TodoItem from './component/todo';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 p-4 overflow-hidden">
      <div className="w-full max-w-md bg-gradient-to-l from-purple-500 via-purple-700 to-purple-250 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-center mb-4 text-white">To-Do List</h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={todoText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Add a new task"
          />
          <button
            onClick={addTodo}
            className="ml-2 bg-purple-500 text-white p-2 rounded-full"
          >
            <RiAddLine />
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
