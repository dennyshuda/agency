export default function Project() {
  const projects = [
    {
      image: "./project/1.png",
    },
    {
      image: "./project/2.png",
    },
    {
      image: "./project/3.png",
    },
  ];

  return (
    <div className="mt-40">
      <div className="font-bold text-center my-10 space-y-5">
        <h2 className="text-first text-3xl">Featured Project</h2>
        <h1 className="text-5xl">The Works We Are Proud Of</h1>
      </div>
      <div className="flex overflow-scroll scroll whitespace-nowrap scrollbar-hide scroll-smooth gap-5">
        {projects.map((project, index) => {
          return <img key={index} src={project.image} alt="Project Image" />;
        })}
      </div>
    </div>
  );
}
