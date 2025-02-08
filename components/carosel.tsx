import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function CarouselDemo() {
  const courses = [
    {
      name: "Course 1",
      title: "Introduction to Programming",
      duration: "4 weeks",
      url: "/dashboard/courses/introduction-to-programming",
    },
    {
      name: "Course 2",
      title: "Advanced JavaScript",
      duration: "6 weeks",
      url: "/dashboard/courses/advanced-javascript",
    },
    {
      name: "Course 3",
      title: "React for Beginners",
      duration: "5 weeks",
      url: "/dashboard/courses/react-for-beginners",
    },
    {
      name: "Course 4",
      title: "Node.js Essentials",
      duration: "3 weeks",
      url: "/dashboard/courses/nodejs-essentials",
    },
    {
      name: "Course 5",
      title: "Full-Stack Development",
      duration: "8 weeks",
      url: "/dashboard/courses/full-stack-development",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {courses.map((data, index) => (
          <Link href={data.url} key={index}>
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <CardTitle>{data.title}</CardTitle>
                    <CardDescription>{data.duration}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
