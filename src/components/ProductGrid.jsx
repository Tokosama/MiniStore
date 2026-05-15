import { Heart } from "lucide-react";
import React from "react";
import ProductCard from "./ProductCard";
import { NavLink } from "react-router";

export default function ProductGrid({ filterProducts }) {
  return (
    <div>
      {/* ********* Products Section*/}

      <div className=" bg-[#F3F3F3] py-8 mx-auto max-w-sm sm:max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className=" text-center pb-5 text-lg font-semibold">
          Vos Meilleurs Deals du moments
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          {filterProducts.map((item) => (
            <NavLink to={`/product/${item.name}`}>
              <ProductCard item={item} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
