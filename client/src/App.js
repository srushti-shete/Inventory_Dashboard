import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Login from "scenes/login";
import Signup from "scenes/signup";
import { useAuthContext } from 'hooks/useAuthContext'
import About from 'scenes/about'

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const { user } = useAuthContext()
  // console.log(user)
  return (
    <div className="App">
       <BrowserRouter>
       <ThemeProvider theme = {theme}>
          <CssBaseline/>
          <Routes>
            <Route path="/" element={user ? <Layout /> : <Navigate to="/login" />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
            <Route path="/about-us" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
