import React from 'react';
import { Question } from './data';
import * as Styled from './QuestionStyles';

interface Props {
    question: Question;
    onAnswerSelect: (answer: string) => void;
    onNextQuestion: () => void;
    selectedAnswers: string[];
}

const QuestionComponent: React.FC<Props> = ({
    question,
    onAnswerSelect,
    onNextQuestion,
    selectedAnswers,
}) => {
    const handleAnswerSelection = (answer: string) => {
        onAnswerSelect(answer);
        onNextQuestion();
    };

    return (
        <div className="question-container">
            <h2>{question.text}</h2>
            <div>
                {question.options?.map((option, index) => (
                    <div key={index}>
                        {question.type === 'single' && (
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                onChange={() => handleAnswerSelection(option)}
                                checked={selectedAnswers.includes(option)}
                            />
                        )}
                        {question.type === 'multiple' && (
                            <input
                                type="checkbox"
                                value={option}
                                onChange={(e) => handleAnswerSelection(option)}
                                checked={selectedAnswers.includes(option)}
                            />
                        )}
                        <label>{option}</label>
                    </div>
                ))}
            </div>
            <button onClick={onNextQuestion}>Next</button>
        </div>
    );
};

export default QuestionComponent;