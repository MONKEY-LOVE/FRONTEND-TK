import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Sidebar from "./components/Sidebar";
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
        <Route path="/dashboard" element={
              <>
              <div>
                <div className="flex h-screen">
                   <Sidebar />
                 <div className="bg-gray-100	w-full">
                   <DashboardPage />
                 </div>
                </div>
              </div>
              </>
            } />
          <Route path="/" element={<LoginPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/register" element={
              <>
                <Sidebar />
                
                <RegisterPage />
              </>
            } />
          
            <Route path="/profile" element={
              <>
              <div>
                <div className="flex h-screen">
                   <Sidebar />
                 <div className="bg-gray-100	w-full">
                   <ProfilePage />
                 </div>
                </div>
              </div>
              </>
            } />
            <Route path="/token-creator" element={
              <>
              <div>
                <div className="flex h-screen">
                   <Sidebar />
                 <div className="bg-gray-100	w-full">
                   <TokenCreator />
                 </div>
                </div>
              </div>
              </>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;