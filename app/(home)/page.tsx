"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Palette,
  Terminal,
  Database,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Background } from "@/public/images/images";

export default function Home() {
  const topics = [
    {
      name: "Python",
      description: "Learn programming fundamentals and problem-solving skills",
      icon: Terminal,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "HTML",
      description: "Master the building blocks of web development",
      icon: Layout,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      name: "CSS",
      description: "Style and design beautiful websites",
      icon: Palette,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "JavaScript",
      description: "Create interactive and dynamic web applications",
      icon: Code2,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "SQL",
      description: "Learn database management and queries",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-30" />
          <div className="absolute -top-48 left-0 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" /> */}
        </div>
        <Image src={Background} alt="Background" className="w-full h-screen" width={1080} height={720} />

        <div className="mx-auto max-w-7xl py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
              Start Your Coding Adventure
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-400">
              Embark on an interactive journey through programming. Learn,
              build, and connect with a global community of developers.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600"
              >
                <Link href={"/login"}>Get Started Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                View Curriculum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      {/* <section className="mx-auto max-w-7xl px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Master Modern Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Choose your path and start learning with our interactive curriculum
            designed for beginners and professionals alike.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/80">
                  <div className="p-6">
                    <div
                      className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${topic.gradient} p-3 text-white`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {topic.name}
                    </h3>
                    <p className="text-slate-400">{topic.description}</p>
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-all group-hover:opacity-100" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section> */}

      {/* Features */}
      {/* <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-950/90" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Learn by Doing
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Our interactive platform helps you master coding through hands-on
              practice and real-world projects.
            </p>
          </motion.div>

          <div className="grid gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="mb-4 text-2xl font-bold text-white">
                Interactive Lessons
              </h3>
              <p className="text-slate-400">
                Write, run, and test code directly in your browser. Get instant
                feedback and learn from your mistakes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-lg border border-slate-800 bg-slate-900"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="size-12 text-slate-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Community */}
      {/* <section className="py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-purple-500/10 p-3 text-purple-400">
                <Users className="size-6" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Connect with fellow learners, share your progress, and get help
              when you need it.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                  <div className="p-6">
                    <div className="mb-4 text-sm text-slate-400">@username</div>
                    <p className="text-slate-300">
                      "The interactive lessons and supportive community helped
                      me land my first developer job!"
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      {/* <section className="border-y border-slate-800 bg-slate-900/50 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "200k+", label: "Active Learners" },
              { value: "192", label: "Countries" },
              { value: "20M+", label: "Lines of Code" },
              { value: "4.8/5", label: "User Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 p-8 md:p-12"
          >
            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-purple-50/90">
                Join thousands of learners who have transformed their careers
                through our platform.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
              >
                Get Started Free
              </Button>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="border-t border-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Learn"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Help Center", "Community"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Cookie Policy"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
}
