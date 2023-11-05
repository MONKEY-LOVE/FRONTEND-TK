import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/Navbar";
import TokenCreator from "./pages/TokenCreator";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/register" element={
              <>
                <Navbar />
                <RegisterPage />
              </>
            } />
            <Route path="/dashboard" element={
              <>
                <Navbar />
                <DashboardPage />
              </>
            } />
            <Route path="/profile" element={
              <>
                <Navbar />
                <ProfilePage />
              </>
            } />
            <Route path="/token-creator" element={
              <>
                <Navbar />
                <TokenCreator />
              </>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;