// Module 
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

/*Components */
import { Index } from "./Components/Index";
import { ReportFound } from "./Components/ReportFoundForm";
import { ReportLost } from "./Components/ReportLost";
import { AdminLoginPage } from "./Components/AdminLogin";

export function App() {

  return (
    <>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report_found" element={<ReportFound/> } />
          <Route path="/report_lost" element={<ReportLost/> } />
          <Route path="/admin" element={<AdminLoginPage/> } />
        </Routes>
      </HashRouter>
    </>
  )
}

