export default function Team() {
  const teams = [
    {
      name: "Wade Warren",
      position: "Marketing SEO Specialist",
      image: "./team/team1.png",
    },
    {
      name: "Robert Fox",
      position: "Professional UI UX Designer",
      image: "./team/team2.png",
    },
    {
      name: "Jenny Wilson",
      position: "Product Manager & Web Designer",
      image: "./team/team3.png",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-4/12">
          <div className="font-bold my-10 space-y-5 text-center xl:text-left">
            <h2 className="text-first lg:text-3xl text-xl">Team Work</h2>
            <h1 className="lg:text-5xl text-3xl">Our Professional Team</h1>
            <p className="xl:text-justify font-normal xl:w-10/12">
              Fusce dignissim blandit justo, eget elementum risus tristique.
              Nunc lacus lacus, sit amet accumsan est pulvinar non.
            </p>
          </div>
        </div>
        <div className="xl:w-8/12">
          <div className="flex flex-wrap gap-5 justify-center xl:justify-between">
            {teams.map((team, index) => {
              return (
                <div key={index} className="bg-white rounded-md shadow-md">
                  <div className="relative">
                    <img
                      className="rounded-md"
                      src={team.image}
                      alt={team.name}
                    />
                    <div className="absolute flex items-center gap-3 -bottom-4 right-3">
                      <a
                        href="#"
                        className="bg-white rounded-full p-2 shadow-md"
                      >
                        <img src="./team/icons/fb.svg" alt="" />
                      </a>
                      <a
                        href="#"
                        className="bg-white rounded-full p-2 shadow-md"
                      >
                        <img src="./team/icons/ig.svg" alt="" />
                      </a>
                      <a
                        href="#"
                        className="bg-white rounded-full p-2 shadow-md"
                      >
                        <img src="./team/icons/in.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h1 className="font-bold">{team.name}</h1>
                    <h2 className="opacity-80 text-sm">{team.position}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
