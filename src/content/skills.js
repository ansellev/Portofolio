import en from "@/i18n/locales/en";

/**
 * Skill per kelompok. Item boleh berupa teks biasa ('Figma') atau
 * { id: '...', en: '...' } kalau perlu diterjemahkan.
 */
export const skillGroups = [
  {
    key: 'programming',
    label: 'Programming Language',
    items: ['Java', 'Python', 'C', 'JavaScript','Typescript','SQL'],
  },
  {
    key: 'frontend',
    label: 'Frontend & Mobile',
    items: [
      'React.js',
      'React Native',
      'Flutter',
      'Kotlin',
      'HTML',
      'CSS',
    ],
  },
  {
    key: 'backend',
    label: 'Backend & Database',
    items: [
      'Node.js',
      'NestJS',
      'MySQL',
    ],
  },
  {
    key: 'tools',
    label: 'Tools & UI/UX',
    items: [
      'Figma',
      'Git',
      'GitHub',
      'Canva',
      'MS Word',
      'Ms Excel',
    ],
  },
  {
    key: 'pm',
    label: 'Project Management',
    items: [
      'Agile',
      'Scrum',
      'Project Planning',
      'Task Tracking',
      'Progress Reporting',
    ],
  },
  {
    key: 'bm',
    label: 'Business Analysis',
    items: [
      'Requirements Gathering',
      'Functional and Requirements Documentation',
      'User Stories',
      'Acceptance Criteria',
      'System Analysis',
      ' Data Validation and UAT',
      'Usability Testing'
    ],
  },
  {
    key: 'soft',
    label: 'Soft Skills',
    items: [
      { id: 'Komunikasi', en: 'Communication' },
      { id: 'Kolaborasi', en: 'Collaboration' },
      { id: 'Berpikir Analitis', en: 'Analytical Thinking'},
      { id: 'Berpikir Kritis', en: 'Critical Thinking' },
      { id: 'Teliti', en: 'Attention to Detail'},
      { id: 'Kepemimpinan', en: 'Leadership' },
      { id: 'Pemecahan Masalah', en: 'Problem Solving' },
      { id: 'Kerja Tim', en: 'Teamwork' },
      { id: 'Kerja Mandiri', en: 'Independent Work' },
      { id: 'Adaptabilitas', en: 'Adaptability'},
      { id: 'Menerima Masukan', en: 'Willingness to Receive Feedback'}
    ],
  },
]
