import React from 'react';
import { TEST_SERIES } from '../constants';
import { TestSeries } from '../types';
import { PlayCircleIcon, ClockIcon, CheckCircleIcon } from '../constants';

const getStatusInfo = (status: 'Upcoming' | 'Active' | 'Completed') => {
  switch (status) {
    case 'Active':
      return {
        classes: 'bg-green-100 text-green-800',
        icon: <PlayCircleIcon className="w-4 h-4 mr-1.5" />,
      };
    case 'Upcoming':
      return {
        classes: 'bg-yellow-100 text-yellow-800',
        icon: <ClockIcon className="w-4 h-4 mr-1.5" />,
      };
    case 'Completed':
      return {
        classes: 'bg-gray-100 text-gray-800',
        icon: <CheckCircleIcon className="w-4 h-4 mr-1.5" />,
      };
  }
};

const getButtonAction = (status: 'Upcoming' | 'Active' | 'Completed', price: string) => {
    switch (status) {
      case 'Active':
        return { text: price.toLowerCase() === 'free' ? 'Attempt Now' : 'Buy Now', classes: 'bg-primary text-white hover:bg-primary-hover' };
      case 'Upcoming':
        return { text: 'Notify Me', classes: 'bg-amber-500 text-white hover:bg-amber-600' };
      case 'Completed':
        return { text: 'View Results', classes: 'bg-gray-500 text-white hover:bg-gray-600' };
    }
  };

const Leaderboard: React.FC = () => {
    const topScorers = [
        { name: 'Riya Sharma', score: '98%', avatar: 'https://picsum.photos/seed/riya/40/40' },
        { name: 'Karan Verma', score: '95%', avatar: 'https://picsum.photos/seed/karan/40/40' },
        { name: 'Sneha Patil', score: '94%', avatar: 'https://picsum.photos/seed/sneha/40/40' },
    ];
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Top Scorers</h3>
            <ul className="space-y-4">
                {topScorers.map((scorer, index) => (
                     <li key={scorer.name} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className={`text-lg font-bold w-8 text-center mr-2 ${index === 0 ? 'text-amber-400' : index === 1 ? 'text-slate-400' : index === 2 ? 'text-amber-600' : 'text-gray-400'}`}>{index + 1}</span>
                            <img className="h-10 w-10 rounded-full" src={scorer.avatar} alt={scorer.name} />
                            <span className="ml-3 font-medium text-gray-700">{scorer.name}</span>
                        </div>
                        <span className="font-bold text-primary">{scorer.score}</span>
                     </li>
                ))}
            </ul>
        </div>
    );
}

const TestSeriesPage: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Series</h1>
      <p className="text-gray-600 mb-8">Evaluate your preparation with our mock tests.</p>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <div className="space-y-6">
                {TEST_SERIES.map((test: TestSeries) => {
                    const statusInfo = getStatusInfo(test.status);
                    const buttonAction = getButtonAction(test.status, test.price);
                    return (
                        <div key={test.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-transform hover:-translate-y-1">
                            <div className="flex-1">
                                <div className="flex items-center gap-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.classes}`}>
                                        {statusInfo.icon}
                                        {test.status}
                                    </span>
                                    <span className="text-sm font-bold text-primary">{test.price}</span>
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 mt-2">{test.title}</h2>
                                <p className="text-sm text-gray-600 mt-1">{test.description}</p>
                            </div>
                            <button className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors shadow-sm ${buttonAction.classes}`}>
                                {buttonAction.text}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="lg:col-span-1">
            <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default TestSeriesPage;