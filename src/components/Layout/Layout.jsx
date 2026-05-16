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
    <div className="h-screen flex flex-col">
<div>
        <NavBar
          setSelectedCategory={setSelectedCategory}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchProduct={setSearchProduct}
          setSelectedPrice={setSelectedPrice}
        />
      </div>
      <main className="flex flex-col justify-center align-middle" >
        {" "}
        <div className=" 
        ">{children}</div>
      </main>
      <div className="mt-auto flex justify-center bg-[#292929]">
        <Footer />
      </div>
    </div>
      
    </>
  );
}
