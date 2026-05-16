export default function AdvantageCard({ text, icon }) {
  return (
    <div>
      <div className="text-center py-2 flex justify-center   bg-[#d6dbd2] text-black shadow-lg my-1  rounded-lg mx-2 transition-transform duration-200 hover:scale-102  ">
        {" "}
        {icon} {text}
      </div>
    </div>
  );
}
