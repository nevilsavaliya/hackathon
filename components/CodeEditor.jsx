// components/CodeEditor.jsx
export default function CodeEditor({ setCommands }) {
    return (
      <div>
        <h2 className="text-xl mb-2">Write Your Maze Solver Functions:</h2>
        <textarea
          className="w-full h-32 p-2 border border-gray-400"
          placeholder={`Example:
  moveRight();
  moveDown();
  moveLeft();`}
          onChange={(e) => setCommands(e.target.value)}
        />
      </div>
    );
  }
  