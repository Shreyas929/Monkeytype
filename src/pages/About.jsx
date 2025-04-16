import React from "react";
import "./about.css"; // Import the external CSS file

const About = () => {
  return (
    <div className="typing-test-container">
      <h1 className="typing-test-title">Typing Speed Test</h1>
      <p className="typing-test-description">
        The <strong>Typing Speed Test</strong> is a fast and interactive web application built with
        <strong> React.js</strong> to help users assess and improve their typing speed and accuracy.
        This test runs for 30 seconds, challenging users to type as many words as they can accurately.
      </p>

      <div className="typing-test-box">
        <h2 className="typing-test-subtitle">Key Features</h2>
        <ul className="typing-test-list">
          <li className="typing-test-item">Randomly generated words for typing practice.</li>
          <li className="typing-test-item">Real-time tracking of typed characters, mistakes, and accuracy.</li>
          <li className="typing-test-item">Automatic calculation of WPM (Words Per Minute) and CPM (Characters Per Minute).</li>
          <li className="typing-test-item">Countdown timer set to 30 seconds.</li>
          <li className="typing-test-item">Reset functionality to restart the test with new words.</li>
        </ul>
      </div>

      <div className="typing-test-box">
        <h2 className="typing-test-subtitle">How It Works</h2>
        <ol className="typing-test-list">
          <li className="typing-test-item">Start typing in the input field, and the timer begins automatically.</li>
          <li className="typing-test-item">Correct and incorrect characters are highlighted in real time.</li>
          <li className="typing-test-item">When the timer reaches 0, typing stops, and results are displayed.</li>
          <li className="typing-test-item">Click the "Try Again" button to reset and start a new test.</li>
        </ol>
      </div>

      <div className="typing-test-box">
        <h2 className="typing-test-subtitle">Technologies Used</h2>
        <ul className="typing-test-list">
          <li className="typing-test-item"><strong>React.js</strong> - For building the interactive UI and state management.</li>
          <li className="typing-test-item"><strong>CSS</strong> - For modern styling and responsive design.</li>
          <li className="typing-test-item"><strong>JavaScript</strong> - For handling logic, calculations, and performance tracking.</li>
        </ul>
      </div>

      <div className="typing-test-box">
        <h2 className="typing-test-subtitle">Future Enhancements</h2>
        <ul className="typing-test-list">
          <li className="typing-test-item">Adding multiple difficulty levels (Easy, Medium, Hard).</li>
          <li className="typing-test-item">Implementing a leaderboard to track high scores.</li>
          <li className="typing-test-item">Providing detailed analytics on typing performance.</li>
          <li className="typing-test-item">Adding sound effects for correct/incorrect typing feedback.</li>
        </ul>
      </div>

      <p className="typing-test-highlight">Try the Typing Speed Test now and boost your typing efficiency!</p>
    </div>
  );
};

export default About;
