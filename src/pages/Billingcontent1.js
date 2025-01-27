import React from "react";
import "../styles/billingcontent1.css";
import Credit from '../images/Credit Card.png';
import { IoWallet } from "react-icons/io5";
import { FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import MasterCard from '../images/Mastercard Icon.png'

const BillingContent = () => {
    const invoices = [
        { date: "March, 01, 2020", id: "#MS-415646", amount: "$180", link: "PDF" },
        { date: "February, 10, 2021", id: "#RV-126749", amount: "$250", link: "PDF" },
        { date: "April, 05, 2020", id: "#FB-212562", amount: "$560", link: "PDF" },
        { date: "June, 25, 2019", id: "#QW-103578", amount: "$120", link: "PDF" },
        { date: "March, 01, 2019", id: "#AR-803481", amount: "$300", link: "PDF" },
      ];
    return (
      <div className="billingcontent">
        <div className="billingcontent-left">
                <div className="billing-left-top">
                    <div className="image-container"><img src= { Credit } ></img>

                    </div>
                    <div className="billing-salary">
                        <div className="b-container">
                            <div className="wallet-icon"><IoWallet className="b-icons"/></div>
                            <h6>Salary</h6>
                            <label>Belong Interactive</label>
                            <h6>+$2000</h6>
                        </div>
                    </div>
                    <div className="billing-salary">
                        <div className="b-container">
                            <div className="wallet-icon"><FaPaypal className="b-icons"/></div>
                            <h6>Paypal</h6>
                            <label>Freelance payment</label>
                            <h6>$455.00</h6>
                        </div>
                    </div>
                </div>
                <div className="billing-left-down">
                    <div className="payment">
                        <div className="payment-left">
                            Payment Method
                        </div>
                        <button className="payment-right">
                            ADD A NEW CARD
                        </button>
                    </div>
                    <div className="card-container"> 
                        <div className="card-item">
                            <div className="card-icon">
                                <img src={ MasterCard } className="img" style={{color:"#4318FF"}}/>
                            </div>
                            <span className="card-number">7812 2139 0823 XXXX</span>
                            <MdEdit/>
                        </div>
                        <div className="card-item">
                            <div className="card-icon">
                                <RiVisaLine className="img" style={{color:"#4318FF"}}/>
                            </div>
                            <span className="card-number">7812 2139 0823 XXXX</span>
                            <MdEdit/>
                        </div>
                    </div>
                </div>
        </div>
        {/* <div className="billingcontent-right"> */}
        <div className="invoices-container">
      <div className="header">
        <h3>Invoices</h3>
        <button className="view-all-button">VIEW ALL</button>
      </div>
      <div className="invoices-list">
        {invoices.map((invoice, index) => (
          <div key={index} className="invoice-item">
            <div className="invoice-info">
              <p className="invoice-date">{invoice.date}</p>
              <p className="invoice-id">{invoice.id}</p>
            </div>
            <div className="invoice-details">
              <p className="invoice-amount">{invoice.amount}</p>
              <a href="#" className="invoice-pdf">
                <IoDocumentText/>
                {invoice.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
        {/* </div> */}
      </div>
    );
  };
export default BillingContent;
