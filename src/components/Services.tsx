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
      <div className="flex">
        <div className="w-1/2 relative">
          <div className="w-10/12 absolute top-1/2 -translate-y-1/2 space-y-10">
            <h3 className="text-first text-3xl font-bold">Our Services</h3>
            <h1 className="text-6xl font-bold">
              We Create Best Digital Products
            </h1>
            <p className="text-3xl text-justify">
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
        <div className="w-1/2">
          <div className="flex flex-wrap justify-between gap-y-20">
            {products.map((product) => {
              return (
                <div className="w-72 shadow-md even:relative even:top-16 rounded-md px-5 py-10 space-y-3 bg-[#F5F5F5]">
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
