import React, { useState } from 'react';

const GetFreeNotesPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                {submitted ? (
                    <div className="p-8 text-center bg-green-50 rounded-lg">
                        <div className="flex justify-center">
                            <svg className="h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You!</h2>
                        <p className="text-gray-600 mt-2">Your request has been received. The notes will be sent to your email shortly!</p>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold text-gray-900">Get FREE Study Notes!</h1>
                            <p className="mt-4 text-lg text-gray-500">
                                Fill in your details below to receive exclusive notes, tips, and updates directly in your inbox and on WhatsApp.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
                            <div>
                                <label htmlFor="page-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="page-name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="e.g. Rohan Sharma" />
                            </div>
                            <div>
                                <label htmlFor="page-class" className="block text-sm font-medium text-gray-700">Class</label>
                                <select id="page-class" required className="mt-1 block w-full px-3 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                    <option value="">Select your class</option>
                                    <option value="10">Class 10</option>
                                    <option value="12">Class 12</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="page-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="page-email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="page-phone" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                                <input type="tel" id="page-phone" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="10-digit mobile number"/>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md font-semibold hover:bg-primary-hover transition-colors shadow-lg">
                                Get My Free Notes
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default GetFreeNotesPage;
