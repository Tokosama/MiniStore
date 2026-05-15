import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown, MenuIcon, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
const navigation = [
  { name: "Acceuil", href: "/", current: true },
  { name: "WishList", href: "/WishList", current: false },
  { name: "Commandes", href: "/Orders", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const category = ["Tous", "Headphone", "Smartphone"];
const priceFilter = ["Croissant", "Decrpossant"];

export default function NavBar({
  setSelectedCategory,
  setSelectedPrice,
  searchInput,
  setSearchInput,
  setSearchProduct,
}) {
  const [displayCategory, setDisplayCategory] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <MenuIcon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <X
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="MiniShop"
                src="/icon.png"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 xl:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
                {/**Tri par Categorie*/}

                <div className="relative">
                  <button
                    className={classNames(
                      "text-gray-300 hover:bg-white/5 hover:text-white flex justify-center items-center",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                    onClick={() => {
                      setDisplayCategory(!displayCategory);
                      setDisplayPrice(false);
                      console.log(displayCategory);
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
                      className={` ${displayPrice ? "flex" : "hidden"}  flex-col absolute top-8 z-100 left-3 border bg-white rounded-lg  text-gray-300 `}
                    >
                      {priceFilter.map((item) => (
                        <button
                          className="py-1 px-4 hover hover:text-black"
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
                  <form class="max-w-56 mx-auto">
                    <label
                      for="search"
                      class="block  text-sm font-medium text-heading sr-only "
                    >
                      Recherchez un produit
                    </label>
                    <div class="relative min-w-sm">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          class="w-4 h-4 text-body"
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
                        class="block w-full px-3 py-3 ps-9 bg-white border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        placeholder="Recherchez un produit"
                        required
                        value={searchInput}
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                          console.log(searchInput);
                        }}
                      />
                      <button
                        type="button"
                        class="absolute end-1.5 bottom-1.5 text-white bg-[#453BDE] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NavLink
              to={"/backet"}
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <ShoppingCart
                aria-hidden="true"
                className="size-6 text-[#EA048E]"
              />
            </NavLink>

            {/* Profile dropdown */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="xl:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/*Search Bar  */}

          <div>
            <form class="max-w-ffull mx-auto">
              <label
                for="search"
                class="block  text-sm font-medium text-heading sr-only "
              >
                Recherchez un produit
              </label>
              <div class="relative ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-body"
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
                  class="block w-full px-3 py-3 ps-9 bg-white border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  placeholder="Recherchez un produit"
                  required
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    console.log(searchInput);
                  }}
                />
                <button
                  type="button"
                  class="absolute end-1.5 bottom-1.5 text-white bg-[#453BDE] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
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
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
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
                "text-gray-300 hover:bg-white/5 hover:text-white flex justify-center items-center",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}
              onClick={() => {
                setDisplayCategory(!displayCategory);
                setDisplayPrice(false);
                console.log(displayCategory);
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
                      setDisplayCategory(false);
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
                className={` ${displayPrice ? "flex" : "hidden"}  flex-col absolute top-8 z-100 left-3 border bg-white rounded-lg  text-gray-300 `}
              >
                {priceFilter.map((item) => (
                  <button
                    className="py-1 px-4 hover hover:text-black"
                    onClick={() => {
                      setSelectedPrice(item);
                      setDisplayPrice(false);
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
