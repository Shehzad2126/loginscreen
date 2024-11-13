// import React from "react";
// import ResetPassword from "./pages/ResetPassword";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Dashboard from "./pages/Dashboard";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// App.js
// App.js
import React from "react";
import ResetPassword from "./pages/ResetPassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AccountDetails from "./pages/AccountDetails"; // Page for Step 1
import EmailVerification from "./pages/EmailVerification"; // Page for Step 2
import CreatePassword from "./pages/CreatePassword"; // Page for Step 3
import Welcome from "./pages/Welcome"; // Page for Step 4
import Dashboard from "./pages/Dashboard";

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
        <Route
          path="/signup/email-verification"
          element={<EmailVerification />}
        />{" "}
        <Route path="/signup/create-password" element={<CreatePassword />} />{" "}
        <Route path="/signup/welcome" element={<Welcome />} /> {/* Step 4 */}
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
