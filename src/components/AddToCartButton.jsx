import { useState } from "react";
import Spinner from "./Spinner";

export default function AddToCartButton({ addToBacket, item }) {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <button
      className=" transition-transform cursor-pointer duration-200 hover:scale-103 shadow-md rounded-lg bg-[#0A7D56] w-full  hover:bg-[#0A7D56]/80 text-white flex justify-center items-center  px-10 py-2"
      onClick={() => {
        setShowLoader(true);
        setTimeout(() => {
          setShowLoader(false);
          alert("Le produit a été ajouté  au panier");
        }, 2500);
        ( addToBacket(item));
      }}
    >
      {showLoader && <Spinner />}

      {!showLoader && <div>Ajouter au panier</div>}
    </button>
  );
}
