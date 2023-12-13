import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const { user, dispatch } = useAuthContext();
  const ProtectedRoute = ({ element, path }) => {
    console.log(user);
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <BookingDetailsPage />
      <ModelsPage />
      {/* <ModelsInfoPage/> */}
      <Routes>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to="/" />}
        />

        {/* protected routes  */}
        {/* <Route
            path="/"
            element={<ProtectedRoute element={<HomePage />} path="/" />}
          />
          <Route
            path="/models"
            element={<ProtectedRoute element={<ModelsPage />} path="/models" />}
          /> */}
        <Route
          path="/models/:id"
          element={ProtectedRoute(<ModelsInfoPage />)}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
