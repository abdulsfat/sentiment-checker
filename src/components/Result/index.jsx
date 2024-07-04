/* eslint-disable react/prop-types */
import red from "/dot-red.svg";
import blue from "/dot-blue.svg";
import { memo } from "../../constants/memo";

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
        <span key={index} className="font-bold text-red-700">
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

const SentimentResult = ({ result }) => {
  return (
    <div className="flex flex-row justify-between p-5 mt-10 bg-white w-max rounded-2xl">
      <div className="flex flex-col justify-center">
        {result.value === "positive" ? (
          <p className="px-4 py-[2px] text-sm bg-green-200 w-max rounded-3xl">
            {result.value}
          </p>
        ) : (
          <p className="px-4 py-[2px] text-sm bg-red-200 w-max rounded-3xl">
            {result.value}
          </p>
        )}
        <h1 className="mt-8 text-xl font-bold">{result.message}</h1>
        <h2 className="mt-2 font-medium w-96">
          {result.value === "positive"
            ? result.data
            : highlightWords(result.data, result.issues, result.value)}
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
          className="object-cover h-40 pb-1"
          muted
          loop={true}
          autoPlay
          src={getMemojiSrc(result.value)}
          alt=""
        />
      </div>
    </div>
  );
};

export default SentimentResult;
