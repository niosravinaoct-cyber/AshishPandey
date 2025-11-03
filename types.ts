import React from 'react';

export interface Course {
  id: number;
  title: string;
  description: string;
  // Fix: Replaced `JSX.Element` with `React.ReactElement` to resolve the 'Cannot find namespace JSX' error.
  icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
}

export interface TMAFile {
    id: number;
    title: string;
    subject: string;
    class: string;
    url: string;
}

export interface NoteFile {
    id: number;
    title: string;
    subject: string;
    class: string;
    fileType: 'PDF' | 'DOCX';
    fileSize: string;
    url: string;
}

export interface Question {
    questionText: string;
    options: string[];
    correctAnswerIndex: number;
}

export interface Quiz {
    id: string;
    title: string;
    subject: string;
    description: string;
    // Fix: Replaced `JSX.Element` with `React.ReactElement` to resolve the 'Cannot find namespace JSX' error.
    icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
    questions: Question[];
}


export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export interface TestSeries {
    id: number;
    title: string;
    description: string;
    status: 'Upcoming' | 'Active' | 'Completed';
}

export interface Paper {
    id: number;
    subject: string;
    year: number;
    class: string;
    url: string;
}

export interface Article {
    id: number;
    title: string;
    summary: string;
    date: string;
    url: string;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    url: string;
}

export interface FreeCourse {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
}