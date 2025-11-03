import React from 'react';
import { Course, TMAFile, NoteFile, Quiz, TestSeries, Paper, Article, Book, FreeCourse } from './types';

// SVG Icons
export const BookOpenIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const BeakerIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.211 1.004l-1.353 2.165a2.25 2.25 0 00-.211 1.004V18a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25v-4.813a2.25 2.25 0 00-.211-1.004l-1.353-2.165a2.25 2.25 0 01-.211-1.004V3.104m-6.75 0a2.25 2.25 0 00-2.25 2.25v.006a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25v-.006a2.25 2.25 0 00-2.25-2.25H9.75z" />
  </svg>
);

export const GlobeAltIcon = (props: React.ComponentProps<'svg'>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
  </svg>
);

export const ChartBarIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const HomeIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const AcademicCapIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);

export const ClipboardDocumentListIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
    </svg>
);

export const DocumentDuplicateIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
);

export const NewspaperIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M12 7.5h-1.5m1.5 3h-1.5m7.5 3h-7.5m7.5 3h-7.5M3 12h18M3 12V7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5V12M3 12v6.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V12" />
    </svg>
);

export const GiftIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664l.143.258a1.107 1.107 0 001.664.57l.143-.048a2.25 2.25 0 011.161.886l.51.766c.319.48.226 1.121-.216 1.49l-1.068.89a1.125 1.125 0 00-.405.864v.568m-6 0v-.568c0-.334-.148-.65-.405-.864l-1.068-.89c-.442-.369-.535-1.01-.216-1.49l.51-.766a2.25 2.25 0 011.161-.886l.143-.048a1.107 1.107 0 00.57-1.664l-.143-.258a1.107 1.107 0 00-1.664-.57l-.143.048a2.25 2.25 0 01-1.161-.886l-.51-.766c-.319-.48-.226-1.121.216-1.49l1.068-.89a1.125 1.125 0 00.405-.864v-.568m0 0a3.001 3.001 0 00-6 0v.568a1.125 1.125 0 00.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664l.143.258a1.107 1.107 0 001.664.57l.143-.048a2.25 2.25 0 011.161.886l.51.766c.319.48.226 1.121-.216 1.49l-1.068.89a1.125 1.125 0 00-.405.864v.568a3.001 3.001 0 006 0v-.568a1.125 1.125 0 00-.405-.864l-1.068-.89c-.442-.369-.535-1.01-.216-1.49l.51-.766a2.25 2.25 0 011.161-.886l.143-.048a1.107 1.107 0 00.57-1.664l-.143-.258a1.107 1.107 0 00-1.664-.57l-.143.048a2.25 2.25 0 01-1.161-.886l-.51-.766c-.319-.48-.226-1.121.216-1.49l1.068-.89a1.125 1.125 0 00.405-.864v-.568z" />
    </svg>
);

export const DocumentTextIcon = (props: React.ComponentProps<'svg'>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);


export const POPULAR_COURSES: Course[] = [
  {
    id: 1,
    title: 'Class 12th English',
    description: 'Comprehensive notes, TMA solutions, and practice papers for Senior Secondary English.',
    icon: BookOpenIcon,
  },
  {
    id: 2,
    title: 'Class 10th Science',
    description: 'Master Physics, Chemistry, and Biology with solved practicals and easy-to-understand notes.',
    icon: BeakerIcon,
  },
  {
    id: 3,
    title: 'Class 12th Economics',
    description: 'Detailed study materials for micro and macroeconomics, including solved TMAs.',
    icon: ChartBarIcon,
  },
  {
    id: 4,
    title: 'Class 10th Social Science',
    description: 'Explore History, Geography, Civics, and Economics with our complete NIOS study package.',
    icon: GlobeAltIcon,
  },
];

