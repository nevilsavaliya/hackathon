"use client";

import {
  BarChart,
  BookOpen,
  GraduationCap,
  Layout,
  List,
  Settings,
  Trophy,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const navItems = [
  { path: "/dashboard", label: "Overview", icon: Layout },
  { path: "/dashboard/courses", label: "Your Courses", icon: BookOpen },
  { path: "/dashboard/leaderboard", label: "Leaderboard", icon: Trophy },
  { path: "/dashboard/challenges", label: "Challenges", icon: BarChart },
  { path: "/dashboard/categories", label: "Categories", icon: List },
  { path: "/dashboard/profile", label: "Profile", icon: Users },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className={cn("pb-12 min-h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-1">
            {navItems.slice(0, 4).map((item) => (
              <Button
                variant={pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                key={item.path}
              >
                <Link href={item.path} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Browse</h2>
          <div className="space-y-1">
            {navItems.slice(4, 7).map((item) => (
              <Button
                variant={pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                key={item.path}
              >
                <Link href={item.path} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/settings" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
