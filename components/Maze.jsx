// components/Maze.jsx
import { useState } from "react";

const GRID_SIZE = 5;

export default function Maze({ commands }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Execute Commands
  const executeCommands = () => {
    let { x, y } = position;

    try {
      const moveUp = () => (x = Math.max(x - 1, 0));
      const moveDown = () => (x = Math.min(x + 1, GRID_SIZE - 1));
      const moveLeft = () => (y = Math.max(y - 1, 0));
      const moveRight = () => (y = Math.min(y + 1, GRID_SIZE - 1));

      // Execute user-defined commands
      const runUserCommands = new Function(
        "moveUp",
        "moveDown",
        "moveLeft",
        "moveRight",
        commands
      );
      runUserCommands(moveUp, moveDown, moveLeft, moveRight);

      setPosition({ x, y });
    } catch (err) {
      alert("Invalid commands! Please check your code.");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const row = Math.floor(index / GRID_SIZE);
          const col = index % GRID_SIZE;
          const isPlayer = row === position.x && col === position.y;

          return (
            <div
              key={index}
              className={`w-12 h-12 ${
                isPlayer ? "bg-green-500" : "bg-gray-300"
              } border border-black`}
            />
          );
        })}
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={executeCommands}
      >
        Run Commands
      </button>
    </div>
  );
}
