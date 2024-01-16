import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Home,
  Restaurants,
  Distributors,
  APManager,
  CookbookSoftware,
  ExpensesTracking,
  InventoryManagement,
  InvoiceManager,
  MultiUnitsAndChains,
  OrderManager,
  PurchasingAndOrderManagement,
  RecipeCoastingSoftware,
  RestuarantVendorPayments,
  RestaurantManagementSoftware,
  ARManager,
  Plans,
  Login,
  LetsTalk,
} from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/solutions/restaurants" element={<Restaurants />} />
        <Route path="/solutions/distributors" element={<Distributors />} />
        <Route
          path="/products/restaurants/a-p-manager"
          element={<APManager />}
        />
        <Route
          path="/products/restaurants/cookbook-software"
          element={<CookbookSoftware />}
        />
        <Route
          path="/products/restaurants/expenses-tracking"
          element={<ExpensesTracking />}
        />
        <Route
          path="/products/restaurants/inventory-management"
          element={<InventoryManagement />}
        />
        <Route
          path="/products/restaurants/invoice-manager"
          element={<InvoiceManager />}
        />
        <Route
          path="/products/restaurants/multi-units-&-chains"
          element={<MultiUnitsAndChains />}
        />
        <Route
          path="/products/restaurants/order-manager"
          element={<OrderManager />}
        />
        <Route
          path="/products/restaurants/purchasing-&-order-management"
          element={<PurchasingAndOrderManagement />}
        />
        <Route
          path="/products/restaurants/recipe-coasting-software"
          element={<RecipeCoastingSoftware />}
        />
        <Route
          path="/products/restaurants/restaurant-vendor-payments"
          element={<RestuarantVendorPayments />}
        />
        <Route
          path="/products/restaurants/restaurant-management-software"
          element={<RestaurantManagementSoftware />}
        />
        <Route
          path="/products/restaurants/a-r-manager"
          element={<ARManager />}
        />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
