
import React, { useState, useMemo } from 'react';
import { ALL_COURSES } from '../constants';
import Card from '../components/Card';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Our Courses</h1>
          <p className="mt-4 text-lg text-gray-500">Find all subjects and materials for your NIOS preparation.</p>
        </div>

        <div className="mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for a subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
            <Card
              key={course.id}
              title={course.title}
              description={course.description}
              icon={<course.icon className="w-10 h-10" />}
              actionText="View Materials"
              onActionClick={() => { /* Navigate to specific course page */ }}
            />
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
            <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No courses found matching your search.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
