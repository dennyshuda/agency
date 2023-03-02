export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 order-2 lg:order-none flex flex-col justify-between py-10">
        <div className="lg:w-10/12 space-y-5">
          <h3 className="bg-first inline-block font-bold rounded-full lg:text-2xl px-7 py-1">
            Digital Manager
          </h3>
          <h1 className="lg:text-6xl text-3xl font-bold">
            Digital Products For Business
          </h1>
          <p className="lg:text-3xl text-justify">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="space-x-5 space-y-5 text-center lg:text-left mt-20">
          <a
            className="inline-block bg-first py-4 px-10 rounded-md text-xl font-semibold text-second"
            href="/"
          >
            Get Started
          </a>

          <span className="font-bold block lg:inline-block">OR</span>
          <a
            className="lg:inline-block block text-first underline font-bold text-2xl underline-offset-8"
            href="/"
          >
            Watch Video
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 order-1 lg:order-none">
        <div className="text-right relative mr-3">
          <img
            className="inline-block"
            src="./hero/hero-image.png"
            alt="Hero Image"
          />
          <img
            className="absolute top-0 z-10"
            src="./hero/subhero-image1.png"
            alt=""
          />
          <img
            className="absolute -right-9 bottom-0 z-10"
            src="./hero/subhero-image2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
