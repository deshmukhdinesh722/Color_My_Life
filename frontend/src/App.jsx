import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminFeatures from "./pages/admin-view/features"
import AdminOrders from "./pages/admin-view/orders"
import AdminProducts from "./pages/admin-view/products"
import UserPageLayout from "./components/user-page-view/layout"
import NotFound from "./pages/Notfound"
import AppHome from "./pages/user-page-view/home"
import HomeCheckout from "./pages/user-page-view/checkout"
import ShopAccount from "./pages/user-page-view/account"
import HomeListing from "./pages/user-page-view/listing"
import CheckAuth from "./components/common/checkAuth"
import UnAuth from "./pages/unauth-page"
import { useDispatch, useSelector } from "react-redux"
import { checkAuthUser } from "./store/authSlice"
import AdminLogout from "./pages/auth/logout"
import UserPackage from "./pages/user-page-view/package"
import AdminPackage from "./pages/admin-view/package"
import GdPackage from "./pages/admin-view/gdPackage"
import SmphPackage from "./pages/admin-view/smphPackage"
import DaPackage from "./pages/admin-view/daPackage"
import MainPackage from "./pages/admin-view/mainPackage"
import PaypalReturn from "./pages/user-page-view/paypalReturn"
import PaymentCancel from "./pages/user-page-view/paymentCancel"
import PaymentSuccess from "./pages/user-page-view/paymentSuccess"
import ContactUs from "./pages/user-page-view/contact"
import AdminQuatation from "./pages/admin-view/quatation"


function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useSelector(state => state.auth);

  useEffect(() => {
      dispatch(checkAuthUser());
  }, [dispatch]);

  if (isLoading) {
      return <div>Loading...</div>; // Show a loader while checking auth
  }

  return (
      <>
          <div>
              <h1>Jay Shree Ram</h1>
              <Routes>
                  <Route path="/auth" element={
                      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                          <AuthLayout />
                      </CheckAuth>
                  }>
                      <Route path='login' element={<Login />} />
                      <Route path='register' element={<Register />} />
                  </Route>

                  <Route path="/admin" element={
                      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                          <AdminLayout />
                      </CheckAuth>
                  }>
                      <Route path='dashboard' element={<AdminDashboard />} />
                      <Route path='features' element={<AdminFeatures />} />
                      <Route path='order' element={<AdminOrders />} />
                      <Route path='products' element={<AdminProducts />} />
                      <Route path='logout' element={<AdminLogout/>} />
                      <Route path='package' element={<AdminPackage/>} />
                      <Route path='gdPackage' element={<GdPackage/>} />
                      <Route path='smphPackage' element={<SmphPackage/>} />
                      <Route path='daPackage' element={<DaPackage/>} />
                      <Route path='mainPackage' element={<MainPackage/>} />
                      <Route path='quatation' element={<AdminQuatation/>} />


                  </Route>

                  <Route path="/user-page" element={
                      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                          <UserPageLayout />
                      </CheckAuth>
                  }>
                      <Route path='home' element={<AppHome />} />
                      <Route path='checkout' element={<HomeCheckout />} />
                      <Route path='contact' element={<ContactUs />} />
                      <Route path='account' element={<ShopAccount />} />
                      <Route path='listing' element={<HomeListing />} />
                      <Route path='package' element={<UserPackage />} />
                      <Route path='paypal-return' element={<PaypalReturn />} />
                      <Route path='paypal-cancel' element={<PaymentCancel />} />
                      <Route path='payment-success' element={<PaymentSuccess />} />




                  </Route>

                  <Route path="*" element={<NotFound />} />
                  <Route path="/unauth" element={<UnAuth />} />
              </Routes>
          </div>
      </>
  );
}

export default App
