import React, { useState, useEffect } from 'react';

interface FreeNotesPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const FreeNotesPopup: React.FC<FreeNotesPopupProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 2500);
    };

    useEffect(() => {
        // Reset submitted state if popup is re-opened without refresh
        if (isOpen) {
            setSubmitted(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-95 opacity-0 animate-scale-in">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {submitted ? (
                    <div className="p-8 text-center">
                        <div className="flex justify-center">
                            <svg className="h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You!</h2>
                        <p className="text-gray-600 mt-2">Your notes are on the way. Please check your email!</p>
                    </div>
                ) : (
                    <div className="p-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Get FREE Study Notes!</h2>
                            <p className="text-gray-600 mt-2">Fill in your details below to receive exclusive notes and updates directly in your inbox.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                             <div>
                                <label htmlFor="popup-name" className="text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="popup-name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="e.g. Rohan Sharma" />
                            </div>
                             <div>
                                <label htmlFor="popup-class" className="text-sm font-medium text-gray-700">Class</label>
                                <select id="popup-class" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                    <option value="">Select your class</option>
                                    <option value="10">Class 10</option>
                                    <option value="12">Class 12</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="popup-email" className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="popup-email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="you@example.com" />
                            </div>
                             <div>
                                <label htmlFor="popup-phone" className="text-sm font-medium text-gray-700">WhatsApp Number</label>
                                <input type="tel" id="popup-phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="10-digit mobile number"/>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-2.5 px-4 rounded-md font-semibold hover:bg-primary-hover transition-colors shadow-md">
                                Get Free Notes
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <style>{`
                @keyframes scale-in {
                    from { transform: scale(.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default FreeNotesPopup;