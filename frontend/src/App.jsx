import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import Register from "./pages/register/register";
import SignIn from "./pages/signIn/signIn";
import BusinessForm from "./pages/businessForm/businessForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/businessForm" element={<BusinessForm />} />
      </Routes>
    </BrowserRouter>
  );
}
