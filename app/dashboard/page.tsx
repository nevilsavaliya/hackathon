import { Sidebar } from "@/components/dashboard/sidebar"
import { Navbar } from "@/components/dashboard/navbar"
import { CourseCarousel } from "@/components/dashboard/course-carousel"
import { CourseList } from "@/components/dashboard/course-list"

export default function DashboardPage() {
  return (
    <div className="flex-1 min-h-screen">
        <main className="p-6">
          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-bold">Continue Learning</h2>
              <CourseCarousel />
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Featured Courses</h2>
                <a href="#" className="text-sm text-primary hover:underline">
                  View all
                </a>
              </div>
              <CourseList />
            </section>
          </div>
        </main>
    </div>
  )
}

