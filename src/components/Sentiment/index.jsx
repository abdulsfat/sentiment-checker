import React, { useState } from "react";

const Sentiment = () => {
  const [inputText, setInputText] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get input value
    const text = event.target.elements.textInput.value;
    setInputText(text);

    // Perform sentiment analysis (simulated delay for demonstration)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated analysis result (replace with actual API call)
    const mockResult = {
      text: text,
      sentiment: "negative",
      categories: ["bad word"],
    };

    // Update state with analysis result
    setAnalysisResult(mockResult);

    // Reset the form
    event.target.reset();
  };

  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto">
      <h1 className="mb-8 text-4xl font-medium">
        Enter Text for Sentiment Analysis
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex items-center py-2 border-2 rounded-xl">
          <input
            type="text"
            id="textInput"
            name="textInput"
            className="w-full px-2 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            placeholder="Enter text for sentiment analysis..."
            aria-label="Enter text for sentiment analysis"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg me-1 hover:bg-blue-700"
          >
            Analyze
          </button>
        </div>
      </form>
      {analysisResult && (
        <div className="p-4 mt-8 bg-gray-100 rounded-xl">
          <h2 className="mb-2 text-xl font-medium">Analysis Result:</h2>
          <p>
            <strong>Text:</strong> {analysisResult.text}
          </p>
          <p>
            <strong>Sentiment:</strong> {analysisResult.sentiment}
          </p>
          <p>
            <strong>Categories:</strong> {analysisResult.categories.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sentiment;
