/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div
        className="flex flex-col items-center justify-center h-[max] lg:h-screen  py-20 lg:py-48 lg:mx-auto"
        style={{
          backgroundImage: `
          linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
          url(/bg-2.png)
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 py-8 mx-auto max-w-7xl md:py-16">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            About Sentiment Checker
          </h2>
          <p className="mb-6 text-lg text-slate-700">
            Sentiment Checker is a powerful tool that uses advanced sentiment
            analysis to quickly detect emotions and pain points in text. Whether
            you're analyzing customer feedback, social media posts, or any other
            type of text data, Sentiment Checker can help you understand the
            underlying sentiments and make informed decisions based on the
            analysis.
          </p>
          <h3 className="mb-3 text-3xl font-semibold text-slate-900">
            How It Works
          </h3>
          <p className="mb-6 text-lg text-slate-700">
            Our sentiment analysis algorithm processes the input text and
            assigns a sentiment score to it. The score indicates whether the
            sentiment of the text is positive, negative, or neutral. This
            analysis is based on natural language processing (NLP) techniques
            and machine learning models trained on large datasets.
          </p>
          <h3 className="mb-3 text-3xl font-semibold text-slate-900">
            Benefits
          </h3>
          <ul className="mb-6 text-lg list-disc list-inside text-slate-700">
            <li>
              Quickly detect and respond to customer emotions and feedback.
            </li>
            <li>
              Improve customer satisfaction by addressing pain points promptly.
            </li>
            <li>
              Gain insights into public sentiment about your brand or products.
            </li>
            <li>
              Make data-driven decisions to enhance your business strategy.
            </li>
          </ul>
          <p className="text-lg text-slate-700">
            Sentiment Checker is an essential tool for businesses, marketers,
            and anyone who wants to gain a deeper understanding of the emotions
            behind the text. Try it today and transform your text data into
            valuable insights!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
