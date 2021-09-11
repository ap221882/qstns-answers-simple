import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [quiz, setquiz] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about you</h3>
        <section className="info">
          {quiz.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
