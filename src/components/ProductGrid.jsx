import ProductCard from "./ProductCard";
import { NavLink } from "react-router";
import Header from "./Header";
import { CardPlacehoderSkeleton } from "./ProductCardSkeleton";
import NotElement from "./NotElement";

export default function ProductGrid({
  filterProducts,
  handleWishList,
  showSkeleton,
  wishList,
}) {
  return (
    <div className=" bg-[#F3F3F3] pb-12 ">
      {/* ********* Products Section*/}

      <div className="  py-8 mx-auto max-w-lg sm:max-w-7xl px-2 sm:px-6 lg:px-8">
        {filterProducts.length <= 0 && (
          <NotElement text={"Oups.... Aucun Produit n'est disponible."} />
        )}
        {filterProducts.length > 0 && (
          <>
            {" "}
            <Header text="Vos Meilleurs Deals du Moment " />
            <div className="transition delay-150 duration-200 ease-in-out grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-12">
              {filterProducts.map((item) => {
                if (showSkeleton) {
                  return <CardPlacehoderSkeleton />;
                } else {
                  return (
                    <NavLink
                      className={
                        "transition-transform duration-300 hover:scale-103  active:scale-90"
                      }
                      to={`/product/${item.name}`}
                    >
                      <ProductCard
                        item={item}
                        handleWishList={handleWishList}
                        wishList={wishList}
                      />
                    </NavLink>
                  );
                }
              })}
            </div>
          </>
        )}{" "}
      </div>
    </div>
  );
}
