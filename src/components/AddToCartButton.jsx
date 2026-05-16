
export default function AddToCartButton({addToBacket,item}) {
  return (
    <button
      className="border rounded-lg bg-[#0A7D56] w-full hover:bg-green-500 text-white flex justify-center items-center hover:bg-[#0A7D56/5] px-10 py-2"
      onClick={() => { console.log("yessssss") ,addToBacket(item)}}
    >
      Ajouter au panier
    </button>
  );
}
