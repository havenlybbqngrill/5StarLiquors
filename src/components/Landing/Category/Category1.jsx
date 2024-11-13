import {
  storeLink,
  juiceoneItemImgSrc1,
  juiceoneItemImgSrc2,
  juiceoneItemImgSrc3,
  juiceoneItemImgSrc4,
  juiceoneItemName1,
  juiceoneItemName2,
  juiceoneItemName3,
  juiceoneItemName4,
  juiceoneItemPrice1,
  juiceoneItemPrice2,
  juiceoneItemPrice3,
  juiceoneItemPrice4,
} from "../../data/data";

const Category1 = () => {
  const items = [
    {
      id: 1,
      imgSrc: juiceoneItemImgSrc1,
      name: juiceoneItemName1,
      price: juiceoneItemPrice1,
    },
    {
      id: 2,
      imgSrc: juiceoneItemImgSrc2,
      name: juiceoneItemName2,
      price: juiceoneItemPrice2,
    },
    {
      id: 3,
      imgSrc: juiceoneItemImgSrc3,
      name: juiceoneItemName3,
      price: juiceoneItemPrice3,
    },
    {
      id: 4,
      imgSrc: juiceoneItemImgSrc4,
      name: juiceoneItemName4,
      price: juiceoneItemPrice4,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        Easy Drinking
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={storeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-[70%] h-auto hover:scale-95 transition-transform duration-300 ease-in-out"
            />
            <div className="text-left">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category1;
