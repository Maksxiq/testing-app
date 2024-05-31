import React, { useState, useEffect } from 'react';
import Question from './Question';
import { testQuestions } from './data';import React, { useState } from 'react';
import Timer from './Timer';


const App: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    useEffect(() => {
        const savedAnswers = localStorage.getItem('selectedAnswers');
        if (savedAnswers) {
            setSelectedAnswers(JSON.parse(savedAnswers));
        }
    }, []);

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswers([...selectedAnswers, answer]);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    useEffect(() => {
        localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
    }, [selectedAnswers]);

    const currentQuestion = testQuestions[currentQuestionIndex];

    return (
        <div className="app-container">
            {currentQuestion ? (
                <Question
                    question={currentQuestion}
                    onAnswerSelect={handleAnswerSelect}
                    onNextQuestion={handleNextQuestion}
                    selectedAnswers={selectedAnswers}
                />
            ) : (
                <div>
                    <h2>Test Completed</h2>
                    {/* Show results or submission message */}
                </div>
            )}
        </div>
    );
};

export default App;