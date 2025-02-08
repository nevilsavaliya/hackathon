"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CodeEditor() {
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");

  const problemStatement = `Problem: Write a function that takes two numbers as arguments and returns their sum.`;

  const handleEditorChange = (value: any) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput("Output: " + result);
    } catch (error: any) {
      setOutput("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Problem Statement */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Problem Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{problemStatement}</p>
            </CardContent>
          </Card>

          {/* Code Editor */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Code Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <Editor
                height="300px"
                theme="vs-dark"
                defaultLanguage="javascript"
                value={code}
                onChange={handleEditorChange}
                className="rounded-lg"
              />
              <div className="flex justify-end mt-4">
                <Button onClick={runCode} className="bg-blue-500 text-white">
                  Run Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Output</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-900 text-white p-4 rounded-md">
              {output}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
