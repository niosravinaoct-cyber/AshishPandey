import React, { useState, useMemo } from 'react';
import { NOTE_FILES } from '../constants';
import { NoteFile } from '../types';

const NotesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('All');

    const filteredNotes = useMemo(() => {
        return NOTE_FILES.filter(note => {
            const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                note.subject.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesClass = selectedClass === 'All' || note.class === selectedClass;
            return matchesSearch && matchesClass;
        });
    }, [searchTerm, selectedClass]);

    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">PDF Notes</h1>
                    <p className="mt-4 text-lg text-gray-500">Find and download study notes for all your subjects.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                     <select 
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                        <option value="All">All Classes</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 12">Class 12</option>
                    </select>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                     <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Info</th>
                                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Download</span></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredNotes.map((file: NoteFile) => (
                                    <tr key={file.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{file.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.subject}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.class}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.fileType} ({file.fileSize})</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href={file.url} className="text-primary hover:text-primary-hover">Download</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {filteredNotes.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">No notes found. Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotesPage;