import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Join = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("/pop.jpg"); // Default image
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubscribe = () => {
    isAdmin ? navigate("/admin/subscribe") : navigate("/subscribe");
  };

  const handleClose = () => {
    isAdmin ? navigate("/admin/home") : navigate("/home");
  };

  const handleUpload = () => {
    if (previewUrl) {
      // You can handle uploading the image to the backend here
      console.log("Image URL to upload:", previewUrl);
      setImageUrl(previewUrl);
      setPreviewUrl("");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/pop-bg.png')`,
        }}
      >
        <div className="bg-black opacity-40 inset-0 absolute" />
      </div>
      <div className="relative bg-white rounded-md shadow-lg w-11/12 max-w-4xl flex flex-col md:flex-row items-stretch z-10">
        <AiOutlineClose
          className="w-8 h-8 md:text-black absolute top-2 right-2 cursor-pointer md:w-6 md:h-6 z-20"
          onClick={handleClose}
        />
        <div className="relative flex-none w-full md:w-1/2 h-full">
          <img
            src={previewUrl || imageUrl}
            alt="Join Us"
            className="w-full h-[200px] md:h-[500px] object-cover rounded-sm"
          />
          {isAdmin && (
            <div className="absolute top-2 left-2  p-2 rounded ">
              <input
                type="text"
                value={previewUrl}
                onChange={(e) => setPreviewUrl(e.target.value)}
                placeholder="Paste image URL"
                className="p-1 border rounded mb-2 w-full"
              />

              <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Upload
              </button>
            </div>
          )}
        </div>
        <div className="flex-1 p-4 md:p-8 flex flex-col justify-center">
          <p className="text-black text-3xl text-center font-bold">
            Get New Offers
          </p>
          <p className="text-center text-gray-800 mt-3">
            Welcome to ShopName! Join us for refreshing, mouthwatering juices
            and smoothies.
          </p>
          <button
            className="bg-[#722F37] rounded-sm px-4 py-2 font-medium leading-loose uppercase tracking-widest text-white mt-5 hover:bg-black"
            onClick={handleSubscribe}
          >
            Join Today
          </button>
          <div className="relative pt-5 md:top-24 justify-center items-center flex space-x-2">
            <a href="tel:201-555-1234" className="hover:underline">
              <div className="bg-black rounded-full p-3">
                <FaPhoneAlt className="w-4 h-4 text-white" />
              </div>
            </a>
            <a
              href="mailto:info@heavenlychicken.com"
              className="hover:underline"
            >
              <div className="bg-black rounded-full p-3">
                <AiOutlineMail className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
