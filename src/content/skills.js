/**
 * Skill per kelompok. Item boleh berupa teks biasa ('Figma') atau
 * { id: '...', en: '...' } kalau perlu diterjemahkan.
 */
export const skillGroups = [
  {
    key: 'programming',
    label: 'Programming Language',
    items: ['HTML', 'CSS', 'Javascript', 'Python', 'C', 'Java', 'TypeScript', 'SQL', 'php'],
  },
  {
    key: 'frameworks',
    label: 'Frameworks & Libraries',
    items: ['React.js', 'React Native', 'Flutter', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    key: 'tools',
    label: 'Tools & Technologies',
    items: ['Git', 'Prisma', 'MySQL', 'Supabase', 'Postman', 'Figma', 'Swagger'],
  },
  {
    key: 'software',
    label: 'Software Development & Analysis',
    items: ['REST API Development', 'JWT Authentication', 'Agile/Scrum', 'Requirements Analysis', 'User Stories', 'Usability Testing'],
  },
  {
    key: 'soft',
    label: 'Soft Skills',
    items: [
      { id: 'Komunikasi', en: 'Communication' },
      { id: 'Pemecahan Masalah', en: 'Problem Solving' },
      { id: 'Kerja Tim', en: 'Teamwork' },
      { id: 'Adaptabilitas', en: 'Adaptability' },
    ],
  },
]
