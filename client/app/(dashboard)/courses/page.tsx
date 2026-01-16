import Logo from "@/components/ui/logo";
import { Search } from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "Mathematics",
  "Programming",
  "Web Development",
  "Data Science",
  "Articial Intelligence",
  "Computer Science"
];

const courses = [
  {
    id: 1,
    title: "Programming Languages",
    category: "Programming",
    duration: "14 weeks",
  },
  {
    id: 2,
    title: "Discrete Mathematics",
    category: "Mathematics",
    duration: "6 weeks",
  },
];

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r surface flex flex-col justify-between">
        <div className="p-6 space-y-8">
          <Logo />

          <nav className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-md bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] font-medium">
              Courses
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md muted-text hover:bg-[hsl(var(--surface))]">
              Support
            </button>
          </nav>
        </div>

        <div className="p-4 text-sm muted-text">© CodeX</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header Banner */}
        <div className="relative h-40 bg-[hsl(var(--primary))]" />

        <div className="-mt-16 px-8">
          <section className="surface p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h1 className="text-2xl font-semibold">Courses</h1>

              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 muted-text" />
                <input
                  type="text"
                  placeholder="Start typing the name of the course"
                  className="w-full pl-9 pr-3 py-2 rounded-md border bg-transparent focus-ring"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6 flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full text-sm border cursor-pointer hover:bg-[hsl(var(--surface))]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </section>

          {/* Courses Grid */}
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="surface p-4 space-y-3">
                <div className="h-32 rounded-md bg-linear-to-br from-emerald-700 to-emerald-500" />

                <div className="space-y-1">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm muted-text">{course.duration}</p>
                </div>

                <button
                  className="w-full mt-2 px-3 py-2 rounded-md bg-blue-600 text-white  hover:bg-blue-700 font-medium disabled:opacity-50"
                  disabled
                >
                  Enroll (Test Required)
                </button>

                <p className="text-xs muted-text text-center">
                  <Link href={"/courseInfo"}>Learn More</Link>
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
