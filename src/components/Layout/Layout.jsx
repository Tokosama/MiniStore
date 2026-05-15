import React from "react";
import NavBar from "../navBar";
import Footer from "../footer";

export default function Layout({
  children,
  setSelectedCategory,
  searchInput,
  setSearchInput,
  setSearchProduct,
  setSelectedPrice
}) {
  return (
    <>
      <div>
        <NavBar
          setSelectedCategory={setSelectedCategory}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchProduct={setSearchProduct}
          setSelectedPrice={setSelectedPrice}
        />
      </div>
      <main>
        {" "}
        <div className="">{children}</div>
      </main>
<div className="flex justify-center">

        <Footer />
</div>
    </>
  );
}
