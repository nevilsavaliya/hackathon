import { CarouselDemo } from "@/components/carosel";
import { CourseList } from "@/components/dashboard/course-list";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative w-auto overflow-hidden mx-auto px-4 py-8 ">
      {/* <CarouselDemo /> */}
      <CourseList />
    </div>
  );
};

export default page;
