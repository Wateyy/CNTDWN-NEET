import { notFound } from 'next/navigation'
import { Countdown } from '@/components/countdown'
import { exams, type ExamType } from '@/config/exams'

export function generateStaticParams() {
  return Object.keys(exams).map((exam) => ({
    exam,
  }))
}

interface PageProps {
  params: {
    exam: string
  }
}

export default function ExamCountdown({ params }: PageProps) {
  const exam = params.exam as ExamType
  
  if (!exams[exam]) {
    notFound()
  }

  return (
    <Countdown 
      targetDate={exams[exam].date}
      examName={exams[exam].name}
    />
  )
}

