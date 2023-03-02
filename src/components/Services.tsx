export default function Services() {
  const products = [
    {
      title: "UI/UX Design",
      icon: "./services/UI.svg",
      text: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Web Developer",
      icon: "./services/Web.svg",
      text: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Marketing & SEO",
      icon: "./services/Marketing.svg",
      text: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Brand Identity",
      icon: "./services/Identity.svg",
      text: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="mt-40">
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-1/2 xl:relative">
          <div className="xl:w-10/12 xl:absolute xl:top-1/2 xl:-translate-y-1/2 space-y-10">
            <h3 className="text-first text-xl lg:text-3xl font-bold">
              Our Services
            </h3>
            <h1 className="lg:text-6xl text-3xl font-bold">
              We Create Best Digital Products
            </h1>
            <p className="lg:text-3xl text-xl text-justify">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a
              className="inline-block bg-first py-4 px-10 rounded-md text-xl font-semibold text-second"
              href="/"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="xl:w-1/2 mt-5 xl:mt-0">
          <div className="flex justify-center flex-row flex-wrap xl:justify-between gap-5 xl:gap-y-20">
            {products.map((product) => {
              return (
                <div className="w-72 shadow-md xl:even:relative xl:even:top-16 rounded-md px-5 py-10 space-y-3 bg-[#F5F5F5]">
                  <img src={product.icon} alt={product.title} />
                  <h1 className="text-3xl font-bold">{product.title}</h1>
                  <p>{product.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
