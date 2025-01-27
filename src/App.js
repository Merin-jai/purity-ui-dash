import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp';
// import Header from './pages/header';
// import Footer from './pages/footer';
import SignIn from './pages/SignIn';
import Profile from './pages/profile';
// import DashMenu from './pages/DashMenu';
// import DashHeader from './pages/DashHeader';
import Dashboard from './pages/Dashboard';
import Projects from './pages/projects';
import Billing from './pages/Billing';
// import BillingInformations from './pages/BillingInformations';
import Tables from './pages/Tables';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/dashmenu" element={<DashMenu />} /> */}
        {/* <Route path="/header" element={<DashHeader />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Projects/>}/>
        <Route path="/billing" element={<Billing/>}/>
        {/* <Route path="/billingcontent" element={<BillingInformations/>}/> */}
        <Route path="/tables" element={<Tables/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
