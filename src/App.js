import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AccountDetails from "./pages/AccountDetails";
import EmailVerification from "./pages/EmailVerification";
import CreatePassword from "./pages/CreatePassword";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import VerifyOTP from "./pages/VerifyOTP";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/signup/account-details"
          element={<AccountDetails />}
        />{" "}
        <Route path="/signup/:email/:token" element={<EmailVerification />} />{" "}
        <Route path="/signup/create-password" element={<CreatePassword />} />{" "}
        <Route path="/signup/welcome" element={<Welcome />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
