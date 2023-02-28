import Layout from "./Layout";

export default function Footer() {
  return (
    <div className="bg-second text-white">
      <Layout>
        <div className="relative bottom-20 flex gap-5 bg-yellow-400 py-10 px-14 rounded-xl">
          <div className="w-5/12 space-y-5 font-bold">
            <h3 className="bg-yellow-500 py-1 px-5 text-xs rounded-full inline-block">
              Subscribe To Our Email
            </h3>
            <h1 className="text-5xl">For Latest News & Updates</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
          </div>
          <div className="w-7/12 flex items-center">
            <div className="relative w-full">
              <input
                className="focus:outline-none placeholder:text-white placeholder:text-center rounded-full w-full bg-yellow-500 py-5 px-10"
                type="email"
                placeholder="Enter Your Email Address..."
              />
              <div className="absolute right-0 top-1/2 bg-yellow-300 p-5 rounded-full -translate-y-1/2">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.29167 14.5L1.375 27.625L27.625 14.5L1.375 1.375L4.29167 14.5ZM4.29167 14.5L15.9583 14.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-5">
          <div className="w-1/3">
            <div className="flex gap-3 items-center">
              <img src="./logo.svg" alt="Agency Logo" />
              <h1 className="font-bold text-2xl">Agency</h1>
            </div>
            <p>Copyright © 2021 By Depu</p>
          </div>
          <div className="w-1/3">
            <h1 className="font-bold text-2xl">Information Guide</h1>
            <p className="font-bold">Info Inquires Product</p>
            <p>info@agency.co.id</p>
          </div>
          <div className="w-1/3">
            <h1 className="font-bold text-2xl">Want to say hi?</h1>
            <p className="font-bold">General Inquires</p>
            <p>support@agency.co.id</p>
          </div>
          <div className="w-1/3">
            <h1 className="font-bold text-2xl">Find us on social media.</h1>
            <p className="font-bold">Social Media</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
