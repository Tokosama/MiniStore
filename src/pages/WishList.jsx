import { useEffect, useState } from "react";
import Header from "../components/Header";
import WishListItem from "../components/WishListItem";
import WishListItemSkeleton from "../components/WishListItemSkeleton";
import NotElement from "../components/NotElement";

export default function WishList({
  wishList,
  addToBacket,
  removeFromWishList,
}) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    function skeletonUpdate() {
      setShowSkeleton(true);
      console.log(showSkeleton);
      setTimeout(() => {
        setShowSkeleton(false);
      }, 2000);
      console.log(showSkeleton);
    }

    skeletonUpdate();
  }, []);

  return (
    <div className="py-8 mx-auto  sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      <Header text={"Ma WishList"} />

      {/**Element de la WishList */}

      {wishList.length <= 0 && (
        <NotElement text="Vous n'avez pas encore de produits favoris" />
      )}

      {wishList.length > 0 && (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:gap-5">
          {wishList.map((item) => {
            if (showSkeleton) {
              return <WishListItemSkeleton />;
            } else {
              return (
                <WishListItem
                  item={item}
                  addToBacket={addToBacket}
                  removeFromWishList={removeFromWishList}
                />
              );
            }
          })}
          {wishList.length == 0 && <div> wishlist vide </div>}
        </div>
      )}
    </div>
  );
}
