export const exams = {
  jeeadv: {
    name: 'NEET UG',
    date: new Date('2026-05-01T14:00:00')
  }
}

export type ExamType = keyof typeof exams

