import DashMenu from "./DashMenu";
import DashHeader from "./DashHeader";
import Footer from "./footer";
import '../styles/Billing.css';
import BillingContent from "./Billingcontent1";
import BillingInformations from "./BillingInformations";

const Billing = () =>{
    return (
        <div className="billing">
            <DashMenu/>
            <div className="billing-content">
                <DashHeader theme="Billing"/>
                <div className="billing-content-body">
                    <BillingContent/>
                    <BillingInformations/>
                </div>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Billing;