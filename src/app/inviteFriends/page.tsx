'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import QRCode from 'react-qr-code'

export default function InvitePage() {
  const [copied, setCopied] = useState(false)
  const inviteLink = 'https://jakiślink/invade/1234fa'
  const router = useRouter()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <Link href='main-page' className="text-2xl mb-8">
        <ArrowLeft  className='w-8 h-8' />
      </Link>
      <h1 className="text-4xl font-bold mb-8">7 szklanek wody dziennie</h1>
      <div className="flex mb-8">
        <Input 
          value={inviteLink} 
          readOnly 
          className="flex-grow rounded-r-none"
        />
        <Button 
          onClick={copyToClipboard} 
          className="rounded-l-none"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <p className="text-center mb-4">Scan to join</p>
      <div className="flex justify-center mb-8">
        <QRCode value={inviteLink} size={200} />
      </div>
    </div>
  )
}