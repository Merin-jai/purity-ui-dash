import React from "react";
import '../styles/DashMenu.css';
import { IoHome,IoStatsChart,IoCard,IoBuild,IoPerson,IoDocument,IoRocketSharp,IoHelpCircle } from "react-icons/io5";
function DashMenu() {

    return (
        <div className="dashmenu">
            <div className="dashmenu-logo">
                <img src={require('../images/logo-creative-tim-black.png')} alt="Logo" />
                <label>PURITY UI DASHBOARD</label>
            </div>
            <div className="dashmenu-nav">
                <a href="/dashboard" className="dash-nav-list dash-active">
                    <div className="nav-image">
                        <IoHome class="dash-icons"/>
                    </div>
                    <label>Dashboard</label>
                </a>
                <a href="/tables" className="dash-nav-list">
                    <div className="nav-image">
                        <IoStatsChart  class="dash-icons"/>
                    </div>
                    <label>Tables</label>
                </a>
                <a href="/billing" className="dash-nav-list">
                    <div className="nav-image">
                        <IoCard  class="dash-icons"/>
                    </div>
                    <label>Billing</label>
                </a>
                <div className="dash-nav-list">
                    <div className="nav-image">
                        <IoBuild class="dash-icons"/>
                    </div>
                    <label>RTL</label>
                </div>
                <div class="dash-account">ACCOUNT PAGES</div>
                <a href="/profile" className="dash-nav-list">
                    <div className="nav-image">
                        <IoPerson class="dash-icons"/>
                    </div>
                    <label>Profile</label>
                </a>
                <a href="/signin" className="dash-nav-list">
                    <div className="nav-image">
                        <IoDocument  class="dash-icons"/>
                    </div>
                    <label>Sign In</label>
                </a>
                <a href="/" className="dash-nav-list">
                    <div className="nav-image">
                        <IoRocketSharp  class="dash-icons"/>
                    </div>
                    <label>Sign Up</label>
                </a>
            </div>
            <div className="dashmenu-footer">
                <div className="dash-rect">
                    <div className="nav-image">
                        <IoHelpCircle  class="dash-icons"/>
                    </div>
                    <div className="dash-help">Need help?</div>
                    <div className="dash-help-content">Please check our docs</div>
                    <div className="dash-help-button">DOCUMENTATION</div>
                </div>
            </div>
        </div>
    );
};

export default DashMenu;