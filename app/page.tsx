// 'use client'
// import React, { useState, ChangeEvent } from 'react';
// import { RiAddLine } from "react-icons/ri";
// import TodoItem from './todo'

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const Home = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [todoText, setTodoText] = useState<string>('');

//   const addTodo = () => {
//     if (todoText.trim() !== '') {
//       setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
//       setTodoText('');
//     }
//   };

//   const toggleComplete = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 p-4 overflow-hidden">
//       <div className="w-full max-w-md bg-gradient-to-l from-purple-500 via-purple-700 to-purple-250 p-6 rounded-lg shadow-md">
//         <h1 className="text-4xl font-semibold text-center mb-4 text-white">To-Do List</h1>
//         <div className="flex justify-center mb-4">
//           <input
//             type="text"
//             value={todoText}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg w-full"
//             placeholder="Add a new task"
//           />
//           <button
//             onClick={addTodo}
//             className="ml-2 bg-purple-500 text-white p-2 rounded-full"
//           >
//             <RiAddLine />
//           </button>
//         </div>
//         <div>
//           {todos.map((todo) => (
//             <TodoItem
//               key={todo.id}
//               todo={todo}
//               toggleComplete={toggleComplete}
//               deleteTodo={deleteTodo}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






'use client'
import React, { useState, ChangeEvent } from 'react';
import { RiAddLine } from "react-icons/ri";
import TodoItem from './todo';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>("");

  const addTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
      setTodoText("");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 font-poppins">
      <div className="w-full max-w-md bg-white p-6 border border-black ">
        <h1 className="text-3xl font-medium text-center mb-6 font-serif text-blue-950">
          To-Do List
        </h1>

        {/* Input + Add Button */}
        <div className="flex mb-5">
          <input
            type="text"
            value={todoText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
            className="border border-gray-400 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Add a new task..."
          />
          <button
            onClick={addTodo}
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer p-3 flex items-center justify-center transition"
            aria-label="Add todo"
          >
            <RiAddLine size={20} />
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-2">
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
