import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import ReservationsPage from "./pages/ReservationsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import StaffLoginPage from "./pages/StaffLoginPage";
import StaffDashboard from "./pages/StaffDashboard";
import DineInOrderPage from "./pages/DineInOrderPage";
import CareersPage from "./pages/CareersPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/order" element={<OrderOnlinePage />} />
            <Route path="/dine-in" element={<DineInOrderPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/staff" element={<StaffLoginPage />} />
            <Route path="/staff/dashboard" element={<StaffDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;