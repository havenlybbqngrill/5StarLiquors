import "../Landing/marquee.css";
import {
  name1,
  name2,
  name3,
  name4,
  price1,
  price2,
  price3,
  price4,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
} from "../data/data";
const dishes = [
  { id: 1, name: name1, price: price1, imageUrl: imageUrl1 },
  { id: 2, name: name2, price: price2, imageUrl: imageUrl2 },
  { id: 3, name: name3, price: price3, imageUrl: imageUrl3 },
  { id: 4, name: name4, price: price4, imageUrl: imageUrl4 },
];

const TopSellers = () => {
  return (
    <div className="w-full bg-white text-black px-6 font-forum overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...dishes, ...dishes].map((dish) => (
          <div
            key={dish.id}
            className="flex flex-col bg-white p-3  mx-2 min-w-[200px] md:min-w-[250px] lg:min-w-[300px]"
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-[70%] h-auto hover:scale-95 transition-transform duration-300 ease-in-out"
            />
            <h3 className="text-lg font-semibold mt-2 truncate">{dish.name}</h3>

            <p className="text-lg">{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
