export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-5">
      <div className="flex items-center gap-3">
        <img className="w-10" src="./logo.svg" alt="Agency Logo" />
        <h1 className="font-extrabold text-3xl">Agency</h1>
      </div>
      <div className="space-x-5 text-2xl font-semibold">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Service</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </div>
      <div className="text-xl font-semibold text-second">
        <a className="bg-first py-4 px-5 rounded-md" href="/">
          Get Started
        </a>
      </div>
    </nav>
  );
}
