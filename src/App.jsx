import React, { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question: "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  const [cardId, setCardId] = useState("");

  return (
    <>
      <h1 className="uppercase my-12 text-center text-7xl font-semibold flex items-center justify-center gap-4">
        <span className="text-3xl">🎴🎴</span> <span>Flip Flip</span> <span className="text-3xl">🎴🎴</span>
      </h1>
      <div className="flashcards">
        {questions.map((card) => (
          <Flashcard key={card.id} card={card} id={card.id} cardId={cardId} stateChanger={setCardId} />
        ))}
      </div>
    </>
  );
}

function Flashcard({ card, id, stateChanger, cardId }) {
  function handleClick() {
    stateChanger(cardId === id ? "" : id);
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`flashcard${id === cardId ? " flip" : ""}`}>
        <div className="front">{card.question}</div>
        <div className="back">{card.answer}</div>
      </div>
    </div>
  );
}
