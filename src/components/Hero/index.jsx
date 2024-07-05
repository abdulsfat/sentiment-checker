const Hero = () => {
  return (
    <>
      <div className="p-5 ">
        <div
          className="flex items-center justify-start h-screen p-16 bg-center rounded-[4rem]"
          style={{
            backgroundImage: "url(/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="mb-16 mt-5 font-medium tracking-[-0.5rem] text-slate-900 text-9xl">
              Sentiment <br /> Analysis <br />
              Checker
            </h2>
            <p className="text-2xl text-slate-900 ">
              Use sentiment analysis to quickly detect feelings and pain points.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;