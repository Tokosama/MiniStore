import { useParams } from "react-router";
import { products } from "../../public/data/products";
import AddToCartButton from "../components/AddToCartButton";

export default function ProductPage({ backet, setBacket, addToBacket }) {
  const { id } = useParams();
  const product = products.filter((item) => {
    return item.name == id;
  });
  console.log(product);

  return (
    <div className="bg-[#F3F3F3] py-8 mx-auto max-w-sm sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border">
          <div>
            <div className=" my-4">
              <img
                className="relative   h-96  mx-auto rounded-xl overflow-hidden"
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
        <div className="border py-8 px-4 relative">
          <div className="text-3xl font-bold my-2">{product[0].name}</div>
          <span className="rounded-sm border   text-sm px-1 mt-8 ">
            {product[0].category}{" "}
          </span>
          <div className=" py-6">{product[0].description}</div>
          <div className=" py-6 mb-auto">
            Il ne reste que{" "}
            <span className=" text-xl font-bold">{product[0].stock}</span>{" "}
            produit
          </div>

          <div className="grid sm:grid-cols-2 sm:absolute bottom-5 ">
            <div>
              <div className="text-gray-500 text-xs mb-[-3px] ">PRICE</div>
              <div className=" font-bold text-xl">{product[0].price} Xof</div>
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
