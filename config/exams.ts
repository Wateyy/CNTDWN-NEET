export const exams = {
  neetug: {
    name: 'NEET UG',
    date: new Date('2026-05-01T08:00:00')
  }
}

export type ExamType = keyof typeof exams

