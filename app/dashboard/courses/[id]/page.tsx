"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Background, courseimage2, courseimage3 } from "@/public/images/images";
import AccordionDemo from "@/components/AccordianModule";

export default function SingleCoursePage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen ">
      {/* Banner Section */}
      <section className="relative w-full h-72 flex items-center justify-center">
        <h1 className="z-10 relative text-3xl">Hello How are you</h1>
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src={courseimage3}
            alt="Course Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"></div> */}
      </section>

      {/* Course Content Section */}
      <div className="px-4 py-8">
        <AccordionDemo pathname={pathname} />
      </div>
    </div>
  );
}
