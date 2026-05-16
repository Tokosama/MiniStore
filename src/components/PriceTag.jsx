
export default function PriceTag({price}) {
  return (
    <div>
      <div className=" font-bold text-xl text-[#EE048D]">
        {price} <span className="text-sm text-black/50">XOF</span>{" "}
      </div>
    </div>
  );
}
