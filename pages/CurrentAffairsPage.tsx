import React from 'react';
import { CURRENT_AFFAIRS_ARTICLES } from '../constants';
import { Article } from '../types';

const CurrentAffairsPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Current Affairs</h1>
      <p className="text-gray-600 mb-8">Stay updated with the latest news and events relevant to your exams.</p>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {CURRENT_AFFAIRS_ARTICLES.map((article: Article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
            <p className="text-sm text-gray-500">{article.date}</p>
            <h2 className="text-xl font-bold text-gray-800 mt-2 hover:text-primary transition-colors">
              <a href={article.url}>{article.title}</a>
            </h2>
            <p className="text-gray-600 mt-2">{article.summary}</p>
            <a href={article.url} className="text-primary font-semibold mt-4 inline-block hover:underline">
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentAffairsPage;