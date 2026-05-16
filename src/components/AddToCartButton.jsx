
export default function AddToCartButton({addToBacket,item}) {
  return (
    <button
      className=" transition-transform cursor-pointer duration-200 hover:scale-103 shadow-md rounded-lg bg-[#0A7D56] w-full  hover:bg-[#0A7D56]/80 text-white flex justify-center items-center  px-10 py-2"
      onClick={() => { console.log("yessssss") ,addToBacket(item)}}
    >
      Ajouter au panier
    </button>
  );
}
