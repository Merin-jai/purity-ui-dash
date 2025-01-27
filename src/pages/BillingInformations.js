import React from "react";
import "../styles/billingInformations.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoCalendarOutline, IoArrowDown, IoArrowUp, IoEllipsisHorizontal } from "react-icons/io5";

const BillingInformations = () => {
  const billingData = [
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      vat: "FRB1235476",
    },
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      vat: "FRB1235476",
    },
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      vat: "FRB1235476",
    },
  ];

  const groupedTransactions = {
    NEWEST: [
      { type: "expense", name: "Netflix", date: "27 March 2020, at 12:30 PM", amount: "-$2500" },
      { type: "income", name: "Apple", date: "27 March 2020, at 12:30 PM", amount: "+$2500" },
    ],
    YESTERDAY: [
      { type: "income", name: "Stripe", date: "26 March 2020, at 13:45 PM", amount: "+$800" },
      { type: "income", name: "HubSpot", date: "26 March 2020, at 12:30 PM", amount: "+$1700" },
      { type: "pending", name: "Webflow", date: "26 March 2020, at 05:00 AM", amount: "Pending" },
      { type: "expense", name: "Microsoft", date: "25 March 2020, at 16:30 PM", amount: "-$987" },
    ],
  };

  return (
    <div className="billing-container">
      {/* Billing Information */}
      <div className="billing-info">
        <h3>Billing Information</h3>
        {billingData.map((item, index) => (
          <div key={index} className="billing-card">
            <div className="billing-details">
              <h5>{item.name}</h5>
              <p>
                Company Name: <span>{item.company}</span>
              </p>
              <p>
                Email Address: <span>{item.email}</span>
              </p>
              <p>
                VAT Number: <span>{item.vat}</span>
              </p>
            </div>
            <div className="billing-actions">
              <button className="delete-button">
                <MdDelete /> DELETE
              </button>
              <button>
                <MdEdit /> EDIT
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="transactions-info">
        <div className="transactions-header">
          <h3>Your Transactions</h3>
          <div className="calendar-info">
            <IoCalendarOutline />
            <p className="transactions-date">23 - 30 March 2020</p>
          </div>
        </div>
        {Object.keys(groupedTransactions).map((category) => (
          <div key={category}>
            <div className="calendar-heading">{category}</div>
            <div className="transactions-list">
              {groupedTransactions[category].map((transaction, index) => (
                <div key={index} className="transaction-item">
                  <div className="transaction-icon">
                    {transaction.type === "income" && (
                      <div className="arrow-button green">
                        <IoArrowUp className="income-icon" />
                      </div>
                    )}
                    {transaction.type === "expense" && (
                      <div className="arrow-button red">
                        <IoArrowDown className="expense-icon" />
                      </div>
                    )}
                    {transaction.type === "pending" && (
                      <div className="arrow-button grey">
                        <span className="pending-icon">!</span>
                      </div>
                    )}
                  </div>
                  <div className="transaction-details">
                    <h5>{transaction.name}</h5>
                    <p>{transaction.date}</p>
                  </div>
                  <p className={`transaction-amount ${transaction.type}`}>{transaction.amount}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingInformations;
