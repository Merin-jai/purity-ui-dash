import react from "react";
import { Link } from "react-router-dom";
import DashMenu from "./DashMenu";
import DashHeader from "./DashHeader";
import DashStat from "./DashStatCards";
import DashCard from "./DashCard2";
import DashboardCharts from "./Dashcard3";
import Dashboard4 from "./Dashcard4";
import Footer from "./footer";
import '../styles/Dashboard.css'
import { img } from "framer-motion/client";

const Tables = () => {
    return (
        <div className="billing">
           <DashMenu/>
           <div className="tables_content">
               <DashHeader theme = "Dashboard"/>
               <DashStat/>
               <DashCard/>
               <DashboardCharts/>
               <Dashboard4/>
               <Footer/>
           </div>
        </div>
    );
}

export default Tables;