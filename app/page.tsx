import Link from 'next/link'
import { exams } from '@/config/exams'

export default function Home() {
  return (
    <div className="h-full bg-black text-white flex flex-col items-center justify-center p-2 sm:p-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12">FINAL COUNTDOWN</h1>
      <nav className="flex gap-4 sm:gap-6">
        {Object.entries(exams).map(([key, exam]) => (
          <Link
            key={key}
            href={`/${key}`}
            className="inline-flex items-center justify-center w-32 px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg font-bold uppercase tracking-wider selectable"
          >
            {exam.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

