import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function ChallengePage() {
  const startDate = new Date()
  const endDate = new Date(startDate)
  endDate.setMonth(endDate.getMonth() + 1)

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <Link href="/" className="text-2xl mb-8">
        <ArrowLeft className='h-8 w-8' />
      </Link>
      <h1 className="text-4xl font-bold mb-4">7 szklanek wody dziennie</h1>
      <p className="text-lg mb-8">
        start ({startDate.toLocaleDateString()}) - 
        koniec ({endDate.toLocaleDateString()})
      </p>
      <p className="text-2xl text-purple-600 font-semibold mb-4">Quest started!</p>
      <Button variant="outline" className="mb-8">
        <Link href="/inviteFriends">
        </Link>
        Invite friends
      </Button>
      <Progress value={60} max={30} className="mb-8" />
      <p className="text-center mb-8">18/30</p>
      <Button className="mt-auto">Done</Button>
    </div>
  )
}