import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProductListPage from "../pages/productPage/productListPage";
import MainLayout from "../components/layout/MainLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/products" element={<MainLayout><ProductListPage /></MainLayout>} />
        {/* <Route path="/catalogs" element={<CatalogPage/>}/>
            <Route path="/cart" element={<CartPage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter