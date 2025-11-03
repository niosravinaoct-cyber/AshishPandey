
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POPULAR_COURSES, BookOpenIcon, BeakerIcon, DocumentTextIcon } from '../constants';
import CourseCard from '../components/CourseCard';
import GetFreeNotesSection from '../components/GetFreeNotesSection';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Expert-Led Video Courses',
      description: 'Learn complex topics through easy-to-understand video lectures from experienced NIOS teachers.',
      icon: <BookOpenIcon className="w-10 h-10" />,
      actionText: 'Browse Courses',
      path: '/courses',
    },
    {
      title: 'Solved TMAs & Practicals',
      description: 'Get access to high-quality, solved Tutor Marked Assignments and practical files to score better.',
      icon: <DocumentTextIcon className="w-10 h-10" />,
      actionText: 'Find Files',
      path: '/tmas',
    },
    {
      title: 'Online Test Series',
      description: 'Prepare for exams with our mock tests that simulate the real exam pattern and environment.',
      icon: <BeakerIcon className="w-10 h-10" />,
      actionText: 'Take a Test',
      path: '/test-series',
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Success in</span>{' '}
              <span className="block text-primary">NIOS Starts Here</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              High-quality video courses, solved TMAs, practical files, and expert support to help you excel in your exams.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  onClick={() => navigate('/courses')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover md:py-4 md:text-lg md:px-10"
                >
                  Explore Courses
                </button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button
                  onClick={() => navigate('/free-courses')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Free Videos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Everything You Need to Succeed</h2>
                <p className="mt-4 text-lg text-gray-500">
                    A complete learning ecosystem for NIOS students.
                </p>
            </div>
            <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
                {features.map((feature) => (
                <Card 
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    actionText={feature.actionText}
                    onActionClick={() => navigate(feature.path)}
                />
                ))}
          </div>
        </div>
      </div>


      {/* Popular Courses Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Popular Courses</h2>
            <p className="mt-4 text-lg text-gray-500">
              Join thousands of students learning from our bestselling courses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {POPULAR_COURSES.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onActionClick={() => navigate(`/courses`)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
                onClick={() => navigate('/courses')}
                className="px-8 py-3 border border-primary text-base font-medium rounded-full text-primary bg-white hover:bg-gray-50 transition-colors"
            >
                View All Courses
            </button>
          </div>
        </div>
      </div>
      
      {/* Get Free Notes Section */}
      <GetFreeNotesSection />
      
    </div>
  );
};

export default HomePage;
