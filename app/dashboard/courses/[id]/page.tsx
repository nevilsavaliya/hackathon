"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SingleCoursePage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="relative w-full h-72 bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Course Title</h1>
        </div>
      </section>

      {/* Course Content Section */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Course Tracks</h2>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader>
                <CardTitle>Track {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This is a brief description of what the track covers. It
                  includes valuable insights and hands-on activities.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Start Course Button */}
        <div className="flex justify-center mt-8">
          <Button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg">
            <Link
              className="flex items-center space-x-2"
              href={`${pathname}/task`}
            >
              Start Course
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
