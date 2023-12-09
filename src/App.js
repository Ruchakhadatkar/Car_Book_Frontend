import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import { useAuthContext } from "./hooks/useAuthCotext";
import Navbar from "./components/Navbar/Navbar";
import ModelsPage from "./pages/Models/ModelsPage";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  const { user, dispatch } = useAuthContext();

  useEffect(()=>{
    const json = localStorage.getItem("user");

    dispatch({ type: "LOGIN", payload: json });
  },[user])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <ModelsPage/> */}
        <HomePage/>

        <Routes>
          {user ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/models" element={<ModelsPage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/login"}/>} />
              <Route path="/signup" element={<SignupPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
