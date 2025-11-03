import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onActionClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onActionClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      <div className="relative">
        <img className="w-full h-40 object-cover" src={course.thumbnailUrl} alt={course.title} />
        <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
            BESTSELLER
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-md font-bold text-gray-800 mb-2 flex-grow">{course.title}</h3>
        
        {course.teachers && (
            <div className="flex items-center mt-2 mb-3">
                <div className="flex -space-x-2">
                    {course.teachers.map(teacher => (
                        <img key={teacher.name} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={teacher.image} alt={teacher.name} />
                    ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">
                    {course.teachers.map(t => t.name).join(' & ')}
                </span>
            </div>
        )}
        
        <div className="flex items-baseline gap-2 mt-auto">
          <p className="text-xl font-bold text-primary">₹{course.price}</p>
          {course.originalPrice && <p className="text-sm text-gray-500 line-through">₹{course.originalPrice}</p>}
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t">
        <button
          onClick={onActionClick}
          className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-hover transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;