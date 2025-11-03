import React, { useState, useMemo } from 'react';
import { PREVIOUS_YEAR_PAPERS } from '../constants';
import { Paper } from '../types';

const PreviousYearPapersPage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');

  const subjects = useMemo(() => [...new Set(PREVIOUS_YEAR_PAPERS.map(p => p.subject))], []);

  const filteredPapers = useMemo(() => {
    return PREVIOUS_YEAR_PAPERS.filter(paper => {
      const classMatch = selectedClass === 'All' || paper.class === selectedClass;
      const subjectMatch = selectedSubject === 'All' || paper.subject === selectedSubject;
      return classMatch && subjectMatch;
    });
  }, [selectedClass, selectedSubject]);

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Previous Year Papers</h1>
      <p className="text-gray-600 mb-8">Download question papers from previous years to boost your preparation.</p>

      <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col sm:flex-row gap-4">
        {/* Class Filter */}
        <div>
          <label htmlFor="class-filter" className="block text-sm font-medium text-gray-700">Filter by Class</label>
          <select
            id="class-filter"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          >
            <option value="All">All Classes</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 12">Class 12</option>
          </select>
        </div>
        {/* Subject Filter */}
        <div>
            <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700">Filter by Subject</label>
            <select
                id="subject-filter"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
                <option value="All">All Subjects</option>
                {subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
            </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Download</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPapers.map((paper: Paper) => (
                <tr key={paper.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paper.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={paper.url} className="text-white bg-primary hover:bg-primary-hover px-3 py-1.5 rounded-full">Download PDF</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredPapers.length === 0 && (
            <div className="text-center p-8">
              <p className="text-gray-600">No papers found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearPapersPage;