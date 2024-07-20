import { useState } from "react";
import SentimentForm from "../Form/index";
import SentimentResult from "../Result/index";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sentiment = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (text) => {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const response = await fetch(
        "https://sentiment-checker-backend.vercel.app/api/check",
        // "http://localhost:3000/api/check",
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-[80vh] lg:h-screen  py-20 lg:py-48 lg:mx-auto"
      style={{
        backgroundImage: `
          linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
          url(/bg-2.png)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-8 text-xl font-medium lg:text-4xl">
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
        {isLoading && (
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="w-12 h-12 border-4 border-indigo-500 border-solid rounded-full border-t-transparent animate-spin"></div>
            <p className="mt-3 font-semibold text-md animate-pulse">
              Loading...
            </p>
          </div>
        )}
        {analysisResult && <SentimentResult result={analysisResult} />}
      </div>
    </div>
  );
};

export default Sentiment;
