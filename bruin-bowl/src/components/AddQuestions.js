import React, { useState } from "react";
import { createQuestion } from "../api/api.js";
import { CATEGORIES } from "../context/GameContext";
import Modal from "react-modal";

function AddQuestions() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [wrong1, setWrong1] = useState("");
  const [wrong2, setWrong2] = useState("");
  const [wrong3, setWrong3] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const categoryStrings = Object.values(CATEGORIES);

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };
  const handleChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };
  const handleChangeWrong1 = (event) => {
    setWrong1(event.target.value);
  };
  const handleChangeWrong2 = (event) => {
    setWrong2(event.target.value);
  };
  const handleChangeWrong3 = (event) => {
    setWrong3(event.target.value);
  };

  const handleSubmit = (e) => {
    // Call the function when the button is clicked
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // check if question, answer, and wrong answers are empty
    if (
      question === "" ||
      answer === "" ||
      wrong1 === "" ||
      wrong2 === "" ||
      wrong3 === ""
    ) {
      setError("Please fill out all fields.");
      return;
    }

    const jsonData = {
      question,
      answer,
      option1: wrong1,
      option2: wrong2,
      option3: wrong3,
      category: formJson.category,
    };

    const response = (data) => {
      if (data) {
        if (data["error"]) {
          setError(data["error"].message);
        } else {
          console.log(data);

          const r = data["quizQuestion"];
          setResults(r);
          setError("");

          console.log(r.answer);
        }
      }
    };

    createQuestion(jsonData, response);
  };

  function close() {
    setResults(null);
    setQuestion("");
    setAnswer("");
    setWrong1("");
    setWrong2("");
    setWrong3("");
  }

  const customStyles = {
    content: {
      maxWidth: "600px",
      maxHeight: "500px",
      margin: "auto", // center horizontally
      backgroundColor: "#fffbeb",
      borderRadius: "24px",
      borderColor: "#f0e68c",
    },
  };

  function mainContent() {
    return (
      <div>
        <h1 className="font-bold text-3xl mb-1.5">Add Question</h1>
        <h2 className="text-xl mb-1.5">Question Prompt</h2>
        <input
          type="text"
          value={question}
          onChange={handleChangeQuestion}
          placeholder="Question Prompt"
          className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
        />
        <br></br>
        <br></br>
        <h2 className="text-xl mb-1.5">Correct Answer</h2>
        <input
          type="text"
          value={answer}
          onChange={handleChangeAnswer}
          placeholder="Correct Answer"
          className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
        />
        <br></br>
        <br></br>
        <h2 className="text-xl mb-1.5">Wrong Answers</h2>
        <input
          type="text"
          value={wrong1}
          onChange={handleChangeWrong1}
          placeholder="Wrong Answer"
          className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          value={wrong2}
          onChange={handleChangeWrong2}
          placeholder="Wrong Answer"
          className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          value={wrong3}
          onChange={handleChangeWrong3}
          placeholder="Wrong Answer"
          className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
        />
        <br></br>
        <br></br>
        <h2 className="text-xl mb-1.5">Category</h2>
        <form method="post" onSubmit={handleSubmit}>
          {categoryStrings.map((category, index) => {
            // Creates a button for each category
            return (
              <div className="mb-1">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                  defaultChecked={index === 0}
                />
                <label htmlFor={category} className="ml-2">
                  {category}
                </label>
              </div>
            );
          })}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full"
          >
            Submit
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div>
      {mainContent()}

      <Modal
        closeTimeoutMS={2000}
        isOpen={results !== null}
        onRequestClose={() => close()}
        style={customStyles}
      >
        {results != null ? (
          <div className="mt-4 p-4 text-bruin-darkgold">
            <button
              onClick={() => close()}
              className="absolute top-4 right-4 p-2"
            >
              <i className="fas fa-times fa-2x"></i>
            </button>

            <h1 className="font-bold text-2xl mb-2">Question Added!</h1>
            <h2 className="text-xl mb-5">
              This will show up when you play in the{" "}
              <span className="font-bold">{results.category}</span> category.
            </h2>

            <div className="mt-4 p-10 bg-amber-50 rounded-2xl border border-amber-300">
              <h2 className="text-3xl font-bold mb-5">{results.question}</h2>
              <ul className="text-xl">
                <li className="text-green-700">{results.answer}</li>
                <li>{results.option1}</li>
                <li>{results.option2}</li>
                <li>{results.option3}</li>
              </ul>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

export default AddQuestions;
