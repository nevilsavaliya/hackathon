import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex min-h-screen">
        <Sidebar className="w-64 border-r" />
        <div className="flex-1">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
