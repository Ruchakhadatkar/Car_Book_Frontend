import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import { useAuthContext } from "./hooks/useAuthCotext";
import Navbar from "./components/Navbar/Navbar";
import ModelsPage from "./pages/Models/ModelsPage";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import ModelsInfoPage from "./pages/CarModels/ModelsInfoPage";
import BookingDetails from "./pages/BookingDetails/BookingDetailsPage";
import BookingDetailsPage from "./pages/BookingDetails/BookingDetailsPage";

function App() {
  const PrivateRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let auth = { token: user ? true : false };
    console.log(auth);
    return auth.token ? <Outlet /> : <Navigate to="/login" />;
  };

  const PublicRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let auth = { token: user ? true : false };
    console.log(auth);
    return !auth.token ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ModelsPage />} path="/models" />
          <Route element={<ModelsInfoPage />} path="/models/:id" />
          <Route element={<BookingDetailsPage/>} path="/bookingdetails" />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignupPage />} path="/signup" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
