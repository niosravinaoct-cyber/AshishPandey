import React from 'react';
import { FREE_COURSES } from '../constants';
import { FreeCourse } from '../types';

const FreeCoursesPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Free Courses</h1>
      <p className="text-gray-600 mb-8">Access our collection of free video lectures to supplement your learning.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FREE_COURSES.map((course: FreeCourse) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform hover:-translate-y-1">
            <a href={course.videoUrl} className="block relative">
              <img src={course.thumbnailUrl} alt={course.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              </div>
            </a>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{course.description}</p>
              <a href={course.videoUrl} className="mt-4 inline-block text-primary font-semibold hover:underline">
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeCoursesPage;