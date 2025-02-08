import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface Exercise {
  number: number;
  title: string;
  status?: "done" | "start" | "locked";
  xp?: number;
}

export default function TutorialDashboard({pathname} : {pathname: string}) {
  const firstRepoExercises: Exercise[] = [
    { number: 1, title: "Introduction", status: "done" },
    { number: 2, title: "Repositories", status: "done" },
    { number: 3, title: "Git Commands", status: "locked" },
    { number: 4, title: "Git Workflow", status: "locked" },
    { number: 5, title: "Local Push", status: "locked" },
    { number: 6, title: "Read Me", status: "locked" },
  ];

  const exploringReposExercises: Exercise[] = [
    { number: 7, title: "Git Clone", status: "start" },
    { number: 8, title: "Branch Out", status: "locked" },
    { number: 9, title: "Git & Teams", status: "locked" },
    { number: 10, title: "Merge", status: "locked" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-2xl space-y-8">
        <Accordion type="single" collapsible className="w-full">
          {[1, 12, 1, 12].map((item,idx) => (
            <AccordionItem value={`items-${idx}`} key={idx}>
              <AccordionTrigger>
                <div className="flex  items-center w-full justify-between">
                  <h4 className="text-md font-semibold">Your First Repo</h4>
                  {/* <div className="flex items-center gap-2 justify-between">
                    <span className="text-green-400">Done!</span>
                    <Button
                      variant="outline"
                      className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                    >
                      + 10XP
                    </Button>
                  </div> */}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <section className="space-y-4">
                  <Card className="border-slate-800 bg-slate-900/50 p-4">
                    <div className="grid gap-3">
                      {firstRepoExercises.map((exercise) => (
                        <div
                          key={exercise.number}
                          className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-slate-500">
                              Exercise {exercise.number}
                            </span>
                            <span className="text-slate-300">
                              {exercise.title}
                            </span>
                          </div>
                          {exercise.status === "done" ? (
                            <Link href={`${pathname}/task/${exercise.number}`}>
                              <Button
                                variant="outline"
                                className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                              >
                                + 10XP
                              </Button>{" "}
                            </Link>
                          ) : (
                            <Button
                              variant="outline"
                              className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                            >
                              + 10XP
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </section>{" "}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
