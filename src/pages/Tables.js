import react from "react";
import { Link } from "react-router-dom";
import DashMenu from "./DashMenu";
import DashHeader from "./DashHeader";
import Footer from "./footer";
import '../styles/tables.css'
import AuthorsTable from "./tablescontent1";
import ProjectsTable from "./tableContent2";
import { img } from "framer-motion/client";

const Tables = () => {
    return (
        <div className="billing">
           <DashMenu/>
           <div className="tables_content">
               <DashHeader theme = "Tables"/>
                <AuthorsTable/>
                <ProjectsTable/>
               <Footer/>
           </div>
        </div>
    );
}

export default Tables;