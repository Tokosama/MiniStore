import Header from "../components/Header";
import WishListItem from "../components/WishListItem";

export default function WishList({
  wishList,
  addToBacket,
  removeFromWishList,
}) {
  console.log(wishList);
  return (
    <div className="py-8 mx-auto  sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      <Header text={"Ma WishList"} />

      {/**Element de la WishList */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {wishList.length > 0 && (
          wishList.map((item) => (
            <WishListItem
              item={item}
              addToBacket={addToBacket}
              removeFromWishList={removeFromWishList}
            />
          )))}
        {(wishList.length == 0 && <div> wishlist vide </div>)}
      </div>
    </div>
  );
}
