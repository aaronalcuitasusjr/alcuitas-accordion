import QuestionsItem from "./QuestionsItem";

import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="accordion-container">
        <p className="title">Questions And Answers About Login</p>
        <div className="questions-container">
          {data.map((item) => {
            return (
              <QuestionsItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
