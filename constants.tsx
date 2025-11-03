
import React from 'react';
// FIX: Added `Question` to the import list to resolve the "Cannot find name 'Question'" error.
import { Course, TMAFile, NoteFile, Quiz, TestSeries, Paper, Article, Book, FreeCourse, Question } from './types';

// ===================================================================================
// ICONS
// ===================================================================================

export const BookOpenIcon = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export const AcademicCapIcon = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
  </svg>
);

export const DocumentTextIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const BeakerIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);

export const HomeIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

export const FolderIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

export const ClipboardListIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

export const QuestionMarkCircleIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const CalendarIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const SparklesIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6.2 6.2l1.4 1.4M18 3v4M16 5h4m-2.2 1.2l1.4 1.4M12 21a9 9 0 110-18 9 9 0 010 18zM8.4 9.6a.5.5 0 000 .8l1.2 1.2a.5.5 0 00.7 0l1.2-1.2a.5.5 0 000-.8L11 9.2a.5.5 0 00-.7 0L8.4 9.6z" />
    </svg>
);

export const VideoCameraIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const NewspaperIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
);

export const LibraryIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
);

export const PlayCircleIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ClockIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const CheckCircleIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const LogoIcon = (props: React.ComponentProps<'svg'>) => (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 8C6 7.44772 6.44772 7 7 7H23C23.5523 7 24 7.44772 24 8V40C24 40.5523 23.5523 41 23 41H7C6.44772 41 6 40.5523 6 40V8Z" fill="#3B82F6"/>
        <path d="M15 7H34C34.5523 7 35 7.44772 35 8V23C35 23.5523 34.5523 24 34 24H15V7Z" fill="#2563EB"/>
        <path d="M24 24H41C41.5523 24 42 24.4477 42 25V40C42 40.5523 41.5523 41 41 41H24V24Z" fill="#2563EB"/>
    </svg>
);


// ===================================================================================
// DATA CONSTANTS
// ===================================================================================

const teachers = [
    { name: 'R. Verma', image: 'https://picsum.photos/seed/teacher1/40/40' },
    { name: 'S. Khan', image: 'https://picsum.photos/seed/teacher2/40/40' },
];

export const POPULAR_COURSES: Course[] = [
  { id: 1, title: 'LAKSHYA SCIENCE Batch', description: 'Complete Science course for NIOS Class 12th.', icon: DocumentTextIcon, price: 3499, originalPrice: 4999, thumbnailUrl: 'https://picsum.photos/seed/science/400/225', teachers },
  { id: 2, title: 'Commerce Champions Batch', description: 'Master Accountancy, Business, and Economics for Class 12th.', icon: DocumentTextIcon, price: 3499, originalPrice: 4999, thumbnailUrl: 'https://picsum.photos/seed/commerce/400/225', teachers },
  { id: 3, title: 'ARTS Achievers Batch', description: 'In-depth lectures for History, Political Sc., Geography.', icon: BeakerIcon, price: 2999, originalPrice: 4499, thumbnailUrl: 'https://picsum.photos/seed/arts/400/225', teachers },
  { id: 4, title: 'Class 10th All Subjects', description: 'Comprehensive study materials and video lectures for all subjects.', icon: BookOpenIcon, price: 2499, originalPrice: 3999, thumbnailUrl: 'https://picsum.photos/seed/class10/400/225', teachers },
];

export const ALL_COURSES: Course[] = [
    ...POPULAR_COURSES,
    { id: 5, title: 'English Grammar Special', description: 'Master English grammar with easy-to-understand video lectures and notes.', icon: BookOpenIcon, price: 999, originalPrice: 1499, thumbnailUrl: 'https://picsum.photos/seed/english/400/225', teachers: [{name: 'A. Sharma', image: 'https://picsum.photos/seed/teacher3/40/40'}] },
    { id: 6, title: 'Data Entry Operations', description: 'Practical files and notes for Data Entry Operations subject (Class 10).', icon: DocumentTextIcon, price: 499, thumbnailUrl: 'https://picsum.photos/seed/dataentry/400/225' },
];

export const TMA_FILES: TMAFile[] = [
    { id: 1, title: 'Physics (312) TMA', subject: 'Physics', class: 'Class 12', url: '#' },
    { id: 2, title: 'Chemistry (313) TMA', subject: 'Chemistry', class: 'Class 12', url: '#' },
];

export const NOTE_FILES: NoteFile[] = [
    { id: 1, title: 'Ch. 1: Units and Measurements', subject: 'Physics', class: 'Class 12', fileType: 'PDF', fileSize: '2.5 MB', url: '#' },
    { id: 2, title: 'Ch. 3: Chemical Bonding', subject: 'Chemistry', class: 'Class 12', fileType: 'DOCX', fileSize: '1.8 MB', url: '#' },
];

const quiz1Questions: Question[] = [
    { questionText: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswerIndex: 2 },
    { questionText: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correctAnswerIndex: 1 },
];
export const QUIZZES: Quiz[] = [
    { id: '1', title: 'General Knowledge', subject: 'General', description: 'Test your basic general knowledge.', icon: QuestionMarkCircleIcon, questions: quiz1Questions },
];


export const TEST_SERIES: TestSeries[] = [
    { id: 1, title: 'Full Syllabus Mock Test - Class 12th', description: 'Simulates the final exam pattern for all subjects.', status: 'Active', price: '₹499' },
    { id: 2, title: 'Full Syllabus Mock Test - Class 10th', description: 'Prepare for your Class 10 board exams.', status: 'Active', price: '₹499' },
    { id: 3, title: 'Monthly Current Affairs Test - July', description: 'Test your knowledge of last month\'s current affairs.', status: 'Completed', price: 'Free' },
    { id: 4, title: 'Chapter-wise Test: Physics', description: 'Practice tests for each chapter of the Physics syllabus.', status: 'Upcoming', price: 'Free' },
];

export const PREVIOUS_YEAR_PAPERS: Paper[] = [
    { id: 1, subject: 'Physics', year: 2023, class: 'Class 12', url: '#' },
    { id: 2, subject: 'Mathematics', year: 2023, class: 'Class 12', url: '#' },
];

export const CURRENT_AFFAIRS_ARTICLES: Article[] = [
    { id: 1, title: 'Key Highlights of the Union Budget 2024', summary: 'An overview of the major announcements and allocations in the latest Union Budget.', date: 'July 25, 2024', url: '#' },
    { id: 2, title: 'India\'s Achievements at the Paris Olympics', summary: 'A look at the medal winners and standout performances from the Indian contingent.', date: 'July 22, 2024', url: '#' },
];

export const BOOKS: Book[] = [
    { id: 1, title: 'NIOS Physics Guide', author: 'Dr. R.K. Sharma', imageUrl: 'https://picsum.photos/seed/book1/300/400', url: '#' },
    { id: 2, title: 'NIOS Chemistry Simplified', author: 'P. Verma', imageUrl: 'https://picsum.photos/seed/book2/300/400', url: '#' },
];


export const FREE_COURSES: FreeCourse[] = [
    { id: 1, title: 'Introduction to Chemical Bonding', description: 'Understand the basics of ionic and covalent bonds in this introductory video.', thumbnailUrl: 'https://picsum.photos/seed/course1/400/225', videoUrl: '#' },
    { id: 2, title: 'Solving Linear Equations', description: 'Learn step-by-step methods to solve linear equations with one and two variables.', thumbnailUrl: 'https://picsum.photos/seed/course2/400/225', videoUrl: '#' },
];
