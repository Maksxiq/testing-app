export interface Question {
    id: number;
    text: string;
    type: 'single' | 'multiple' | 'short' | 'extended';
    options?: string[];
    correctAnswer?: string | string[];
}

export const testQuestions: Question[] = [
    {
        id: 1,
        text: "What is 2 + 2?",
        type: 'single',
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        id: 2,
        text: "Select fruits:",
        type: 'multiple',
        options: ["Apple", "Banana", "Carrot", "Orange"],
        correctAnswer: ["Apple", "Banana", "Orange"]
    },
    // Add more questions as needed
];