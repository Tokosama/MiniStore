import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown, MenuIcon, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const navigation = [
  { name: "Acceuil", href: "/" },
  { name: "WishList", href: "/WishList" },
  // { name: "Commandes", href: "/Orders" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const category = ["Tous", "Headphone", "Smartphone"];
const priceFilter = ["Croissant", "Décroissant"];
export default function NavBar({
  setSelectedCategory,
  setSelectedPrice,
  searchInput,
  setSearchInput,
  setSearchProduct,
}) {
  const navigate = useNavigate();
  const [displayCategory, setDisplayCategory] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="relative bg-[#292929] shadow-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className=" cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-90 group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <MenuIcon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden text-[#1131FF]"
              />
              <X
                aria-hidden="true"
                className=" hidden size-6 group-data-open:block text-[#FF0084]"
              />
            </DisclosureButton>
          </div>
          <div className="flex  flex-1 items-center justify-center xl:items-stretch xl:justify-start">
            <NavLink
              to={"/"}
              className="flex transition-transform duration-200 hover:scale-110  active:scale-90 shrink-0 items-center"
            >
              <img
                alt="MiniShop"
                src="/icon.png"
                className="h-12 w-auto"
              />
            </NavLink>
            <div className="hidden sm:ml-6 xl:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.href === location.pathname
                        ? "  bg-linear-to-r from-[#1131FF] to-[#FF0084] text-white"
                        : "transition-transform duration-200 active:scale-90 text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                {/**Tri par Categorie*/}

                <div className="relative">
                  <button
                    className={classNames(
                      "cursor-pointer text-gray-300 hover:bg-white/5 hover:text-white flex justify-center items-center",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                    onClick={() => {
                      setDisplayCategory(!displayCategory);
                      setDisplayPrice(false);
                    }}
                  >
                    Categories <ChevronDown className="size-5 pt-1" />
                    <div
                      className={` ${displayCategory ? "flex" : "hidden"}  flex-col absolute top-8 z-100 left-3 border bg-white rounded-lg  text-gray-300 `}
                    >
                      {category.map((item) => (
                        <button
                          className="py-1 px-4 hover hover:text-black"
                          onClick={() => {
                            setSelectedCategory(item);
                            navigate("/");
                          }}
                        >
                          {" "}
                          {item}
                        </button>
                      ))}
                    </div>
                  </button>
                </div>

                {/**Tri par prix */}
                <div className="relative">
                  <button
                    className={classNames(
                      "text-gray-300 cursor-pointer hover:bg-white/5 hover:text-white flex justify-center items-center",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                    onClick={() => {
                      setDisplayPrice(!displayPrice);
                      setDisplayCategory(false);
                      navigate("/");
                    }}
                  >
                    Trie par prix <ChevronDown className="size-5 pt-1" />
                    <div
                      className={` ${displayPrice ? "flex" : "hidden"}  flex-col absolute top-8 z-100 left-3 border bg-white rounded-lg  text-gray-300 `}
                    >
                      {priceFilter.map((item) => (
                        <button
                          className="py-1 cursor-pointer px-4 hover hover:text-black"
                          onClick={() => {
                            setSelectedPrice(item);
                          }}
                        >
                          {" "}
                          {item}
                        </button>
                      ))}
                    </div>
                  </button>
                </div>

                {/*Search Bar  */}

                <div>
                  <form className="max-w-56 mx-auto">
                    <label
                      for="search"
                      className="block  text-sm font-medium text-heading sr-only "
                    >
                      Recherchez un produit
                    </label>
                    <div className="relative min-w-sm">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-body"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full px-3 py-3 ps-9 bg-white border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        placeholder="Recherchez un produit"
                        required
                        value={searchInput}
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                        }}
                      />
                      <button
                        type="button"
                        className=" cursor-pointer absolute end-1.5 bottom-1.5 text-white bg-[#453BDE] transition-transform duration-200 hover:scale-110 active:scale-90 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
                        onClick={() => {
                          setSearchProduct(true);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute transition-transform duration-200 hover:scale-110 md:hover:scale-120 active:scale-90 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NavLink
              to={"/backet"}
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <ShoppingCart
                aria-hidden="true"
                className="size-6 text-[#EA048E]"
              />
            </NavLink>
          </div>
        </div>
      </div>

      <DisclosurePanel className="xl:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/*Search Bar  */}

          <div>
            <form className="max-w-ffull mx-auto">
              <label
                for="search"
                className="block  text-sm font-medium text-heading sr-only "
              >
                Recherchez un produit
              </label>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-body"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full px-3 py-3 ps-9 bg-white border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  placeholder="Recherchez un produit"
                  required
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="cursor-pointer absolute end-1.5 bottom-1.5 text-white bg-[#453BDE]  transition-transform duration-200 hover:scale-110 active:scale-90 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
                  onClick={() => {
                    setSearchProduct(true);
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.href === location.pathname
                  ? " transition-transform duration-200  active:scale-90 bg-linear-to-r from-[#1131FF] to-[#FF0084] text-white"
                  : " transition-transform duration-200  active:scale-90 text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {/**Tri par Categorie*/}

          <div className="relative">
            <button
              className={classNames(
                "text-gray-300 cursor-pointer  active:scale-90 hover:bg-white/5 hover:text-white flex justify-center items-center",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}
              onClick={() => {
                setDisplayCategory(!displayCategory);
                setDisplayPrice(false);
              }}
            >
              Categories <ChevronDown className="size-5 pt-1" />
              <div
                className={` ${displayCategory ? "flex" : "hidden"}  flex-col absolute top-8 z-100 left-3 border bg-white rounded-lg  text-gray-300 `}
              >
                {category.map((item) => (
                  <button
                    className=" cursor-pointer active:scale-90 py-1 px-4 hover hover:text-black"
                    onClick={() => {
                      setSelectedCategory(item);
                      setDisplayCategory(false);
                      navigate("/");
                    }}
                  >
                    {" "}
                    {item}
                  </button>
                ))}
              </div>
            </button>
          </div>

          {/**Tri par prix */}
          <div className="relative">
            <button
              className={classNames(
                "text-gray-300 hover:bg-white/5 hover:text-white flex justify-center items-center",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}
              onClick={() => {
                setDisplayPrice(!displayPrice);
                setDisplayCategory(false);
              }}
            >
              Trie par prix <ChevronDown className="size-5 pt-1" />
              <div
                className={` ${displayPrice ? "flex" : "hidden"} transition-transform duration-200 hover:scale-110 active:scale-90 flex-col absolute top-8 z-100 left-3 border bg-white rounded-lg  text-gray-300 `}
              >
                {priceFilter.map((item) => (
                  <button
                    className="transition-transform duration-200 hover:scale-110 active:scale-90 py-1 px-4 hover hover:text-black"
                    onClick={() => {
                      setSelectedPrice(item);
                      setDisplayPrice(false);
                      navigate("/");
                    }}
                  >
                    {" "}
                    {item}
                  </button>
                ))}
              </div>
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
