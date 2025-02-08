import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    category: "Programming",
    level: "Beginner",
    students: 1234,
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    category: "Web Development",
    level: "Advanced",
    students: 856,
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    category: "Marketing",
    level: "Intermediate",
    students: 2341,
    rating: 4.7,
    image: "/placeholder.svg?height=100&width=200",
  },
]

export function CourseList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader className="p-0">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="h-[100px] w-full rounded-t-lg object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
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
      ))}
    </div>
  )
}

