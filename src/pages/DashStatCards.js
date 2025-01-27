import React from "react";
import { IoWallet, IoGlobeOutline } from "react-icons/io5";
import { FaClipboardList, FaShoppingCart } from "react-icons/fa";
import '../styles/dashstatcards.css';

const stats = [
  {
    title: "Today's Money",
    value: "$53,000",
    percentage: "+55%",
    icon: <IoWallet />,
    percentageClass: "stat-percentage-positive", // Positive percentage class
  },
  {
    title: "Today's Users",
    value: "2,300",
    percentage: "+5%",
    icon: <IoGlobeOutline />,
    percentageClass: "stat-percentage-positive", // Positive percentage class
  },
  {
    title: "New Clients",
    value: "+3,052",
    percentage: "-14%",
    icon: <FaClipboardList />,
    percentageClass: "stat-percentage-negative", // Negative percentage class
  },
  {
    title: "Total Sales",
    value: "$173,000",
    percentage: "+8%",
    icon: <FaShoppingCart />,
    percentageClass: "stat-percentage-positive", // Positive percentage class
  },
];

const DashStatCards = () => {
  return (
    <div className="stat-card-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-info">
            <h4 className="stat-card-title">{stat.title}</h4>
            <div className="stat-card-value-container">
              <span className="stat-card-value">{stat.value}</span>
              <span className={`${stat.percentageClass}`}>
                {stat.percentage}
              </span>
            </div>
          </div>
          <div className="stat-card-icon">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default DashStatCards;
