import React from "react";
import "../styles/tablecontent2.css";
import { IoIosCheckmarkCircle,IoMdMore } from "react-icons/io";
import Icon1 from '../images/Icon (4).png';
import Icon2 from '../images/Icon (5).png';
import Icon3 from '../images/Icon (6).png';
import Icon4 from '../images/Icon (7).png';
import Icon5 from '../images/jira-3 1.png';

const projectsData = [
  {
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    status: "Working",
    completion: 60,
    logo: Icon1 ,
  },
  {
    company: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    completion: 10,
    logo: Icon2,
  },
  {
    company: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    completion: 100,
    logo: Icon3,
  },
  {
    company: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    completion: 100,
    logo: Icon4,
  },
  {
    company: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    completion: 25,
    logo: Icon5,
  },
];

const ProjectsTable = () => {
  return (
    <div className="projects-table-container">
      <h2>Projects</h2>
      <p className="completed-count">
        <IoIosCheckmarkCircle style={{fontSize:"18px"}}/>
         <label><b>30 done </b>this month</label>
        </p>
      <table className="projects-table">
        <thead>
          <tr>
            <th>COMPANIES</th>
            <th>BUDGET</th>
            <th>STATUS</th>
            <th>COMPLETION</th>
            <th></th>
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
              <td>{project.budget}</td>
              <td>{project.status}</td>
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
              <td className="menu"><IoMdMore style={{fontSize:"20px"}}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
