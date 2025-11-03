
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetFreeNotesSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-primary">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Want free study notes?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Get exclusive notes, important questions, and updates delivered straight to your inbox.
                </p>
                <button
                    onClick={() => navigate('/get-free-notes')}
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-indigo-50 sm:w-auto transition-colors"
                >
                    Get Free Notes Now
                </button>
            </div>
        </div>
    );
};

export default GetFreeNotesSection;
