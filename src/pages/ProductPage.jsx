import React from "react";
import { useParams } from "react-router";
import { products } from "../../public/data/products";

export default function ProductPage({ backet, setBacket }) {
  const { id } = useParams();
  const product = products.filter((item) => {
    return item.name == id;
  });
  console.log(product);
  function addToBacket(product) {
    console.log("----------------------")
    setBacket([...backet, product])
    console.log(backet); 

  }

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
            <button
              className="border rounded-lg bg-[#0A7D56] hover:bg-green-500 text-white flex justify-center items-center hover:bg-[#0A7D56/5] px-10 py-2"
              onClick={() => {
                addToBacket(product[0]);
              }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
