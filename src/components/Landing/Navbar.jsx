import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-3 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-12 z-50 py-3">
        <div className="flex justify-between items-center h-16 uppercase">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <h1 className="font-semibold text-xl md:text-3xl tracking-wide">
                5 Star Liquors{" "}
              </h1>
            </div>
          </div>

          {/* Uber Rating and Hamburger Icon for small screens */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Uber Rating */}
            <div className="flex items-center space-x-1 mr-4">
              <img src="/ubereats.png" alt="Uber Eats" className="h-7 w-7" />
              <span className="text-lg font-semibold text-black">4.7</span>
              <FaStar className="text-yellow-400 text-lg" />
            </div>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Right Section: Icons and Button for large screens */}
          <div className="hidden md:flex items-center space-x-6 ">
            <a
              href="https://www.google.com/maps/dir//238+New+York+Ave,+Jersey+City,+NJ+07307,+United+States/@40.7442717,-74.1273609,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25769d4489131:0xdeede511eb5376b0!2m2!1d-74.0450039!2d40.7443165?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-black hover:text-[#722F37] transition duration-200"
            >
              <FaMapMarkerAlt />
              <span className="ml-2">444 Tonnelle Ave, Jersey City</span>
            </a>

            <a
              href="tel:+12012221349"
              className="flex items-center text-black hover:text-[#722F37] transition duration-200"
            >
              <FaPhoneAlt />
              <span className="ml-2">+1 2012221349</span>
            </a>

            <div className="flex items-center space-x-2">
              <img src="/ubereats.png" alt="Uber Eats" className="h-7 w-7" />
              <span className="text-lg font-semibold text-black">4.7</span>
              <FaStar className="text-yellow-400 text-lg" />
            </div>

            <a
              href="https://www.doordash.com/convenience/store/30552790/?event_type=autocomplete&pickup=false"
              target="_blank"
              className="focus:outline-none"
            >
              <button className="bg-[#722F37] text-white px-6 py-2 rounded-md text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white hover:text-[#722F37] border border-transparent hover:border-[#722F37]">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          {/* Location Icon and Text */}
          <a
            href="https://www.google.com/maps/dir//238+New+York+Ave,+Jersey+City,+NJ+07307,+United+States/@40.7442717,-74.1273609,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25769d4489131:0xdeede511eb5376b0!2m2!1d-74.0450039!2d40.7443165?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 text-black hover:text-[#722F37] transition duration-200"
          >
            <FaMapMarkerAlt className="mr-2" />{" "}
            <span>555 Tonnelle Ave, Jersey City</span>
          </a>

          {/* Phone Icon and Text */}
          <a
            href="tel:201-555-1234"
            className="flex items-center mb-4 text-black hover:text-[#722F37] transition duration-200"
          >
            <FaPhoneAlt className="mr-2" /> <span>201-555-1234</span>
          </a>

          {/* Order Now Button */}
          <a
            href="https://www.doordash.com/convenience/store/30552790/?event_type=autocomplete&pickup=false"
            target="_blank"
            className="focus:outline-none"
          >
            <button className="bg-[#722F37] text-white w-full py-2 rounded-md text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white hover:text-[#722F37] border border-transparent hover:border-[#722F37]">
              Order Now
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
