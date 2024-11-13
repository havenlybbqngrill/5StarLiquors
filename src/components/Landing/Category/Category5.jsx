import {
  storeLink,
  juicefiveItemImgSrc1,
  juicefiveItemImgSrc2,
  juicefiveItemImgSrc3,
  juicefiveItemImgSrc4,
  juicefiveItemName1,
  juicefiveItemName2,
  juicefiveItemName3,
  juicefiveItemName4,
  juicefiveItemPrice1,
  juicefiveItemPrice2,
  juicefiveItemPrice3,
  juicefiveItemPrice4,
} from "../../data/data";
const Category5 = () => {
  const items = [
    {
      id: 1,
      imgSrc: juicefiveItemImgSrc1,
      name: juicefiveItemName1,
      price: juicefiveItemPrice1,
    },
    {
      id: 2,
      imgSrc: juicefiveItemImgSrc2,
      name: juicefiveItemName2,
      price: juicefiveItemPrice2,
    },
    {
      id: 3,
      imgSrc: juicefiveItemImgSrc3,
      name: juicefiveItemName3,
      price: juicefiveItemPrice3,
    },
    {
      id: 4,
      imgSrc: juicefiveItemImgSrc4,
      name: juicefiveItemName4,
      price: juicefiveItemPrice4,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        Mexican Beer
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

export default Category5;
