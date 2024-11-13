import {
  storeLink,
  juicetwoItemImgSrc1,
  juicetwoItemImgSrc2,
  juicetwoItemImgSrc3,
  juicetwoItemImgSrc4,
  juicetwoItemName1,
  juicetwoItemName2,
  juicetwoItemName3,
  juicetwoItemName4,
  juicetwoItemPrice1,
  juicetwoItemPrice2,
  juicetwoItemPrice3,
  juicetwoItemPrice4,
} from "../../data/data";
const Category2 = () => {
  const items = [
    {
      id: 1,
      imgSrc: juicetwoItemImgSrc1,
      name: juicetwoItemName1,
      price: juicetwoItemPrice1,
    },
    {
      id: 2,
      imgSrc: juicetwoItemImgSrc2,
      name: juicetwoItemName2,
      price: juicetwoItemPrice2,
    },
    {
      id: 3,
      imgSrc: juicetwoItemImgSrc3,
      name: juicetwoItemName3,
      price: juicetwoItemPrice3,
    },
    {
      id: 4,
      imgSrc: juicetwoItemImgSrc4,
      name: juicetwoItemName4,
      price: juicetwoItemPrice4,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        Big & Bold Reds
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

export default Category2;
