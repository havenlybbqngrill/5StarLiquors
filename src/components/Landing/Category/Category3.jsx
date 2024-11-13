import {
  storeLink,
  juicethreeItemImgSrc1,
  juicethreeItemImgSrc2,
  juicethreeItemImgSrc3,
  juicethreeItemImgSrc4,
  juicethreeItemName1,
  juicethreeItemName2,
  juicethreeItemName3,
  juicethreeItemName4,
  juicethreeItemPrice1,
  juicethreeItemPrice2,
  juicethreeItemPrice3,
  juicethreeItemPrice4,
} from "../../data/data";

const Category3 = () => {
  const items = [
    {
      id: 1,
      imgSrc: juicethreeItemImgSrc1,
      name: juicethreeItemName1,
      price: juicethreeItemPrice1,
    },
    {
      id: 2,
      imgSrc: juicethreeItemImgSrc2,
      name: juicethreeItemName2,
      price: juicethreeItemPrice2,
    },
    {
      id: 3,
      imgSrc: juicethreeItemImgSrc3,
      name: juicethreeItemName3,
      price: juicethreeItemPrice3,
    },
    {
      id: 4,
      imgSrc: juicethreeItemImgSrc4,
      name: juicethreeItemName4,
      price: juicethreeItemPrice4,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        Vodka Vibes
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
            <div key={item.id}>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-[70%] h-auto hover:scale-95 transition-transform duration-300 ease-in-out"
              />
              <div className="text-left">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category3;
