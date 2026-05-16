import { Heart } from "lucide-react";

export function CardPlacehoderSkeleton() {
  return (
    <div className="transition delay-150 duration-200 ease-in-out">
      <div className=" shadow-lg rounded-4xl animate-pulse">
        <div className=" bg-gray-300 rounded-t-4xl overflow-hidden px-2 pt-4 pb-4">
          <div className="h-56 rounded-xl  bg-gray-300"></div>
        </div>

        <div className="px-3 py-4 rounded-b-4xl bg-[##F3F3F3]">
          <div className="font-bold text-lg py-2 bg-gray-300 w-56 rounded-full"></div>
          <div className="rounded-sm  bg-white  w-22 py-2 my-1  text-sm px-1 ">
          </div>
          <div className=" py-2 mb-1 line-clamp-2 w-full bg-gray-300 rounded-full"></div>
          <div className=" py-2 line-clamp-2 w-44 bg-gray-300 rounded-full"></div>
          
          
          <div className="flex justify-between ">
            <div>
              <div className="text-gray-500 w-16 bg-gray-300 text-xs py-2 mt-1 rounded-full mb-[-3px] ">
                
              </div>
            </div>
            <button
              className="cursor-pointer shadow-md rounded-2xl flex justify-center items-center  bg-gray-300 py-1  px-2 "
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
                            <Heart className="text-white" />

            </button>
          </div>
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
