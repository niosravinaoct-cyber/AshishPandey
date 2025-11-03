import React from 'react';
import { BOOKS } from '../constants';
import { Book } from '../types';

const BooksPage: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Books & Materials</h1>
      <p className="text-gray-600 mb-8">Find e-books and recommended study materials for your subjects.</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {BOOKS.map((book: Book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform hover:-translate-y-2 duration-300">
            <div className="aspect-w-2 aspect-h-3">
              <img src={book.imageUrl} alt={book.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 truncate text-sm">{book.title}</h3>
              <p className="text-xs text-gray-500">{book.author}</p>
              <div className="mt-3 flex gap-2">
                <a href={book.url} className="flex-1 text-center text-xs font-semibold text-primary border border-primary rounded-full py-1.5 hover:bg-primary hover:text-white transition-colors">
                  Preview
                </a>
                <a href={book.url} className="flex-1 text-center text-xs font-semibold text-white bg-primary rounded-full py-1.5 hover:bg-primary-hover transition-colors">
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;