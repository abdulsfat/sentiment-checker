/* eslint-disable react/prop-types */
import { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../ui/Button";

const SentimentForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = inputText;

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 5) {
      toast.error("Please enter at least 5 words.", {
        transition: Slide,
      });
      return;
    }

    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:px-0">
      <div className="flex items-center py-2 bg-white/50 rounded-xl ring-1 ring-black/20">
        <textarea
          id="textInput"
          name="textInput"
          className="w-full py-1 mx-2 text-gray-700 bg-transparent border-none appearance-none resize-none focus:outline-none"
          placeholder="Enter text for sentiment analysis..."
          aria-label="Enter text for sentiment analysis"
          required
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={5}
        />
      </div>
      <Button type="submit" style="w-full mt-2">
        Analyze
      </Button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        transitionDuration={300}
        transition={Slide}
      />
    </form>
  );
};

export default SentimentForm;
