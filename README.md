# React Quiz App

## Overview
This is a simple quiz application built using React. The application allows users to answer a series of multiple-choice questions and provides feedback on correctness upon answering or skipping questions.

## Getting Started
To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm run dev`.
5. Open your browser and visit `http://localhost:5173` to view the application.

## Features
**Header:** Displays the quiz logo and title.
**Question Timer:** Counts down the time available to answer each question.
**Question Component:** Renders each question with its corresponding answers.
**Answer Component:** Allows users to select an answer from a randomized list.
**Summary Component:** Displays quiz completion statistics including skipped, correct, and incorrect answers.

## Components
**App Component**
The App component serves as the entry point of the application. It renders the Header and Quiz components.

**Header Component**
The Header component displays the quiz logo and title.

**Quiz Component**
The Quiz component manages the flow of questions and user answers. It renders each Question component until all questions are answered, then displays the Summary component.

**Question Component**
The Question component renders each question and its corresponding answers. It utilizes the QuestionTimer and Answers components.

**Answers Component**
The Answers component displays a shuffled list of answer options for each question. It handles user selection and provides feedback on correctness.

**QuestionTimer Component**
The QuestionTimer component manages the countdown timer for each question. It triggers events based on timeout and updates the UI accordingly.

**Summary Component**
The Summary component displays quiz completion statistics, including the percentage of skipped, correct, and incorrect answers. It provides a review of each question and the user's responses.

## Data
The quiz questions and answers are sourced from a static data file `questions.js` and are imported into relevant components.

## Technologies Used
**React:** JavaScript library for building user interfaces.
**JavaScript (ES6+):** Modern JavaScript syntax used throughout the application.
**CSS:** Styling the components for a better user interface.
