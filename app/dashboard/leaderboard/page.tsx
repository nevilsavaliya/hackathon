"use client";

import { useState } from "react";
import { Medal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Player {
  id: number;
  name: string;
  score: number;
  avatar: string;
  rank: number;
}

export default function LeaderboardPage() {
  const [players] = useState<Player[]>([
    {
      id: 1,
      name: "Rabindra Nath Mahato",
      score: 2840,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
    },
    {
      id: 2,
      name: "Nevil",
      score: 2720,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
    },
    {
      id: 3,
      name: "Yash Panday",
      score: 2650,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
    },
    {
      id: 4,
      name: "Alex Johnson",
      score: 2500,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
    },
    {
      id: 5,
      name: "David Lee",
      score: 2400,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      score: 2350,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 6,
    },
    {
      id: 7,
      name: "Michael Brown",
      score: 2300,
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 7,
    },
  ]);

  const topThree = players.slice(0, 3);
  const restOfPlayers = players.slice(3);

  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-yellow-400";
      case 2:
        return "text-gray-400";
      case 3:
        return "text-amber-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Leaderboard</h1>

      {/* Top 3 Players */}
      <div className="mb-12">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          {/* Second Place */}
          <Card className="relative w-64 transform transition-transform hover:scale-105">
            <CardContent className="flex flex-col items-center p-6">
              <Medal className={`mb-4 h-8 w-8 ${getMedalColor(2)}`} />
              <Avatar className="mb-2 h-20 w-20">
                <AvatarImage src={topThree[1].avatar} alt={topThree[1].name} />
                <AvatarFallback>{topThree[1].name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{topThree[1].name}</h3>
              <p className="text-muted-foreground">{topThree[1].score} pts</p>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full bg-gray-400 px-3 py-1 text-sm font-bold text-white">
                2nd
              </div>
            </CardContent>
          </Card>

          {/* First Place */}
          <Card className="relative w-64 transform scale-110 transition-transform hover:scale-115">
            <CardContent className="flex flex-col items-center p-6">
              <Medal className={`mb-4 h-10 w-10 ${getMedalColor(1)}`} />
              <Avatar className="mb-2 h-24 w-24">
                <AvatarImage src={topThree[0].avatar} alt={topThree[0].name} />
                <AvatarFallback>{topThree[0].name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold">{topThree[0].name}</h3>
              <p className="text-lg text-muted-foreground">
                {topThree[0].score} pts
              </p>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-white">
                1st
              </div>
            </CardContent>
          </Card>

          {/* Third Place */}
          <Card className="relative w-64 transform transition-transform hover:scale-105">
            <CardContent className="flex flex-col items-center p-6">
              <Medal className={`mb-4 h-8 w-8 ${getMedalColor(3)}`} />
              <Avatar className="mb-2 h-20 w-20">
                <AvatarImage src={topThree[2].avatar} alt={topThree[2].name} />
                <AvatarFallback>{topThree[2].name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{topThree[2].name}</h3>
              <p className="text-muted-foreground">{topThree[2].score} pts</p>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full bg-amber-600 px-3 py-1 text-sm font-bold text-white">
                3rd
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rest of Players List */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {restOfPlayers.map((player) => (
              <TableRow key={player.id}>
                <TableCell className="font-medium">#{player.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={player.avatar} alt={player.name} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    {player.name}
                  </div>
                </TableCell>
                <TableCell className="text-right">{player.score} pts</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
