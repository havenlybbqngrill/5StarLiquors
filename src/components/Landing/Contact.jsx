const Contact = () => {
  return (
    <div className="relative bg-white text-black py-20 font-forum" id="contact">
      {/* Subscribe Section */}
      <div className="relative text-center mb-8 md:mb-12 z-20">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <div className="w-28 h-[2px] bg-[#722F37] mb-4"></div>
        </div>
      </div>

      {/* Info Boxes  */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 px-4 md:px-16 max-w-[1200px] mx-auto z-20">
        {/* First Box */}
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mb-4">
            555 Tonnelle Ave. Jersey City 07307
          </p>
          <h3 className="text-xl font-semibold">Phone No</h3>
          <p className="mb-4">+12012221349</p>
          <h3 className="text-xl font-semibold">Email</h3>
          <p>heavenlydunkirk@aol.com</p>
        </div>

        {/* Second Box */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p className="font-medium text-lg mb-2">
            Monday - Saturday:{" "}
            <span className="text-black font-normal">10am - 10pm</span>
          </p>
          <p className="font-medium text-lg">
            Sunday: <span className="text-black font-normal">11am - 9pm</span>
          </p>
        </div>

        {/* Third Box */}
        <div className="md:ml-12">
          <h3 className="text-xl font-semibold mb-2">Get New & Offers</h3>
          <ul className="space-y-2 mb-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
          <div className="flex md:justify-center mb-6 md:mr-20 lg:mr-0">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 outline-none bg-white text-black border border-[#722F37]"
            />
            <button className="bg-[#722F37] text-white px-4 py-2 font-medium leading-loose uppercase tracking-widest hover:text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