export const ALL_COURSES: Course[] = [
    ...POPULAR_COURSES,
    {
        id: 5,
        title: 'Class 12th Business Studies',
        description: 'Get ahead in commerce with our curated notes and solved assignments for NIOS.',
        icon: ChartBarIcon,
    },
    {
        id: 6,
        title: 'Class 10th Hindi',
        description: 'Improve your language skills with our comprehensive Hindi study materials and TMAs.',
        icon: BookOpenIcon,
    },
    {
        id: 7,
        title: 'Class 12th Geography',
        description: 'Discover the world with our in-depth Geography notes and practical file solutions.',
        icon: GlobeAltIcon,
    },
    {
        id: 8,
        title: 'Class 10th Mathematics',
        description: 'Build a strong foundation in Mathematics with practice questions and solved examples.',
        icon: BeakerIcon,
    },
];

export const TMA_FILES: TMAFile[] = [
    { id: 1, title: '2023-24 Solved TMA', subject: 'English (302)', class: 'Class 12', url: '#' },
    { id: 2, title: '2023-24 Solved TMA', subject: 'Physics (312)', class: 'Class 12', url: '#' },
    { id: 3, title: '2023-24 Solved TMA', subject: 'Science (212)', class: 'Class 10', url: '#' },
    { id: 4, title: '2023-24 Solved TMA', subject: 'Social Science (213)', class: 'Class 10', url: '#' },
    { id: 5, title: '2023-24 Practical File', subject: 'Chemistry (313)', class: 'Class 12', url: '#' },
    { id: 6, title: '2023-24 Practical File', subject: 'Home Science (216)', class: 'Class 10', url: '#' },
];

export const NOTE_FILES: NoteFile[] = [
    { id: 1, title: 'Chapter 1: Tenses', subject: 'English', class: 'Class 12', fileType: 'PDF', fileSize: '2.3 MB', url: '#' },
    { id: 2, title: 'Chapter 5: Chemical Reactions', subject: 'Science', class: 'Class 10', fileType: 'PDF', fileSize: '4.1 MB', url: '#' },
    { id: 3, title: 'Unit 2: Supply and Demand', subject: 'Economics', class: 'Class 12', fileType: 'DOCX', fileSize: '1.5 MB', url: '#' },
    { id: 4, title: 'Modern History Notes', subject: 'Social Science', class: 'Class 10', fileType: 'PDF', fileSize: '5.8 MB', url: '#' },
    { id: 5, title: 'Chapter 3: Trigonometry', subject: 'Mathematics', class: 'Class 10', fileType: 'PDF', fileSize: '3.0 MB', url: '#' },
    { id: 6, title: 'Prose & Poetry Summary', subject: 'Hindi', class: 'Class 10', fileType: 'DOCX', fileSize: '800 KB', url: '#' },
];

