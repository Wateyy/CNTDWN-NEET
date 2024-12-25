'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { calculateTimeLeft } from '@/utils/calculate-time-left'
import { ArrowLeft } from 'lucide-react'

interface CountdownProps {
  targetDate: Date
  examName: string
}

export function Countdown({ targetDate, examName }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))
  const requestRef = useRef<number>()

  const animate = () => {
    setTimeLeft(calculateTimeLeft(targetDate))
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [targetDate])

  return (
    <div className="h-full bg-black text-white flex flex-col items-center justify-center p-2 sm:p-4 text-center relative">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 tracking-wider break-words">
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}:{timeLeft.milliseconds}
      </div>
      <div className="text-xs sm:text-sm md:text-base mb-4 sm:mb-8 tracking-wide">
        (DAYS-HOURS-MINUTES-SECONDS-MILLISECONDS)
      </div>
      <div className="text-lg sm:text-xl md:text-2xl uppercase tracking-wider font-bold mb-8">
        Till {examName}
      </div>
      <Link 
        href="/" 
        className="inline-flex items-center justify-center w-32 px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg font-bold uppercase tracking-wider"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back
      </Link>
    </div>
  )
}

