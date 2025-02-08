"use client"
// pages/index.jsx
import { useState } from "react";
import Maze from "@/components/Maze";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  const [commands, setCommands] = useState("");

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Maze Solver Game</h1>
      <Maze commands={commands} />
      <CodeEditor setCommands={setCommands} />
    </div>
  );
}
