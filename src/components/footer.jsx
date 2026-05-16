
export default function Footer() {
  return (
    <div className="w-7xl px-2 sm:px-6 lg:px-8 sm:mx-3 text-white rounded-base shadow-xs  rounded-xl border-default m-4">
      <div className="  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse transition-transform duration-300 hover:scale-110 active:scale-90"
          >
            <img
              src="/icon.png"
              className="w-56"
              alt="MiniStore Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6"
              >
                A Propos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">
          © 2026{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
          >
            MiniStore
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
