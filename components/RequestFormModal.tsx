import React, { useState, useEffect } from 'react';

interface RequestFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RequestFormModal: React.FC<RequestFormModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        class: '',
        subject: '',
        requirements: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending email by logging to the console
        console.log("Sending custom TMA request:", formData);
        setSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 3000); // Close modal after 3 seconds
    };

    useEffect(() => {
        if (isOpen) {
            setSubmitted(false);
            setFormData({ name: '', email: '', class: '', subject: '', requirements: '' });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300 scale-95 opacity-0 animate-scale-in">
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
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Request Sent!</h2>
                        <p className="text-gray-600 mt-2">Thank you! Our team will review your request and get back to you via email shortly.</p>
                    </div>
                ) : (
                    <div className="p-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Request a Customized File</h2>
                            <p className="text-gray-600 mt-2">Need a specific TMA or Practical file? Fill out the form below with your requirements.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="req-name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="req-name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="req-email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="req-email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                                </div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="req-class" className="text-sm font-medium text-gray-700">Class</label>
                                    <select id="req-class" name="class" value={formData.class} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                        <option value="">Select a class</option>
                                        <option value="Class 10">Class 10</option>
                                        <option value="Class 12">Class 12</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="req-subject" className="text-sm font-medium text-gray-700">Subject Name & Code</label>
                                    <input type="text" id="req-subject" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="e.g. Physics (312)" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="req-requirements" className="text-sm font-medium text-gray-700">Specific Requirements</label>
                                <textarea id="req-requirements" name="requirements" value={formData.requirements} onChange={handleChange} rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Please describe what you need. e.g., TMA for session 2024-25, specific practical experiments, etc."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-accent text-white py-2.5 px-4 rounded-md font-semibold hover:bg-accent-hover transition-colors shadow-md">
                                Submit Request
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

export default RequestFormModal;