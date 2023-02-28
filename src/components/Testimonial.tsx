export default function Testimonial() {
  const clients = [
    {
      name: "Albert Flores",
      image: "./testimonial/person.png",
      company: "McDonald's",
      comment:
        "Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.",
    },
    {
      name: "Theresa Webb",
      image: "./testimonial/person.png",
      company: "L'Oreal",
      comment:
        "Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.",
    },
    {
      name: "Dianne Russell",
      image: "./testimonial/person.png",
      company: "Starbuck",
      comment:
        "Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="font-bold mx-auto text-center my-10 space-y-5">
        <h2 className="text-first text-3xl">Testimonial</h2>
        <h1 className="text-5xl">What Our Client's Say</h1>
        <p className="font-normal text-lg">
          Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent
          tristique enim lorem.
        </p>
      </div>
      <div>
        <div className="flex justify-between gap-3">
          {clients.map((client, index) => {
            return (
              <div
                key={index}
                className="max-w-md py-3 px-5 bg-white shadow-md rounded-md space-y-3"
              >
                <div className="flex gap-5 items-center">
                  <div>
                    <img src={client.image} alt={client.name} />
                  </div>
                  <div>
                    <h1 className="font-bold">{client.name}</h1>
                    <h2 className="opacity-80">{client.company}</h2>
                  </div>
                </div>
                <div className="text-justify">{client.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
