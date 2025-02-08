import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  courseimage,
  courseimage2,
  courseimage3,
} from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    slug: "introduction-to-python-programming",
    category: "Programming",
    level: "Beginner",
    students: 1234,
    rating: 4.8,
    image: courseimage,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    slug: "advanced-javascript-concepts",
    category: "Web Development",
    level: "Advanced",
    students: 856,
    rating: 4.9,
    image: courseimage2,
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    slug: "digital-marketing-essentials",
    category: "Marketing",
    level: "Intermediate",
    students: 2341,
    rating: 4.7,
    image: courseimage3,
  },
  {
    id: 7,
    title: "Introduction to Python Programming",
    slug: "introduction-to-python-programming",
    category: "Programming",
    level: "Beginner",
    students: 1234,
    rating: 4.8,
    image: courseimage,
  },
  {
    id: 8,
    title: "Advanced JavaScript Concepts",
    slug: "advanced-javascript-concepts",
    category: "Web Development",
    level: "Advanced",
    students: 856,
    rating: 4.9,
    image: courseimage2,
  },
  {
    id: 9,
    title: "Digital Marketing Essentials",
    slug: "digital-marketing-essentials",
    category: "Marketing",
    level: "Intermediate",
    students: 2341,
    rating: 4.7,
    image: courseimage3,
  },
];

export function CourseList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link
          key={course.id}
          href={`/dashboard/courses/${course.slug}`}
          passHref
        >
          <Card>
            <CardHeader className="p-0">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="h-[100px] w-full rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="line-clamp-1 text-lg">
                {course.title}
              </CardTitle>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                <span>{course.students.toLocaleString()} students</span>
                <span>★ {course.rating}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
