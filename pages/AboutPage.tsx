import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Helping open-school students learn easily.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our mission is to provide high-quality, accessible study materials for NIOS students to help them achieve their academic goals.
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:text-center">
            <h3 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Our Mission & Vision
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe that every student deserves the best resources to succeed. DNEducation was founded with the vision to bridge the gap in study materials for the National Institute of Open Schooling. We aim to be the most trusted platform for NIOS students.
            </p>
          </div>
        </div>

        <div className="mt-20">
            <h3 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">
                Meet the Team
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto text-center">
                We are a passionate team of educators and developers dedicated to your success.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <img className="h-24 w-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Founder" />
                    <h4 className="text-xl font-bold text-center mt-4">Founder Name</h4>
                    <p className="text-primary text-center">Lead Educator</p>
                    <p className="text-sm text-gray-500 mt-2 text-center">With over 10 years of experience in open schooling education, dedicated to creating simple and effective learning content.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <img className="h-24 w-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Co-founder" />
                    <h4 className="text-xl font-bold text-center mt-4">Co-Founder Name</h4>
                    <p className="text-primary text-center">Tech Lead</p>
                    <p className="text-sm text-gray-500 mt-2 text-center">Expert in building scalable and user-friendly educational platforms to enhance the learning experience.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <img className="h-24 w-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Support Head" />
                    <h4 className="text-xl font-bold text-center mt-4">Support Head</h4>
                    <p className="text-primary text-center">Student Support</p>
                    <p className="text-sm text-gray-500 mt-2 text-center">Committed to ensuring every student query is resolved and providing the best support possible.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
