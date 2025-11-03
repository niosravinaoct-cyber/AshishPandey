import React, { useState, useMemo } from 'react';
import { TMA_FILES } from '../constants';
import { TMAFile } from '../types';
import RequestFormModal from '../components/RequestFormModal';

const TMAsPage: React.FC = () => {
    const [selectedClass, setSelectedClass] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredFiles = useMemo(() => {
        if (selectedClass === 'All') {
            return TMA_FILES;
        }
        return TMA_FILES.filter(file => file.class === selectedClass);
    }, [selectedClass]);

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">TMA & Practical Files</h1>
                    <p className="mt-4 text-lg text-gray-500">Download your solved Tutor Marked Assignments and Practical Files.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex space-x-2 bg-gray-100 p-1 rounded-full">
                        <button onClick={() => setSelectedClass('All')} className={`px-4 py-2 text-sm font-medium rounded-full ${selectedClass === 'All' ? 'bg-primary text-white shadow' : 'text-gray-600'}`}>All Files</button>
                        <button onClick={() => setSelectedClass('Class 10')} className={`px-4 py-2 text-sm font-medium rounded-full ${selectedClass === 'Class 10' ? 'bg-primary text-white shadow' : 'text-gray-600'}`}>Class 10</button>
                        <button onClick={() => setSelectedClass('Class 12')} className={`px-4 py-2 text-sm font-medium rounded-full ${selectedClass === 'Class 12' ? 'bg-primary text-white shadow' : 'text-gray-600'}`}>Class 12</button>
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="mt-4 md:mt-0 px-6 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow"
                    >
                        Request Customized File
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFiles.map((file: TMAFile) => (
                        <div key={file.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
                            <div>
                                <p className="text-sm font-semibold text-primary">{file.subject}</p>
                                <h3 className="text-lg font-bold text-gray-800 mt-1">{file.title}</h3>
                                <p className="text-sm text-gray-500">{file.class}</p>
                            </div>
                            <a href={file.url} className="mt-4 w-full text-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                                View / Download
                            </a>
                        </div>
                    ))}
                </div>

                {filteredFiles.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">No files found for the selected class.</p>
                    </div>
                )}
            </div>
            <RequestFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default TMAsPage;