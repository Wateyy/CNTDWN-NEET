import Link from 'next/link'
import { exams } from '@/config/exams'

export default function Home() {
  return (
    <div className="h-full bg-black text-white flex flex-col items-center justify-center p-2 sm:p-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12">FINAL COUNTDOWN</h1>
      <nav className="flex flex-col gap-4 sm:gap-6">
        {Object.entries(exams).map(([key, exam]) => (
          <Link
            key={key}
            href={`/${key}`}
            className="text-lg sm:text-xl font-bold text-white hover:text-gray-300 transition-colors selectable"
          >
            {exam.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

