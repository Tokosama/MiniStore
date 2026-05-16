import { useEffect, useState } from "react";

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
    const saved = localStorage.getItem("backet");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishList, setWishList] = useState(() => {
    const saved = localStorage.getItem("wishList");
    return saved ? JSON.parse(saved) : [];
  });

  //Fonction du backet
  function addToBacket(product) {

    const tempBacket = [...backet];
    const checkIndex = tempBacket.findIndex(
      (item) => item.name == product.name,
    );

    if (checkIndex != -1) {
      tempBacket[checkIndex] = {
        ...tempBacket[checkIndex],
        quantity: tempBacket[checkIndex].quantity + 1,
      };
    } else {
      tempBacket;
      tempBacket.push({ ...product, quantity: 1 });
    }
    setBacket(tempBacket);
  }
  function removeFromBacket(product) {
    const tempBacket = [...backet];
    const checkIndex = tempBacket.findIndex(
      (item) => item.name == product.name,
    );

    tempBacket[checkIndex] = {
      ...tempBacket[checkIndex],
      quantity: tempBacket[checkIndex].quantity + -1,
    };

    if (tempBacket[checkIndex].quantity <= 0) {
      tempBacket.splice(checkIndex, 1);
    }

    setBacket(tempBacket);
  }

  useEffect(() => {
    localStorage.setItem("backet", JSON.stringify(backet));
  }, [backet]);

  //Fonction de la wishList

  function handleWishList(product) {
    const tempWishList = [...wishList];
    const checkIndex = tempWishList.findIndex(
      (item) => item.name == product.name,
    );

    if (checkIndex == -1) {
      tempWishList;
      tempWishList.push({ ...product, quantity: 1 });
    } else {
      tempWishList.splice(checkIndex, 1);
    }
    setWishList(tempWishList);
  }
  function removeFromWishList(product) {
    const tempWishList = [...wishList];
    
    const checkIndex = tempWishList.findIndex(
      (item) => item.name == product.name,
    );
    
    if (checkIndex != -1) {
      tempWishList.splice(checkIndex, 1);
    }

    setWishList(tempWishList);
  }

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

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
                handleWishList={handleWishList}
                wishList={wishList}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                backet={backet}
                setBacket={setBacket}
                addToBacket={addToBacket}
                
              />
            }
          />

          <Route
            path="/WishList"
            element={
              <WishList
                handleWishList={handleWishList}
                wishList={wishList}
                addToBacket={addToBacket}
                removeFromWishList={removeFromWishList}
              />
            }
          />
          <Route
            path="/Orders"
            element={<Orders />}
          />
          <Route
            path="/Backet"
            element={
              <Backet
                backet={backet}
                addToBacket={addToBacket}
                removeFromBacket={removeFromBacket}
              />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
