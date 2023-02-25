export default function Price() {
  const plans = [
    {
      title: "Save Plan",
      price: "$19",
      desc: ["SEO Audits", "UI UI Audits", "Management Site"],
    },
    {
      title: "Super Plan",
      price: "$79",
      desc: [
        "SEO Audits",
        "UI UI Audits",
        "Management Site",
        "Free Prototype UI UX",
        "Support 24x7 Day",
      ],
    },
    {
      title: "Expert Plan",
      price: "$19",
      desc: [
        "SEO Audits",
        "UI UI Audits",
        "Management Site",
        "Free Prototype UI UX",
        "1 Free Build Dev Apps",
        "Support 24x7 Day",
      ],
    },
  ];
  return (
    <div className="mt-40">
      <div className="font-bold mx-auto w-1/2 text-center my-10 space-y-5">
        <h2 className="text-first text-3xl">Pricing Plans</h2>
        <h1 className="text-5xl">The Best Solutions for Our Clients</h1>
        <p className="font-normal text-lg">
          Fusce dignissim blandit justo, eget elementum risus tristique. Nunc
          lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique
          enim lorem.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-y-10">
        {plans.map((plan, index) => {
          return (
            <div
              className="w-96 h-[35rem] py-10 flex flex-col justify-between shadow-2xl text-center rounded-md"
              key={index}
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">{plan.title}</h2>
                <h1 className="text-6xl font-bold">{plan.price}</h1>
                {plan.desc.map((item, index) => {
                  return (
                    <li className="text-first text-2xl" key={index}>
                      <span className="text-black">{item}</span>
                    </li>
                  );
                })}
              </div>
              <div className="my-5">
                <a
                  className="inline-block bg-first py-4 px-20 rounded-md text-xl font-semibold text-second"
                  href="/"
                >
                  Buy Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
