import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [logoPreview, setLogoPreview] = useState("/logo.png"); // Default logo
  const [uploadedLogo, setUploadedLogo] = useState(null); // Store the file
  const [logoUrl, setLogoUrl] = useState(""); // Store URL input
  const [phone, setPhone] = useState(""); // Store phone input
  const [email, setEmail] = useState(""); // Store email input

  const handleClose = () => {
    isAdmin ? navigate("/admin/home") : navigate("/home");
  };

  const handleSubscribe = () => {
    const formData = new FormData();
    formData.append("entry.948315531", phone); // Replace with actual entry ID for phone
    formData.append("entry.1892505791", email); // Replace with actual entry ID for email

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScCjQiuUsj7W3JPGpfR4_LBp3LQKCEhVl9Du95bTXkuZyn08g/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        toast.success("Thank you for subscribing!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          isAdmin ? navigate("/admin/home") : navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error submitting to Google Form:", error);
        toast.error("There was an error. Please try again later.");
      });
  };

  // Handle URL input change
  const handleLogoUrlChange = (e) => {
    setLogoUrl(e.target.value);
    setLogoPreview(e.target.value); // Update preview with URL
    setUploadedLogo(null); // Clear uploaded file when a URL is used
  };

  const handleUpload = () => {
    if (uploadedLogo || logoUrl) {
      console.log("Uploading logo:", uploadedLogo || logoUrl);
      toast.success("Logo uploaded successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('pop-bg2.png')`,
        }}
      >
        <div className="bg-black opacity-40 inset-0 absolute" />
      </div>

      <div className="relative bg-white rounded-md shadow-lg max-w-[450px] mx-auto flex flex-col items-center z-10 p-6">
        <AiOutlineClose
          className="w-8 h-8 md:text-black absolute top-2 right-2 cursor-pointer md:w-6 md:h-6 z-20"
          onClick={handleClose}
        />

        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={logoPreview} // Show preview if available
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        {isAdmin && (
          <div className="flex flex-col items-center space-y-1  ">
            <input
              type="text"
              placeholder="Enter image URL"
              value={logoUrl}
              onChange={handleLogoUrlChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#722F37]"
            />

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleUpload}
            >
              Upload Logo
            </button>
          </div>
        )}

        <p className="text-black text-xl text-center font-semibold">
          Join now and start earning rewards while staying informed on the
          latest offers!
        </p>

        <div className="w-full mt-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#722F37]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="w-full mt-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#722F37]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="bg-[#722F37] w-full rounded-sm px-6 py-2 font-medium leading-loose uppercase tracking-widest text-white mt-4 hover:bg-black"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>

        <p className="text-xs text-gray-600 mt-8 text-center md:max-w-[300px]">
          By signing up you agree to our Privacy Policy and our Terms of
          Service.
        </p>

        <div className="bottom-4 justify-center items-center flex space-x-2 pt-6">
          <a href="tel:(201) 222-1349" className="hover:underline">
            <div className="bg-black rounded-full p-2">
              <FaPhoneAlt className="w-4 h-4 text-white" />
            </div>
          </a>
          <a href="mailto:info@heavenlychicken.com" className="hover:underline">
            <div className="bg-black rounded-full p-2">
              <AiOutlineMail className="w-4 h-4 text-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
