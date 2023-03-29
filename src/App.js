import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Topnavbar from "./components/Topnavbar";
import SideBar from "./components/Sidebar/SideBar";

import Login from "./components/Login";
import Dashboardpage from "./pages/Dashboardpage";
import Topnavbar from "./components/Topnavbar";
import { User } from "./components/Master/User";
import MyCustomers from "./pages/MyCustomers";
import MyNotification from "./pages/MyNotification";
import MyPerformance from "./pages/MyPerformance";
import MyPlan from "./pages/MyPlan";
import RetailerInformation from "./pages/RetailerInformation";
import SalesPerformance from "./pages/SalesPerformance";
import QuestionairSurvey from "./pages/QuestionairSurvey";
import PublicForum from "./pages/PublicForum";
import Databse from "./pages/Databse";
import IndustryMap from "./pages/IndustryMap";
import Account from "./components/MyCustomer/Account";

// import { getLocalStorage } from "./utilities/storage";


function App() {




  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Topnavbar />

        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboardpage />} />
            <Route path="/MyCustomers" element={<MyCustomers />} />
            <Route path="/MyCustomers/Account" element={<Account />} />
            <Route path="/MyNotification" element={<MyNotification />} />
            <Route path="/MyPerformance" element={<MyPerformance />} />
            <Route path="/MyPlan" element={<MyPlan />} />
            <Route path="/RetailerInformation" element={<RetailerInformation />} />
            <Route path="/SalesPerformance" element={<SalesPerformance />} />
            <Route path="/QuestionairSurvey" element={<QuestionairSurvey />} />
            <Route path="/PublicForum" element={<PublicForum />} />
            <Route path="/Databse" element={<Databse />} />
            <Route path="/TheIndustryMap" element={<IndustryMap />} />

            <Route path="/master/user" element={<User />} />

        
            <Route path="*" element={<Dashboardpage />} />

          
          </Routes>
        </SideBar>
      </Router>
  );
}

export default App;
