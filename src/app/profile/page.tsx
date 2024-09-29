'use client'
import Image from 'next/image'
import { ArrowLeft, Activity, Medal, MedalIcon } from 'lucide-react'
import profilePicture from "../../img/profilowe.png"
import { useRouter }from 'next/navigation'

const medals = [{color: "gold",number: "1"},{color:"grey",number:"9"},{color:"brown",number:"0"}]
const name = "Marianna"
const finishedQuests =['10000 steps', 'Train Yoga for 30 days', '10000 steps', 'Train Yoga for 30 days']


export default function Component() {
    
const router = useRouter()
const back = () => {
    router.push('/main-page')
}
const questInfo = () => {
    router.push('/leaderboard')
}

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4">
      <div className="flex items-center mb-6">
        <ArrowLeft onClick={back} className="w-8 h-8 text-gray-600" />
      </div>
      <div className="flex flex-col items-center mb-6">
        <Image
          src = {profilePicture}
          alt="Profile picture"
          width={80}
          height={80}
          className="rounded-full mb-2"
          style={{float:'left'}}
        />
        <h1 className="text-2xl font-semibold">Marina</h1>
        </div>
        <div className="text-lg font-semibold mb-4">Earned Medals:
            <div className="grid grid-cols-3 gap-4">
                {medals.map((medal, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                      {<MedalIcon style={{color:medal.color}} className=" w-6 h-6" />}
                      <p className="text-sm text-center mt-2 mb-2">{medal.number}</p>
                    </div>
                ))}
            </div>
        </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Finished Quests</h2>
        <div className='min-h-2'>
            <div className="grid grid-cols-2 gap-4">
            {
              finishedQuests.map((quest, index) => (
                <div key={index} onClick={questInfo} style={{borderColor:"#5444A7"}} className="relative border-2 pt-22 bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                    <Activity className="w-6 h-6" />
                    <p className="text-sm text-center mt-4 mb-8">{quest}</p>
                    <button className="absolute bottom-2 mt-2 bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Completed
                    </button>
                </div>
            ))}
            </div>
        </div>
    </div>
</div>
)
}