export const QUIZZES: Quiz[] = [
    {
        id: 'science-10',
        title: 'Class 10 Science Quiz',
        subject: 'Science',
        description: 'Test your knowledge of basic Physics, Chemistry, and Biology concepts.',
        icon: BeakerIcon,
        questions: [
            { questionText: 'What is the chemical symbol for water?', options: ['O2', 'H2O', 'CO2', 'NaCl'], correctAnswerIndex: 1 },
            { questionText: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswerIndex: 1 },
            { questionText: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell Wall'], correctAnswerIndex: 2 },
        ]
    },
    {
        id: 'english-12',
        title: 'Class 12 English Quiz',
        subject: 'English',
        description: 'Challenge yourself with questions on grammar, tenses, and literature.',
        icon: BookOpenIcon,
        questions: [
            { questionText: 'Which of the following is a synonym for "happy"?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], correctAnswerIndex: 1 },
            { questionText: 'Complete the sentence: "He ___ to the store yesterday."', options: ['go', 'goes', 'went', 'gone'], correctAnswerIndex: 2 },
        ]
    },
    {
        id: 'sst-10',
        title: 'Class 10 Social Science Quiz',
        subject: 'Social Science',
        description: 'Questions from History, Geography, and Civics to test your understanding.',
        icon: GlobeAltIcon,
        questions: [
            { questionText: 'When did India get its independence?', options: ['1942', '1950', '1947', '1945'], correctAnswerIndex: 2 },
            { questionText: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Ganges', 'Yangtze'], correctAnswerIndex: 1 },
            { questionText: 'Who is known as the father of the Indian Constitution?', options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'B. R. Ambedkar'], correctAnswerIndex: 3 },
        ]
    }
];

export const TEST_SERIES: TestSeries[] = [
    { id: 1, title: 'Full Syllabus Mock Test - Science', description: 'A comprehensive test covering all chapters of Class 10 Science.', status: 'Active' },
    { id: 2, title: 'Grammar & Comprehension Test - English', description: 'Evaluate your English language skills for the Class 12 board exam.', status: 'Active' },
    { id: 3, title: 'Previous Year Questions Mock Test', description: 'A mock test based on the last 5 years of exam papers for Social Science.', status: 'Completed' },
    { id: 4, title: 'Upcoming: Full Syllabus Mock Test - Maths', description: 'Prepare for your final math exam. The test will be live next week.', status: 'Upcoming' },
];

export const PREVIOUS_YEAR_PAPERS: Paper[] = [
    { id: 1, subject: 'Physics', year: 2023, class: 'Class 12', url: '#' },
    { id: 2, subject: 'Mathematics', year: 2023, class: 'Class 10', url: '#' },
    { id: 3, subject: 'English', year: 2022, class: 'Class 12', url: '#' },
    { id: 4, subject: 'Science', year: 2022, class: 'Class 10', url: '#' },
    { id: 5, subject: 'Chemistry', year: 2021, class: 'Class 12', url: '#' },
];

export const CURRENT_AFFAIRS_ARTICLES: Article[] = [
    { id: 1, title: 'Key Highlights of the G20 Summit', summary: 'An overview of the major decisions and discussions from the recent G20 summit held in...', date: 'October 26, 2023', url: '#' },
    { id: 2, title: 'Breakthrough in Renewable Energy Technology', summary: 'Scientists have announced a new, more efficient type of solar panel that could revolutionize...', date: 'October 24, 2023', url: '#' },
    { id: 3, title: 'Weekly Economic Review', summary: 'A summary of this week\'s stock market trends, inflation data, and policy changes from...', date: 'October 22, 2023', url: '#' },
];

export const BOOKS: Book[] = [
    { id: 1, title: 'NIOS Senior Secondary Physics', author: 'NCERT', imageUrl: 'https://via.placeholder.com/150x220/2563EB/FFFFFF?text=Physics', url: '#' },
    { id: 2, title: 'Comprehensive English Grammar', author: 'Dr. R.S. Aggarwal', imageUrl: 'https://via.placeholder.com/150x220/FACC15/000000?text=English', url: '#' },
    { id: 3, title: 'Indian Economy for NIOS', author: 'S. K. Singh', imageUrl: 'https://via.placeholder.com/150x220/10B981/FFFFFF?text=Economy', url: '#' },
    { id: 4, title: 'A History of Modern India', author: 'Bipan Chandra', imageUrl: 'https://via.placeholder.com/150x220/EF4444/FFFFFF?text=History', url: '#' },
];

export const FREE_COURSES: FreeCourse[] = [
    { id: 1, title: 'Introduction to Trigonometry', description: 'A 1-hour video lecture covering the basics of trigonometry for Class 10 students.', thumbnailUrl: 'https://via.placeholder.com/300x170/2563EB/FFFFFF?text=Maths+Lecture', videoUrl: '#' },
    { id: 2, title: 'How to Write Solved TMAs', description: 'Learn the correct format and tips for writing high-scoring Tutor Marked Assignments.', thumbnailUrl: 'https://via.placeholder.com/300x170/10B981/FFFFFF?text=TMA+Guide', videoUrl: '#' },
    { id: 3, title: 'Understanding Chemical Equations', description: 'A short course on balancing chemical equations and understanding reaction types.', thumbnailUrl: 'https://via.placeholder.com/300x170/FACC15/000000?text=Chemistry', videoUrl: '#' },
];