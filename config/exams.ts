export const exams = {
  jeeadv: {
    name: 'ADVANCE',
    date: new Date('2026-06-01T08:00:00')
  },
  jeemain: {
    name: 'MAIN',
    date: new Date('2026-02-01T09:00:00')
  }
}

export type ExamType = keyof typeof exams

