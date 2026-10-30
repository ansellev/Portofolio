/**
 * Interface text (labels, buttons, section titles) in English.
 * Personal content (bio, education, skills, etc.) lives in src/content.
 * The key structure must match id.js exactly: verify with `npm run check:content`.
 */
export default {
  site: {
    skipToContent: 'Skip to main content',
    footer: 'Built with React.',
    opensInNewTab: 'opens in a new tab',
  },
  nav: {
    label: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    about: 'About Me',
    projects: 'Projects',
    organization: 'Organization',
  },
  cv: {
    label: 'CV',
    download: 'Download CV (PDF)',
  },
  theme: {
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  pageTitles: {
    about: 'About Me',
    projects: 'Projects',
    organization: 'Organization Experience',
    notFound: 'Page not found',
  },
  hero: {
    socials: 'Social media',
  },
  sections: {
    about: 'About Me',
    education: 'Education',
    skills: 'Skills',
    certs: 'Certifications & Awards',
  },
  education: { present: 'Present', gpa: 'GPA' },
  certs: {
    kinds: { certification: 'Certification', award: 'Award' },
    viewFull: 'View full image: {name}',
  },
  contact: {
    heading: "Let's collaborate",
    text: 'Have a question, a collaboration idea, or just want to say hi? Pick any channel below.',
  },
  media: {
    imageAlt: '{name}: view {n} of {total}',
    showImage: 'Show photo {n} of {total}',
    readMore: 'Read more',
    readLess: 'Show less',
  },
  experience: {
    topTitle: 'Top Experience',
    allTitle: 'All Experience',
    carousel: {
      label: 'Top Experience. Swipe left or right to see other experiences.',
      previous: 'Previous experience',
      next: 'Next experience',
      goTo: 'Show experience {name}',
      slide: 'Experience {n} of {total}',
    },
  },
  projects: {
    topTitle: 'Top Projects',
    allTitle: 'All Projects',
    filterLabel: 'Filter projects by type',
    filterAll: 'All',
    types: { uiux: 'UI/UX', frontend: 'Frontend', backend: 'Backend', fullstack: 'Full-stack' },
    stack: 'Technologies used',
    github: 'GitHub',
    demo: 'Demo',
    count: '{count} projects shown',
    carousel: {
      label: 'Top Projects. Swipe left or right to see other projects.',
      previous: 'Previous project',
      next: 'Next project',
      goTo: 'Show project {name}',
      slide: 'Project {n} of {total}',
    },
    empty: {
      title: 'No projects in this category yet',
      text: 'Pick another category or view all projects.',
      reset: 'View all projects',
    },
  },
  notFound: {
    text: 'The address you opened does not exist or has been moved.',
    back: 'Back to home',
  },
}
