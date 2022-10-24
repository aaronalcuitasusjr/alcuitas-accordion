import { useState } from "react";
import "./QuestionsItem.css";

export default function QuestionsItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-item-container">
      <div className="question-container">
        <p className="question">{question}</p>
        <button
          className="toggle-button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "−" : "+"}
        </button>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
}
