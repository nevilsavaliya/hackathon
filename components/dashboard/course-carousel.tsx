"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "Sarah Johnson",
    image: "/placeholder.svg?height=200&width=400",
    progress: 65,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Michael Chen",
    image: "/placeholder.svg?height=200&width=400",
    progress: 30,
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    instructor: "Emma Thompson",
    image: "/placeholder.svg?height=200&width=400",
    progress: 85,
  },
]

export function CourseCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {courses.map((course) => (
            <div key={course.id} className="w-full flex-shrink-0">
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-[200px] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                      <h3 className="text-xl font-bold">{course.title}</h3>
                      <p className="text-sm">{course.instructor}</p>
                      <div className="mt-2 h-2 rounded-full bg-white/30">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

