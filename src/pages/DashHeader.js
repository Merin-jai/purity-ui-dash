import React from "react";
import { FaSearch} from "react-icons/fa";
import { IoPerson,IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import '../styles/DashHeader.css';
function DashHeader({ theme }){
    return (
        <header className={`${theme}`}>
           <div className="dashheader-main">
               <div className="dashheader-left">
                    <div>Pages <span>/ {`${theme}`}</span></div>
                    <div class="theme">{`${theme}`}</div>
               </div>
               <div className="dashheader-right">
                    <div className="dash-search">
                       <span style={{color:"black"}}><FaSearch></FaSearch></span>
                       <input type="search" placeholder="Type here..."/>
                    </div>
                    <div className="dash-header-icons">
                        <aside>
                          <IoPerson/>
                          <a  href="/signin">Sign In</a>
                        </aside>
                        <IoMdSettings/>
                        <IoNotifications/>
                    </div>
               </div>
           </div>
        </header>
      );
};

export default DashHeader;