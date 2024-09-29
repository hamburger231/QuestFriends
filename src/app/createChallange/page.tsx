'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateQuestPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <Link href="/main-page" className="text-2xl mb-4">
        <ArrowLeft className='w-8 h-8'/>
      </Link>
      <h1 className="text-2xl font-bold mb-6">Create quest</h1>
      <form className="space-y-4">
        <Input placeholder="Quest name" />
        <Textarea placeholder="Description" />
        <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
          <Camera className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl mb-1">Select deadline</h3>
        <div className="space-y-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="flex rounded-md border justify-center"
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Frequency:</span>
          <Select defaultValue="day">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">day</SelectItem>
              <SelectItem value="week">week</SelectItem>
              <SelectItem value="month">month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link href="/main-page">
            <Button variant="outline" className="w-full">Cancel</Button>
        </Link>
      </form>
    </div>
  )
}