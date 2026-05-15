import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import { Heart } from "lucide-react";
import { products } from "../../public/data/products";
import ProductGrid from "../components/ProductGrid";
export default function Home({
  selectedCategory,
  searchProduct,
  searchInput,
  selectedPrice,
}) {
  console.log(selectedCategory);
  const [filterProducts, setFilterPoducts] = useState([]);

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

  return (
    <div className="">
      {/* ************************* Header Section */}
      {/* **** Banner presentation */}

      <div className="bg-[url('/src/assets/Banner-bg.jpg')]  relative bg-cover bg-center h-72 ">
        <div className="absolute bg-white/30 w-full h-full">
          {" "}
          <div className="font-display mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  h-full flex justify-center items-center  font-bold text-3xl text-bold">
            Trouvez le produit de vos reves sur notre Boutique
          </div>
        </div>
      </div>

      {/* **** Advantage presentation */}

      <div className="grid grid-cols-3 gap-4 py-3">
        <div className="text-center "> Livraison rapide</div>
        <div className="text-center  border-x "> Paiement securise</div>
        <div className="text-center ">Support client actif</div>
      </div>

      {/* ********* Products Section*/}
      <ProductGrid filterProducts={filterProducts} />
    </div>
  );
}
