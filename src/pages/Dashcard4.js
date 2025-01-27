import React from "react";
import "../styles/dashcard4.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import p4 from '../images/Elipse_5.png';//p4
import p2 from '../images/PersonPhoto14.png';
import P1 from '../images/Person Photo 16.png'; //p1
import p3 from '../images/Person Photo 23.png';//p3
import p5 from '../images/Person Photo 4.png';

const Dashboard = () => {
  const projectsData = [
    {
      company: "Chakra Soft UI Version",
      members: [
        P1,p2,p3,p4,p5
      ],
      budget: "$14,000",
      completion: 60,
      logo: "https://img.icons8.com/color/48/adobe-xd.png",
    },
    {
      company: "Add Progress Track",
      members: [
        P1,p2
      ],
      budget: "$3,000",
      completion: 10,
      logo: "https://img.icons8.com/color/48/google-ads.png",
    },
    {
      company: "Fix Platform Errors",
      members: [ P1,p2 ],
      budget: "Not set",
      completion: 100,
      logo: "https://img.icons8.com/color/48/slack.png",
    },
    {
      company: "Launch our Mobile App",
      members: [
        P1,p2,p3,p4
      ],
      budget: "$32,000",
      completion: 100,
      logo: "https://img.icons8.com/color/48/spotify.png",
    },
    {
      company: "Add the New Pricing Page",
      members: [
        P1,p2,p3,p4,p5
      ],
      budget: "$400",
      completion: 25,
      logo: "https://img.icons8.com/color/48/jira.png",
    },
    {
      company: "Redesign New Online Shop",
      members: [P1,p2],
      budget: "$7,600",
      completion: 40,
      logo: "https://img.icons8.com/color/48/figma.png",
    },
  ];

  const ordersData = [
    { type: "money", details: "$2400, Design changes", time: "22 DEC 7:20 PM" },
    { type: "order", details: "New order #4219423", time: "21 DEC 11:21 PM" },
    { type: "server", details: "Server Payments for April", time: "21 DEC 9:28 PM" },
    { type: "card", details: "New card added for order #3210145", time: "20 DEC 3:52 PM" },
    { type: "package", details: "Unlock packages for Development", time: "19 DEC 11:35 PM" },
    { type: "order", details: "New order #9851258", time: "18 DEC 4:41 PM" },
  ];

  return (
    <div className="dashboard4">
      {/* Projects Section */}
      <div className="projects-section">
        <h2>Projects</h2>
        <p className="completed-count">
                <IoIosCheckmarkCircle style={{fontSize:"18px"}}/>
                 <label><b>30 done </b>this month</label>
        </p>
        <table className="projects-table">
          <thead>
            <tr>
              <th>COMPANIES</th>
              <th>MEMBERS</th>
              <th>BUDGET</th>
              <th>COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr key={index}>
                <td>
                  <div className="company-info">
                    <img src={project.logo} alt={project.company} />
                    <span>{project.company}</span>
                  </div>
                </td>
                <td>
                  <div className="members">
                    {project.members.map((member, idx) => (
                      <img key={idx} src={member} alt="Member"  className="avatar"/>
                    ))}
                  </div>
                </td>
                <td>{project.budget}</td>
                <td>
                  <div className="completion">
                    <span>{project.completion}%</span>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders Section */}
      {/* <div className="orders-section">
        <h2>Orders Overview</h2>
        <p className="order-summary">+30% this month</p>
        <ul className="orders-list">
          {ordersData.map((order, index) => (
            <li key={index} className="order-item">
              <div className={`order-icon ${order.type}`}></div>
              <div className="order-details">
                <p className="order-description">{order.details}</p>
                <p className="order-time">{order.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Dashboard;
