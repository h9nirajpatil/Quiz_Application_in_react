import React, { useState } from "react";
import "./QuizApp.css"; // Import the CSS file

function QuizApp() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let answers = [];
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 !== null && q2 !== null && q3 !== null) {
      answers.push(q1.value);
      answers.push(q2.value);
      answers.push(q3.value);

      // Correct answers
      let correctAnswers = ["paris", "tokyo", "brasilia"];

      // Check user's answers
      let userScore = 0;
      for (let i = 0; i < correctAnswers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
          userScore++;
        }
      }

      setScore(userScore);

      if (userScore === 3) {
        setModalMessage(
          "Congratulations! You answered all questions correctly 🎉"
        );
      } else {
        setModalMessage("Sorry, you didn't answer all questions correctly.");
      }
      setModalVisible(true);
    } else {
      alert("Please answer all questions.");
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-container2">
        <h1>Quiz Application</h1>
        {/* Quiz questions and options */}
        {/* Include your HTML here */}
        <div className="question">
          <p>1. What is the capital of France?</p>
          <div className="options">
            <div className="option">
              <input type="radio" name="q1" value="paris" />
              <label htmlFor="paris">Paris</label>
            </div>
            <div className="option">
              <input type="radio" name="q1" value="berlin" />
              <label htmlFor="berlin">Berlin</label>
            </div>
            <div className="option">
              <input type="radio" name="q1" value="london" />
              <label htmlFor="london">London</label>
            </div>
          </div>
        </div>
        <div className="question">
          <p>2. What is the capital of Japan?</p>
          <div className="options">
            <div className="option">
              <input type="radio" name="q2" value="tokyo" />
              <label htmlFor="tokyo">Tokyo</label>
            </div>
            <div className="option">
              <input type="radio" name="q2" value="beijing" />
              <label htmlFor="beijing">Beijing</label>
            </div>
            <div className="option">
              <input type="radio" name="q2" value="seoul" />
              <label htmlFor="seoul">Seoul</label>
            </div>
          </div>
        </div>
        <div className="question">
          <p>3. What is the capital of Brazil?</p>
          <div className="options">
            <div className="option">
              <input type="radio" name="q3" value="brasilia" />
              <label htmlFor="brasilia">Brasília</label>
            </div>
            <div className="option">
              <input type="radio" name="q3" value="buenosaires" />
              <label htmlFor="buenosaires">Buenos Aires</label>
            </div>
            <div className="option">
              <input type="radio" name="q3" value="lima" />
              <label htmlFor="lima">Lima</label>
            </div>
          </div>
        </div>
        <button id="submit-btn" onClick={handleSubmit}>
          Submit Answers
        </button>
        <div id="modal" className={modalVisible ? "modal" : "modal hidden"}>
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <p id="modal-message">{modalMessage}</p>
            <p>
              Your score: <span id="modal-score">{score}</span> out of 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
