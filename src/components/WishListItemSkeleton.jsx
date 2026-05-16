export default function WishListItemSkeleton() {
  return (
    <div>
      <div>
        <div className=" animate-pulse transition-transform duration-200 hover:scale-103 relative bg-gray-100 px-2 py-3 sm:py-8 sm:px-5 my-4 rounded-xl shadow-lg">
          <div className="flex gap-2">
            <div className="w-28 h-18 bg-gray-300 rounded-xl">
              
            </div>
            <div className="px-2 w-full">
              <div className="text-lg font-semibold w-26 bg-gray-300 py-3 rounded-full mb-1"></div>
              <div className="rounded-full  bg-gray-300 w-16 px-1 py-2  ">
              </div>{" "}
              <div className="w-20 bg-gray-300  mt-1 py-3 rounded-4xl"></div>
            </div>
          </div>
          <div className=" mt-3 w-full py-5 rounded-xl bg-gray-300 ">
            
          </div>
          <button
            className=" rounded-full absolute w-7 bg-gray-300 h-7 top-4 right-4 cursor-pointer "
          >
          </button>
        </div>
      </div>
      {/* <div className="mt-6 w-96 animate-pulse">
        <div className="relative grid h-56 place-items-center rounded-xl bg-gray-300"></div>
        <div className="p-4">
          <div className="mb-4 h-3 w-56 rounded-full bg-gray-300" />
          <div className="mb-2 h-2 w-full rounded-full bg-gray-300" />
          <div className="mb-2 h-2 w-full rounded-full bg-gray-300" />
          <div className="mb-2 h-2 w-72 rounded-full bg-gray-300" />
        </div>

        <div className="flex justify-between p-4">
          <div className="h-8 w-24 rounded-lg bg-gray-300"></div>
          <div className="h-8 w-24 rounded-lg bg-gray-300"></div>
        </div>
      </div> */}
    </div>
  );
}
