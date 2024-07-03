import Button from "../ui/Button";

const Form = () => {
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
  return (
    <>
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
    </>
  );
};

export default Form;
