import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Orders from "./pages/Orders";
import Backet from "./pages/Backet";
import Layout from "./components/Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/"
            element={<Home />}
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
            element={<Backet />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
