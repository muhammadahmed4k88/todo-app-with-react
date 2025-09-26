import { useState } from "react";

function App() {
  const [todo, settodo] = useState("");
  const [task, settask] = useState([]);

  function addtask() {
    if (todo.trim() === "") {
      alert("Enter a task");
      return;
    }
    settask((prev) => [...prev, todo]);
    settodo("");
  }

  function deleted(index) {
    const updated = [...task];
    updated.splice(index, 1);
    settask(updated);
  }

  function edit(index) {
    const newtask = prompt("Edit task", task[index]);
    if (newtask && newtask.trim() !== "") {
      const updated = [...task];
      updated[index] = newtask;
      settask(updated);
    }
  }

  function clearall() {
    settask([]);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          📝 Todo App
        </h1>

        {/* Input Area */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter your task"
            value={todo}
            onChange={(e) => settodo(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addtask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            ➕
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {task.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded px-3 py-2"
            >
              <span>{item}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => edit(index)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  📝
                </button>
                <button
                  onClick={() => deleted(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Clear All */}
        {task.length > 0 && (
          <button
            onClick={clearall}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded mt-4"
          >
            🚮 Clear All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
