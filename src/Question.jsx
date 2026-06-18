import React, { useEffect, useState } from "react";
const QuizData = [
  { question: "what is javscript ? " ,
    option : ["programming language" , "company name" , "product" , "none of the above"]
  },

  { question: "what is the capital of india" ,
    option : ["New Delhi" , "USA" , "Jharkhand" , "Italy"]
  },


  { question: "who build microsoft" ,  
    option : ["Bill Gates" , "Narendra Modi" , "Mark Zuckerberg" , "Elon Musk"]

  },
  { question: "who is mahatma gandhi " ,
    option : ["Famous Scientist" , "A hollywood Actor" , "Musician" , "Father of Nation"]

   },
];
const Questions = () => {
  const [Count, setCount] = useState(15);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [QuestionNo, setQuestionNo] = useState(1);
  const [running, setRunning] = useState(true); // ✅ new state

  useEffect(() => {
    if (!running) {
      return;
    }

    if (Count == 0) {
      handleNextquestion();
      return;
    }

    const timer = setInterval(() => {
      setCount((Count) => Count - 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  function pause() {
    setRunning(false);
  }

  const resume = () => setRunning(true);
  const next = () => setCount(0);

  const handleNextquestion = () => {
    if (CurrentIndex + 1 < QuizData.length) {
      setCurrentIndex((CurrentIndex) => CurrentIndex + 1);
      setQuestionNo((prev) => prev + 1);
      setCount(15);
    }
  };

  return (
    <div>
      <h2>
        {" "}
        <div id="tan">question no ~ {QuestionNo}</div>{" "}
        {QuizData[CurrentIndex].question} <span> {Count}</span>
      </h2>
   
       {QuizData[CurrentIndex].option.map((opt, id) => (
  <h3 className="q-option" key={id}>
    <button className="optbutton">{opt}</button>
  </h3>
))}
       

      <button className="lowerbuttons" onClick={pause}> pause </button>
      <button className="lowerbuttons" onClick={resume}> resume </button>
      <button className="lowerbuttons" onClick={next}> next</button>
    </div>
  );
};

export default Questions;
