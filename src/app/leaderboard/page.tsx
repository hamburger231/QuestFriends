import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface LeaderboardEntryProps {
  name: string
  score: number
  total: number
  avatarSrc?: string
  isCurrentUser?: boolean
  rank: number
}

function LeaderboardEntry({ name, score, total, avatarSrc, isCurrentUser, rank }: LeaderboardEntryProps) {
  const getBgColor = () => {
    if (isCurrentUser) return 'bg-white border-2 border-gray-300'
    switch (rank) {
      case 1: return 'bg-yellow-100 bg-opacity-50'
      case 2: return 'bg-gray-200 bg-opacity-50'
      case 3: return 'bg-yellow-700 bg-opacity-50'
      default: return 'bg-gray-100'
    }
  }

  return (
    <div className={`flex items-center p-3 rounded-lg mb-2 ${getBgColor()}`}>
      <Avatar className="h-8 w-8 mr-3">
        <AvatarImage src={avatarSrc || `/placeholder-${rank}.png`} alt={name} />
        <AvatarFallback className="bg-purple-200 text-purple-500">{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium">{isCurrentUser ? 'ME' : name}</span>
          <span className="text-sm">{score}/{total}</span>
        </div>
        <Progress value={(score / total) * 100} className="h-2" />
      </div>
    </div>
  )
}

export default function StepChallengePage() {
  const currentUser = {
    name: "Current User",
    score: 5,
    total: 10,
    isCurrentUser: true,
    rank: 4,
    avatarSrc: "/placeholder-user.jpg"
  }

  const leaderboardData = [
    { name: "Jan Pawel I", score: 8, total: 10, rank: 1, avatarSrc: "/avatar1.png" },
    { name: "Jan Pawel II", score: 7, total: 10, rank: 2, avatarSrc: "/avatar2.png" },
    { name: "Jan Pawel III", score: 6, total: 10, rank: 3, avatarSrc: "/avatar3.png" },
    currentUser,
    { name: "Jan Pawel V", score: 4, total: 10, rank: 5, avatarSrc: "/avatar5.png" },
    { name: "Jan Pawel VI", score: 3, total: 10, rank: 6, avatarSrc: "/avatar6.png" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <Link href="/profile" className="text-2xl mb-4">
        <ArrowLeft />
      </Link>
      <h1 className="text-3xl font-bold mb-1">10000 steps</h1>
      <p className="text-gray-600 mb-4">01.02 - 01.03</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={currentUser.avatarSrc} alt={currentUser.name} />
              <AvatarFallback className="bg-purple-200 text-purple-500">{currentUser.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{currentUser.score}/{currentUser.total}</span>
          </div>
        </div>
        <Progress value={(currentUser.score / currentUser.total) * 100} className="h-2" />
      </div>
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
      {leaderboardData.map((entry, index) => (
        <LeaderboardEntry key={index} {...entry} />
      ))}
    </div>
  )
}