import { useEffect, useState } from "react";

import { products } from "../../public/data/products";
import ProductGrid from "../components/ProductGrid";
import { CreditCard, Speech, Van } from "lucide-react";
import AdvantageCard from "../components/AdvantageCard";
import { CardPlacehoderSkeleton } from "../components/ProductCardSkeleton";
const advantageElement = [
  { title: "LIVRAISON RAPIDE", icon: <Van className="me-2" /> },
  { title: "PAIEMENT SECURISE", icon: <CreditCard className="me-2" /> },
  { title: "SUPPORT CLIENT 24H/24H", icon: <Speech className="me-2" /> },
];

export default function Home({
  selectedCategory,
  searchProduct,
  searchInput,
  selectedPrice,
  handleWishList,
}) {
  const [filterProducts, setFilterPoducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    function skeletonUpdate() {
      setShowSkeleton(true);
      console.log(showSkeleton);
      setTimeout(() => {
        setShowSkeleton(false);
      }, 5000);
      console.log(showSkeleton);
    }

    skeletonUpdate();
  }, []);

  useEffect(() => {
    function filterCategory() {
      if (selectedCategory == null || selectedCategory == "Tous") {
        setFilterPoducts([...products]);
      } else {
        const filterP = products.filter((item) => {
          return item.category == selectedCategory;
        });
        setFilterPoducts(filterP);
      }
      return filterProducts;
    }
    filterCategory();
  }, [selectedCategory]);

  useEffect(() => {
    function filterSearch() {
      if (!searchProduct) {
        setFilterPoducts([...products]);
      }

      if (searchInput === "") {
        setFilterPoducts([...products]);
      } else {
        const filterP = products.filter((item) => {
          return item.name == searchInput;
        });
        setFilterPoducts(filterP);
      }
      return filterProducts;
    }
    filterSearch();
  }, [searchProduct]);

  useEffect(() => {
    function filterPrice() {
      if (selectedPrice) {
        const filterP = products.sort((a, b) => a.price - b.price);
        setFilterPoducts(filterP);
      } else {
        const filterP = products.sort((a, b) => b.price - a.price);
        setFilterPoducts(filterP);
      }
      return filterProducts;
    }
    filterPrice();
  }, [selectedPrice]);

  // if (showSkeleton) {
  //   return <CardPlacehoderSkeleton />;
  // }
  return (
    <div className="">
      {/* ************************* Header Section */}
      {/* **** Banner presentation */}

      <div className="bg-[url('/src/assets/Banner-bg.jpg')]  relative bg-cover bg-center h-96 ">
        <div className="absolute bg-white/30 w-full h-full">
          <div className="font-display mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  h-full flex flex-col justify-center items-center  ">
            <img
              src="/minishop.png"
              alt=""
              className="w-[60%]"
            />
            <div className="text-2xl text-[#3629EB] font-semibold">
              Trouvez vos produits de rêve
            </div>
          </div>
        </div>
      </div>

      {/* **** Advantage presentation */}

      <div className="grid md:grid-cols-3 gap-3 py-7">
        {advantageElement.map((item) => (
          <AdvantageCard
            text={item.title}
            icon={item.icon}
          />
        ))}
      </div>

      {/* ********* Products Section*/}
      <ProductGrid
        filterProducts={filterProducts}
        handleWishList={handleWishList}
        showSkeleton={showSkeleton}
      />
    </div>
  );
}
