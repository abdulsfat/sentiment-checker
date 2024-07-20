/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Contribute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div
        className="flex flex-col items-center justify-start h-[50vh]   lg:mx-auto"
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
          <h2 className="mb-4 text-4xl font-bold text-slate-900">Contribute</h2>
          <p className="mb-6 text-lg text-slate-700">
            We appreciate your interest in contributing to Sentiment Checker.
            Your contributions can help us improve and expand our tool to better
            serve our users.
          </p>
          <p className="text-lg text-slate-700">
            This page is currently under development. Please check back later
            for more information on how you can contribute to Sentiment Checker.
            Thank you for your patience and support!
          </p>
        </div>
      </div>
    </>
  );
};

export default Contribute;
