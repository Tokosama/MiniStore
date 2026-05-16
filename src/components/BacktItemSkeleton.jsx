
export default function BacktItemSkeleton() {
  return (
    <div>
      <div className=" animate-pulse px-2 py-3 sm:py-8 sm:px-5 my-4 rounded-xl shadow-lg transition-transform duration-200 hover:scale-103">
        <div className="flex gap-2 py-2">
          <div className="w-28 h-20 bg-gray-300 rounded-xl"></div>

          <div className="px-2 w-full">
            <div className="text-lg font-semibold w-26 bg-gray-300 py-3 rounded-full mb-1"></div>
            <div className="rounded-full  bg-gray-300 w-16 px-1 py-2  "></div>{" "}
            <div className="flex mt-2 justify-between">
              <div className="w-20 bg-gray-300  mt-1 py-3 rounded-4xl"></div>

              <div className="w-20 bg-gray-300  mt-1 py-3 rounded-4xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
