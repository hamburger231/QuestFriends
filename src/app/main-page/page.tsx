'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User, Plus, Droplet, Activity, Check } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface QuestCardProps {
  title: string
  duration: string
  progress: number
  total: number
  isFinished?: boolean
  backgroundImage?: string
  onIncrement: () => void
  onFinish: () => void
}

function QuestCard({ title, duration, progress, total, isFinished, backgroundImage, onIncrement, onFinish }: QuestCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex flex-col justify-between min-h-[12rem] relative overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      )}
      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="font-semibold mb-1 mt-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{duration}</p>
        <Progress value={(progress / total) * 100} className="h-2 mb-4" />
        <div className="mt-auto flex items-center">
          {progress < total - 1 ? (
            <Button 
              variant="outline" 
              className="w-full text-purple-600 border-purple-600"
              onClick={onIncrement}
            >
              Progress
            </Button>
          ) : (
            <Button 
              variant="default" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={onFinish}
            >
              Finish
            </Button>
          )}
          {isFinished && (
            <div className="bg-purple-600 rounded-full p-1 ml-2">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface ChallengeCardProps {
  icon: React.ReactNode
  title: string
  duration: string
  backgroundImage?: string
  onTakeUp: () => void
}

function ChallengeCard({ icon, title, duration, backgroundImage, onTakeUp }: ChallengeCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex flex-col justify-between min-h-[12rem] relative overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
      )}
      <Link href='/challange' className="relative z-10 flex-grow flex flex-col items-center">
        <div className="flex items-center justify-center mb-2 mt-2">
          {icon}
        </div>
        <h3 className="font-semibold text-center mb-1">{title}</h3>
        <p className="text-sm text-center text-gray-600 mb-4">{duration}</p>
        <Button variant="outline" className="w-full mt-auto text-purple-600 border-purple-600" onClick={onTakeUp}>Take up</Button>
      </Link>
    </div>
  )
}

export default function MainPage() {
  const [quests, setQuests] = useState([
    { title: "30 days without drinking", duration: "Today 0/1", progress: 0, total: 1, backgroundImage: "/placeholder.svg?height=192&width=168", isFinished: false },
    { title: "10 glasses of water daily", duration: "Today 3/10", progress: 3, total: 10, backgroundImage: "/placeholder.svg?height=192&width=168", isFinished: false },
    { title: "30 days without alcohol", duration: "Today 1/1", progress: 1, total: 1, backgroundImage: "/placeholder.svg?height=192&width=168", isFinished: true }
  ]);

  const [challenges, setChallenges] = useState([
    { icon: <Droplet className="w-8 h-8 text-purple-600" />, title: "Drink water for 30 days", duration: "30 days", backgroundImage: "/placeholder.svg?height=192&width=168" },
    { icon: <Droplet className="w-8 h-8 text-purple-600" />, title: "Drink water for 7 days", duration: "7 days", backgroundImage: "/placeholder.svg?height=192&width=168" },
    { icon: <Activity className="w-8 h-8 text-purple-600" />, title: "10000 steps", duration: "Daily", backgroundImage: "/placeholder.svg?height=192&width=168" },
    { icon: <Activity className="w-8 h-8 text-purple-600" />, title: "Train Yoga for 30 days", duration: "30 days", backgroundImage: "/placeholder.svg?height=192&width=168" }
  ]);

  const handleIncrementQuest = (index: number) => {
    setQuests(prevQuests => {
      const newQuests = [...prevQuests];
      newQuests[index].progress += 0.5;
      newQuests[index].duration = `Today ${newQuests[index].progress}/${newQuests[index].total}`;
      return newQuests;
    });
  };

  const handleFinishQuest = (index: number) => {
    setQuests(prevQuests => {
      const newQuests = [...prevQuests];
      newQuests[index].isFinished = true;
      newQuests[index].progress = newQuests[index].total;
      newQuests[index].duration = `Today ${newQuests[index].total}/${newQuests[index].total}`;
      return newQuests;
    });
  };

  const handleTakeUpChallenge = (index: number) => {
    setChallenges(prevChallenges => {
      const newChallenges = [...prevChallenges];
      const takenUpChallenge = newChallenges.splice(index, 1)[0];
      setQuests(prevQuests => [
        ...prevQuests,
        { ...takenUpChallenge, progress: 0, total: 7, isFinished: false, duration: `Today 0/7` }
      ]);
      return newChallenges;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <Link href="/profile">
            <User className="w-12 h-12 text-purple-600" />
        </Link>
        <Link href="/createChallange">
          <Plus className="w-12 h-12 text-purple-600" />
        </Link>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Level</span>
          <span>33</span>
        </div>
        <Progress value={66} className="h-2 bg-purple-200"/>
      </div>

      <h2 className="text-xl font-bold mb-4">Your quests</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {quests.map((quest, index) => (
          <QuestCard 
            key={index}
            title={quest.title}
            duration={quest.duration}
            progress={quest.progress}
            total={quest.total}
            isFinished={quest.isFinished}
            backgroundImage={quest.backgroundImage}
            onIncrement={() => handleIncrementQuest(index)}
            onFinish={() => handleFinishQuest(index)}
          />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">See challanges done by us</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard 
            key={index}
            icon={challenge.icon}
            title={challenge.title}
            duration={challenge.duration}
            backgroundImage={challenge.backgroundImage}
            onTakeUp={() => handleTakeUpChallenge(index)}
          />
        ))}
      </div>

      <Button variant="outline" className="w-full text-purple-600 border-purple-600">See more quests</Button>
    </div>
  )
}