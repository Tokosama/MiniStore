
export default function OrdersResume({ backetCount, backetTotal }) {
  return (
    <div>
      {/** Resume  de la commande*/}
      <div className="  rounded-xl mt-12 mb-5 py-3 shadow-2xl">
        <div className="mx-4 text-xl font-semibold">Facture</div>
        <div className="mx-4 text-lg relative ">
          Total panier{" "}
          <span
            className=" absolute right-1 ms-auto"
            st
          >
            {backetCount}
          </span>{" "}
        </div>
        <div className="mx-4 text-lg border-t border-gray-300 py-4 relative">
          Total :{" "}
          <span
            className=" absolute right-1 ms-auto"
            st
          >
            {backetTotal}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
