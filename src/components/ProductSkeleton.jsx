export default function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className=" py-8 mx-auto max-w-md sm:max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 sm:gap-4 mt-4">
          <div className=" bg-[#F3F3F3] ">
            <div>
              <div className=" my-4 h-56  sm:h-96">
                <img
                  className="relative transition-transform duration-200 hover:scale-105 h-56  sm:h-96  mx-auto rounded-xl overflow-hidden"
                  alt=""
                />
              </div>
              <div className=" flex justify-center gap-3">
                <div className=" my-4 h-16  w-16  bg-white rounded-xl"></div>
                            <div className=" my-4 h-16  w-16  bg-white rounded-xl"></div>

                <div className=" my-4 h-16  w-16  bg-white rounded-xl"></div>

              </div>
            </div>
          </div>
          <div className=" py-8  relative ">
            <div className="text-3xl font-bold my-2 w-96 bg-gray-300 py-6 rounded-full "></div>
            <div className="rounded-full   w-26 bg-gray-300 py-3   text-sm px-1 mt-4 "></div>
            <div className=" pt-3 sm:py-22  bg-gray-300  rounded-lg  mt-8"></div>
            <div className=" py-6 mb-auto text-[#E85A64] rounded-full  w-56 mt-8 bg-gray-300"></div>

            <div className="grid md:grid-cols-2  bottom-5  ">
              <div className="mb-5">
                <div className="text-gray-500 text-xs mb-[-3px] rounded-full w-44 mt-4 bg-gray-300 py-4 "></div>
              </div>
              <div className="bg-gray-300 py-4 rounded-xl"></div>
            </div>
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
