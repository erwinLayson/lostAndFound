// Module 
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

/*Components */
import { Index } from "./Components/Index";
import { ReportFound } from "./Components/ReportFoundForm";
import { ReportLost } from "./Components/ReportLost";
import { AdminLoginPage } from "./Components/AdminLogin";
import { AdminDashboard } from "./Components/admin/AdminDashboard";
import { ProtectedRouted } from "./Components/utility/ProtectedRoutes";

export function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report_found" element={<ReportFound/> } />
          <Route path="/report_lost" element={<ReportLost/> } />
          <Route path="/admin" element={<AdminLoginPage/> } />
          <Route path="/admin/dashboard" element={
              <ProtectedRouted>
                <AdminDashboard />
              </ProtectedRouted>
           } />
        </Routes>
      </HashRouter>
    </>
  )
}

