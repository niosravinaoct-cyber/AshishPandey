
import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  onActionClick: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, description, actionText, onActionClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      <div className="p-6 flex-grow">
        {icon && <div className="text-primary mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="p-6 bg-gray-50">
        <button
          onClick={onActionClick}
          className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-hover transition-colors"
        >
          {actionText}
        </button>
      </div>
    </div>
  );
};

export default Card;
