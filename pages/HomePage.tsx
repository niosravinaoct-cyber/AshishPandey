import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POPULAR_COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

const Banner: React.FC = () => (
  <div className="bg-white rounded-lg m-4 shadow-xl overflow-hidden">
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
                    <span className="block">LAKSHYA SCIENCE Batch</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Join our comprehensive batch to ensure your success in the NIOS Class 12th exams. Get expert guidance from top teachers.
                </p>
                <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                    <span className="text-4xl font-bold text-primary">₹3499</span>
                    <span className="text-xl text-gray-500 line-through">₹4999</span>
                </div>
                 <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Taught by:</p>
                    <div className="flex justify-center md:justify-start -space-x-2">
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/teacher1/40/40" alt="Teacher R. Verma" />
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/teacher2/40/40" alt="Teacher S. Khan" />
                    </div>
                 </div>
                <div className="mt-8">
                    <a href="#/login" className="inline-block px-10 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary shadow-lg hover:bg-primary-hover transform hover:scale-105 transition-transform">
                        Enroll Now
                    </a>
                </div>
            </div>
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/batch/600/400" alt="LAKSHYA SCIENCE Batch" className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        { name: 'Rohan Sharma', text: 'The solved TMAs were a lifesaver! I scored so much better than I expected. Highly recommended.', image: 'https://picsum.photos/seed/rohan/100/100' },
        { name: 'Priya Patel', text: 'Excellent notes and the practice tests really helped build my confidence for the final exams.', image: 'https://picsum.photos/seed/priya/100/100' },
        { name: 'Amit Singh', text: 'DD EDUCATION is the best platform for NIOS students. The support is amazing.', image: 'https://picsum.photos/seed/amit/100/100' },
    ];
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">What Our Students Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <div key={t.name} className="bg-slate-50 p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                           <div className="flex items-center mb-4">
                             <img className="w-16 h-16 rounded-full border-4 border-white shadow-md" src={t.image} alt={t.name} />
                             <div className="ml-4">
                               <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
                               <p className="text-sm text-gray-500">NIOS Student</p>
                             </div>
                           </div>
                            <p className="text-gray-600 italic">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const HomeAbout: React.FC = () => (
    <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800">We help you <span className="text-primary">Dream, Achieve & Succeed.</span></h2>
            <p className="mt-4 text-lg text-gray-600">DD EDUCATION is your dedicated partner in navigating the NIOS curriculum. We provide meticulously crafted study materials, solved assignments, and practical files to ensure you have everything you need to excel in your studies and achieve your academic goals with confidence.</p>
        </div>
    </div>
);


const PopularCourses: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Popular Courses</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {POPULAR_COURSES.map(course => (
                        <CourseCard 
                            key={course.id}
                            course={course}
                            onActionClick={() => navigate('/courses')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <Banner />
      <Testimonials />
      <HomeAbout />
      <PopularCourses />
    </div>
  );
};

export default HomePage;