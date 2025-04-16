import React, { useState, useEffect, useRef } from "react";
import useWords from "./usewords";
import "./style.css";

const TypingSpeedTest = () => {
  const count = 30;
  const { words, updateWords } = useWords(count);
  const [inputValue, setInputValue] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTyping, setIsTyping] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const inputRef = useRef(null);

  // Get topScore from localStorage or default to 0
  const [topScore, setTopScore] = useState(() => {
    const storedScore = localStorage.getItem("topScore");
    return storedScore ? parseInt(storedScore) : 0;
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    let timer;
    if (isTyping && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTyping, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTyping(false);
      setTopScore((prevTopScore) => {
        const newTop = wpm > prevTopScore ? wpm : prevTopScore;
        localStorage.setItem("topScore", newTop);
        return newTop;
      });
    }
  }, [timeLeft, wpm]);

  const handleInputChange = (e) => {
    if (timeLeft === 0) return;

    const value = e.target.value;
    setInputValue(value);

    if (!isTyping) {
      setIsTyping(true);
    }

    let mistakeCount = 0;
    let lastIndex = value.length;

    for (let i = 0; i < lastIndex; i++) {
      if (value[i] !== words[i]) {
        mistakeCount++;
      }
    }

    setMistakes(mistakeCount);
    setCharIndex(lastIndex);

    // Calculate WPM & CPM
    const correctChars = lastIndex - mistakeCount;
    setWpm(Math.round((correctChars / 5) / ((30 - timeLeft) / 60)) || 0);
    setCpm(correctChars);
  };

  const resetGame = () => {
    updateWords();
    setInputValue("");
    setCharIndex(0);
    setMistakes(0);
    setTimeLeft(30);
    setIsTyping(false);
    setWpm(0);
    setCpm(0);
  };

  return (
    <div className="wrapper" onClick={() => inputRef.current.focus()}>
      <h2 className="Topscore" style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>
        Top Score : {topScore}
      </h2>
      <input
        type="text"
        className="input-field"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        disabled={timeLeft === 0}
      />
      <div className="content-box">
        <div className="typing-text">
          <p>
            {words.split("").map((char, index) => {
              let className = "";
              if (index < inputValue.length) {
                className = inputValue[index] === char ? "correct" : "incorrect";
              } else if (index === inputValue.length) {
                className = "active";
              }

              return (
                <span key={index} className={className}>
                  {char}
                </span>
              );
            })}
          </p>
        </div>
        <div className="content">
          <ul className="result-details">
            <li className="time">
              <p>Time Left:</p>
              <span><b>{timeLeft}</b>s</span>
            </li>
            <li className="mistake">
              <p>Mistakes:</p>
              <span>{mistakes}</span>
            </li>
            <li className="wpm">
              <p>WPM:</p>
              <span>{wpm}</span>
            </li>
            <li className="cpm">
              <p>CPM:</p>
              <span>{cpm}</span>
            </li>
          </ul>
          <button onClick={resetGame}>Try Again</button>
        </div>
      </div>
    </div>
  );
};

export default TypingSpeedTest;
