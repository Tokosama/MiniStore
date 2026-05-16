import { useParams } from "react-router";
import { products } from "../../public/data/products";
import AddToCartButton from "../components/AddToCartButton";
import PriceTag from "../components/PriceTag";

export default function ProductPage({ backet, setBacket, addToBacket }) {
  const { id } = useParams();
  const product = products.filter((item) => {
    return item.name == id;
  });

  return (
    <div className=" py-8 mx-auto max-w-md sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 sm:gap-4 mt-4">
        <div className=" bg-[#F3F3F3] ">
          <div>
            <div className=" my-4">
              <img
                className="relative transition-transform duration-200 hover:scale-105 h-56  sm:h-96  mx-auto rounded-xl overflow-hidden"
                src={product[0].images[0]}
                alt=""
              />
            </div>
            <div className="">
              <div className=" my-4 ">
                {product[0].images.map((item) => {})}
                <img
                  className="relative border  h-16  mx-auto py-1 overflow-hidden"
                  src={product[0].images[0]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" py-8  relative ">
          <div className="text-3xl font-bold my-2">{product[0].name}</div>
          <span className="rounded-sm border   text-sm px-1 mt-8 ">
            {product[0].category}{" "}
          </span>
          <div className=" pt-3 sm:py-6">{product[0].description}</div>

          {product[0].stock == 0 && (
            <div className=" py-6 mb-auto text-[#E85A64]">stocke épuisé</div>
          )}
          {product[0].stock && (
            <div className=" py-6 mb-auto text-sm  sm:text-lg">
              Il n'en reste que
              <span className=" text-xl font-bold">
                {" "}
                <span
                  className={`${product[0].stock > 4 ? "text-[#0A7D56]" : "text-[#E85A64]"}`}
                >
                  {product[0].stock}
                </span>
              </span>{" "}
            </div>
          )}

          <div className="grid md:grid-cols-2  bottom-5  ">
            <div className="mb-5">
              <div className="text-gray-500 text-xs mb-[-3px] ">PRICE</div>
              <PriceTag price={product[0].price} />
            </div>

            <AddToCartButton
              addToBacket={addToBacket}
              item={product[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
