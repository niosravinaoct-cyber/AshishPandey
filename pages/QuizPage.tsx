import React, { useState } from 'react';
import { QUIZZES } from '../constants';
import { Quiz, Question } from '../types';
import Card from '../components/Card';

const QuizComponent: React.FC<{ quiz: Quiz; onBack: () => void }> = ({ quiz, onBack }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(quiz.questions.length).fill(null));
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelect = (optionIndex: number) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };
    
    const calculateScore = () => {
        return userAnswers.reduce((score, answer, index) => {
            if (answer === quiz.questions[index].correctAnswerIndex) {
                return score + 1;
            }
            return score;
        }, 0);
    };
    
    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers(new Array(quiz.questions.length).fill(null));
        setShowResults(false);
    }

    if (showResults) {
        const score = calculateScore();
        return (
            <div className="text-center bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
                <p className="mt-4 text-xl text-gray-600">Your Score: 
                    <span className="font-bold text-primary"> {score} / {quiz.questions.length}</span>
                </p>
                <div className="mt-8 flex justify-center gap-4">
                     <button onClick={resetQuiz} className="px-6 py-2 font-semibold text-white bg-primary rounded-md hover:bg-primary-hover">
                        Retry Quiz
                    </button>
                    <button onClick={onBack} className="px-6 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                        Back to Quizzes
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion: Question = quiz.questions[currentQuestionIndex];

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-primary">{quiz.title}</h2>
                <p className="text-sm font-medium text-gray-500">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
            </div>
            <div className="mb-6">
                <p className="text-lg font-semibold text-gray-800">{currentQuestion.questionText}</p>
            </div>
            <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                    <label key={index} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${userAnswers[currentQuestionIndex] === index ? 'bg-blue-100 border-primary' : 'border-gray-300 hover:bg-gray-100'}`}>
                        <input
                            type="radio"
                            name={`question-${currentQuestionIndex}`}
                            className="h-4 w-4 text-primary focus:ring-primary"
                            checked={userAnswers[currentQuestionIndex] === index}
                            onChange={() => handleAnswerSelect(index)}
                        />
                        <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
                <button onClick={onBack} className="text-sm text-gray-600 hover:underline">Exit Quiz</button>
                <button 
                    onClick={handleNext} 
                    disabled={userAnswers[currentQuestionIndex] === null}
                    className="px-8 py-2 font-semibold text-white bg-primary rounded-md hover:bg-primary-hover disabled:bg-gray-400"
                >
                    {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Finish'}
                </button>
            </div>
        </div>
    );
};

const QuizPage: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  if (selectedQuiz) {
    return (
      <div className="bg-gray-100 py-12 flex justify-center items-center min-h-[70vh]">
        <QuizComponent quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Online Tests & Quizzes</h1>
          <p className="mt-4 text-lg text-gray-500">Select a quiz to start practicing and test your knowledge.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUIZZES.map(quiz => (
            <Card
              key={quiz.id}
              title={quiz.title}
              description={quiz.description}
              icon={<quiz.icon className="w-10 h-10" />}
              actionText="Start Quiz"
              onActionClick={() => setSelectedQuiz(quiz)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
