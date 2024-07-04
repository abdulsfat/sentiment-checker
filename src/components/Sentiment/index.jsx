import { useState } from "react";
import SentimentForm from "../Form/index";
import SentimentResult from "../Result/index";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sentiment = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFormSubmit = async (text) => {
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
        toast.error("API Error. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
        setAnalysisResult(null);
      } else {
        setAnalysisResult(data);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to fetch data. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      setAnalysisResult(null);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full py-48 mx-auto"
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
      <SentimentForm onSubmit={handleFormSubmit} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        transitionDuration={300}
        transition={Slide}
      />
      {analysisResult && <SentimentResult result={analysisResult} />}
    </div>
  );
};

export default Sentiment;
