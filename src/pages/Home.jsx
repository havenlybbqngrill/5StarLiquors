import Category1 from "../components/Landing/Category/Category1";
import Category2 from "../components/Landing/Category/Category2";
import Category3 from "../components/Landing/Category/Category3";
import Category4 from "../components/Landing/Category/Category4";
import Category5 from "../components/Landing/Category/Category5";
import Category6 from "../components/Landing/Category/Category6";
import Contact from "../components/Landing/Contact";
import HeroAndTopSellers from "../components/Landing/Hero";
import Highlight from "../components/Landing/Highlight";
import Navbar from "../components/Landing/Navbar";
import Reviews from "../components/Landing/Reviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroAndTopSellers />
      <Category1 />
      <Category2 />
      <Category3 />
      <Category4 />
      <Category5 />
      <Category6 />
      <Highlight />
      <Reviews />
      <Contact />
    </div>
  );
}
