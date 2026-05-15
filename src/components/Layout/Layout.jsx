import NavBar from "../NavBar";
import Footer from "../footer";

export default function Layout({
  children,
  setSelectedCategory,
  searchInput,
  setSearchInput,
  setSearchProduct,
  setSelectedPrice,
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
        <div className="mb-12">{children}</div>
      </main>
      <div className="flex justify-center bg-[#292929]">
        <Footer />
      </div>
    </>
  );
}
