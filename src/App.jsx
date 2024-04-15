import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  // Home,
  // Restaurants,
  // Distributors,
  // APManager,
  // CookbookSoftware,
  // ExpensesTracking,
  // InventoryManagement,
  // InvoiceManager,
  // MultiUnitsAndChains,
  // OrderManager,
  // PurchasingAndOrderManagement,
  // RecipeCoastingSoftware,
  // RestuarantVendorPayments,
  // RestaurantManagementSoftware,
  // ARManager,
  Plans,
  Login,
  LetsTalk,
  Blogs,
  BlogDetails,
  AccountingAndERPSytems,
  POS,
  AccountingAndERPSytemsBuyers,
  Ecommerce,
  IPAAS,
  AboutUs,
  NotFound,
  RequestADemo,
  Plans_2,
  PrivacyPolicy,
  TermsAndConditions,
} from "./pages";

const Home = React.lazy(() => import("./pages/home"));

const Restaurants = React.lazy(() => import("./pages/solutions/restaurants"));
const Distributors = React.lazy(() => import("./pages/solutions/distributors"));

const InvoiceManager = React.lazy(() =>
  import("./pages/products/restaurants/invoice_manager")
);
const OrderManager = React.lazy(() =>
  import("./pages/products/restaurants/order_manager")
);
const APManager = React.lazy(() =>
  import("./pages/products/restaurants/ap_manager")
);
const RestaurantManagementSoftware = React.lazy(() =>
  import("./pages/products/restaurants/restuarant_management_software")
);
const InventoryManagement = React.lazy(() =>
  import("./pages/products/restaurants/inventory_management")
);
const RecipeCoastingSoftware = React.lazy(() =>
  import("./pages/products/restaurants/recipe_coasting_software")
);
const RestuarantVendorPayments = React.lazy(() =>
  import("./pages/products/restaurants/restaurant_vendor_payments")
);
const PurchasingAndOrderManagement = React.lazy(() =>
  import("./pages/products/restaurants/purchasing_&_order_management")
);
const ExpensesTracking = React.lazy(() =>
  import("./pages/products/restaurants/expenses_tracking")
);
const MultiUnitsAndChains = React.lazy(() =>
  import("./pages/products/restaurants/multi_units_&_chains")
);
const CookbookSoftware = React.lazy(() =>
  import("./pages/products/restaurants/cookbook_software")
);
const ARManager = React.lazy(() =>
  import("./pages/products/distributors/ar_manager")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="request-a-demo" element={<RequestADemo />} />
          <Route path="distributors" element={<Distributors />} />
          <Route path="/a-p-manager" element={<APManager />} />
          <Route path="/cookbook-software" element={<CookbookSoftware />} />
          <Route path="/expenses-tracking" element={<ExpensesTracking />} />
          <Route
            path="/inventory-management"
            element={<InventoryManagement />}
          />
          <Route path="/invoice-manager" element={<InvoiceManager />} />
          <Route
            path="/multi-units-&-chains"
            element={<MultiUnitsAndChains />}
          />
          <Route path="/order-manager" element={<OrderManager />} />
          <Route
            path="/purchasing-&-order-management"
            element={<PurchasingAndOrderManagement />}
          />
          <Route
            path="/recipe-coasting-software"
            element={<RecipeCoastingSoftware />}
          />
          <Route
            path="/restaurant-vendor-payments"
            element={<RestuarantVendorPayments />}
          />
          <Route
            path="/restaurant-management-software"
            element={<RestaurantManagementSoftware />}
          />
          <Route path="/a-r-manager" element={<ARManager />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/plans" element={<Plans_2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
          <Route
            path="/accounting-&-e-r-p-systems-suppliers"
            element={<AccountingAndERPSytems />}
          />
          <Route path="/p-o-s" element={<POS />} />
          <Route
            path="/accounting-&-e-r-p-systems-buyers"
            element={<AccountingAndERPSytemsBuyers />}
          />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route
            path="/integration-platform-(i-paa-s-)-buyers"
            element={<IPAAS />}
          />
          <Route
            path="/integration-platform-(i-paa-s-)-suppliers"
            element={<IPAAS />}
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
