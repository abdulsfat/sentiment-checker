import { useState } from "react";
import red from "/dot-red.svg";
import blue from "/dot-blue.svg";
import { memo } from "../../constants/memo";
import Button from "../ui/Button";

const Sentiment = () => {
  // eslint-disable-next-line no-unused-vars
  const [InputText, setInputText] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.elements.textInput.value;
    setInputText(text);

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 5) {
      setError("Please enter at least 5 word.");
      return;
    }

    try {
      const response = await fetch(
        // "https://sentiment-checker-backend.vercel.app/api/check",
        "http://localhost:3000/api/check",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ words: text }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.error("API Error:", data);
        setAnalysisResult(data);
        setError("");
      } else {
        setAnalysisResult(data);
        setError("");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch data");
    }
    event.target.reset();
  };
  const highlightWords = (text, issues) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const issue = issues.find((issue) => issue.badWord === word);
      const isSupportWord = issues.some(
        (issue) =>
          issue.isPreviousWordSupportive === word ||
          issue.isNextWordSupportive === word
      );

      if (issue) {
        return (
          <span key={index} className="font-bold text-red-500">
            {word}{" "}
          </span>
        );
      } else if (isSupportWord) {
        return (
          <span key={index} className="font-semibold text-indigo-800">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  const getMemojiSrc = (value) => {
    const memoji = memo.find((m) => m.value === value);
    return memoji ? memoji.src : "";
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen mx-auto "
      style={{
        backgroundImage: `
      linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
      url(/bg-2.png)
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="mb-8 text-4xl font-medium">
        ✨ Enter Text for Sentiment Analysis ✨
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex items-center py-2 bg-white/50 rounded-xl ring-1 ring-black/20">
          <input
            type="text"
            id="textInput"
            name="textInput"
            className="w-full px-2 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            placeholder="Enter text for sentiment analysis..."
            aria-label="Enter text for sentiment analysis"
            required
          />
          <Button>Analyze</Button>
        </div>
      </form>
      {error && (
        <div className="p-1 px-5 mt-4 text-red-500 rounded-lg bg-white/50 ring-1 ring-black/5">
          <strong>Error:</strong> {error}
        </div>
      )}
      {analysisResult && (
        <div className="flex flex-row justify-between w-[36%] p-5 mt-10 rounded-2xl bg-white ">
          <div className="flex flex-col justify-center">
            {analysisResult.value === "positive" ? (
              <p className="px-4 py-[2px] text-sm bg-green-200 w-max rounded-3xl">
                {analysisResult.value}
              </p>
            ) : (
              <p className="px-4 py-[2px] text-sm bg-red-200 w-max rounded-3xl">
                {analysisResult.value}
              </p>
            )}
            <h1 className="mt-8 text-xl font-bold">{analysisResult.message}</h1>
            <h2 className="mt-2 font-medium w-80">
              {analysisResult.value === "positive"
                ? analysisResult.data
                : highlightWords(
                    analysisResult.data,
                    analysisResult.issues,
                    analysisResult.value
                  )}
            </h2>

            <div className="flex items-center mt-10">
              <img src={red} alt="" className="mr-2" />
              <p className="mr-8 text-sm">Bad Word</p>
              <img src={blue} alt="" className="mr-2" />
              <p className="text-sm">Support Word</p>
            </div>
          </div>
          <div className="me-[-20px] bottom-0 w-40 rounded-3xl">
            <video
              className="object-cover h-40 pb-1 "
              muted
              loop={true}
              autoPlay
              src={getMemojiSrc(analysisResult.value)}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sentiment;
