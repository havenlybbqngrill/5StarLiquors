import {
  storeLink,
  juicefourItemImgSrc1,
  juicefourItemImgSrc2,
  juicefourItemImgSrc3,
  juicefourItemImgSrc4,
  juicefourItemName1,
  juicefourItemName2,
  juicefourItemName3,
  juicefourItemName4,
  juicefourItemPrice1,
  juicefourItemPrice2,
  juicefourItemPrice3,
  juicefourItemPrice4,
} from "../../data/data";

const Category4 = () => {
  const items = [
    {
      id: 1,
      imgSrc: juicefourItemImgSrc1,
      name: juicefourItemName1,
      price: juicefourItemPrice1,
    },
    {
      id: 2,
      imgSrc: juicefourItemImgSrc2,
      name: juicefourItemName2,
      price: juicefourItemPrice2,
    },
    {
      id: 3,
      imgSrc: juicefourItemImgSrc3,
      name: juicefourItemName3,
      price: juicefourItemPrice3,
    },
    {
      id: 4,
      imgSrc: juicefourItemImgSrc4,
      name: juicefourItemName4,
      price: juicefourItemPrice4,
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        Top Tequilas
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

export default Category4;
