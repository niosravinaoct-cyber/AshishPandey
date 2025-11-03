import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POPULAR_COURSES } from '../constants';
import Card from '../components/Card';

const Banner: React.FC = () => (
  <div className="bg-primary/10 rounded-lg m-4 p-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Manzil Batch Oct 2025 / Apr 2026</span>
            </h1>
            <p className="mt-3 text-lg text-gray-600">
                Join our comprehensive batch to ensure your success in the upcoming exams.
            </p>
             <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                <span className="text-3xl font-bold text-primary">₹1999</span>
                <span className="text-xl text-gray-500 line-through">₹3999</span>
            </div>
            <div className="mt-6">
                <a href="#/login" className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-hover">
                    Join Now
                </a>
            </div>
        </div>
        <div>
            {/* You can replace this with a relevant image */}
            <img src="https://via.placeholder.com/400x250/2563EB/FFFFFF?text=DNEducation+Batch" alt="Manzil Batch" className="rounded-lg shadow-lg"/>
        </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        { name: 'Rohan Sharma', text: 'The solved TMAs were a lifesaver! I scored so much better than I expected. Highly recommended.', image: 'https://via.placeholder.com/100' },
        { name: 'Priya Patel', text: 'Excellent notes and the practice tests really helped build my confidence for the final exams.', image: 'https://via.placeholder.com/100' },
        { name: 'Amit Singh', text: 'DNEducation is the best platform for NIOS students. The support is amazing.', image: 'https://via.placeholder.com/100' },
    ];
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {testimonials.map(t => (
                        <div key={t.name} className="bg-white p-6 rounded-lg shadow-md">
                            <img className="w-20 h-20 mx-auto rounded-full -mt-12 border-4 border-white" src={t.image} alt={t.name} />
                            <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>
                            <p className="mt-2 text-gray-600">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const HomeAbout: React.FC = () => (
    <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">We help you Dream, Achieve & Succeed.</h2>
            <p className="mt-4 text-lg text-gray-600">DNEducation is your dedicated partner in navigating the NIOS curriculum. We provide meticulously crafted study materials, solved assignments, and practical files to ensure you have everything you need to excel in your studies and achieve your academic goals with confidence.</p>
        </div>
    </div>
);


const PopularCourses: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-10">Popular Courses</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {POPULAR_COURSES.map(course => (
                        <Card 
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            icon={<course.icon className="w-10 h-10" />}
                            actionText="View Details"
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
    <>
      <Banner />
      <Testimonials />
      <HomeAbout />
      <PopularCourses />
    </>
  );
};

export default HomePage;
