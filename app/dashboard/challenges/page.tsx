import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const challenges = [
  {
    id: 1,
    title: "Reverse a String",
    difficulty: "Easy",
    category: "Strings",
    slug: "reverse-a-string",
  },
  {
    id: 2,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    slug: "two-sum",
  },
  {
    id: 3,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Dynamic Programming",
    slug: "longest-palindromic-substring",
  },
  {
    id: 4,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Linked Lists",
    slug: "merge-k-sorted-lists",
  },
];

function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
}

function ChallengeCard({ challenge }: { challenge: (typeof challenges)[0] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{challenge.title}</CardTitle>
        <CardDescription>{challenge.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge
          variant={
            challenge.difficulty === "Easy"
              ? "secondary"
              : challenge.difficulty === "Medium"
              ? "default"
              : "destructive"
          }
        >
          {challenge.difficulty}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/dashboard/challenges/${challenge.slug}`}>
            Start Challenge
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Coding Challenges"
        description="Test your skills with these programming challenges"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
