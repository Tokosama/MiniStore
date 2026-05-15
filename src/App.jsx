import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Orders from "./pages/Orders";
import Backet from "./pages/Backet";
import Layout from "./components/Layout/Layout";
import ProductPage from "./pages/ProductPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchProduct, setSearchProduct] = useState(false);
  const [backet, setBacket] = useState(() => {
    const ;
  });
  return (
    <>
      <Layout
        setSelectedCategory={setSelectedCategory}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchProduct={setSearchProduct}
        setSelectedPrice={setSelectedPrice}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedCategory={selectedCategory}
                selectedPrice={selectedPrice}
                searchInput={searchInput}
                searchProduct={searchProduct}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                backet={backet}
                setBacket={setBacket}
              />
            }
          />

          <Route
            path="/WishList"
            element={<WishList />}
          />
          <Route
            path="/Orders"
            element={<Orders />}
          />
          <Route
            path="/Backet"
            element={<Backet backet={backet} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
