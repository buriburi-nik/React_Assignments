import { useState, useEffect } from "react";

function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch("YOUR_API_URL_HERE")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results))
      .catch((error) => console.error("Error fetching quiz:", error));
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <h2>Your Score: {score} / {questions.length}</h2>
      ) : questions.length > 0 ? (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {[...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer]
            .sort(() => Math.random() - 0.5) 
            .map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer)}>
                {answer}
              </button>
            ))}
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default QuizApp;
