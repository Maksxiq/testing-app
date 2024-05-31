import styled from 'styled-components';

export const QuestionContainer = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const QuestionText = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        margin-bottom: 10px;

        input[type='radio'],
        input[type='checkbox'] {
            margin-right: 10px;
        }
    }
`;

export const NextButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }
`;