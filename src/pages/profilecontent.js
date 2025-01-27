import React, { useState } from 'react';
import '../styles/profilecontent.css'; 
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import P1 from '../images/P1.png';
import P2 from '../images/P2.png';
import P3 from '../images/P3.png';
import P4 from '../images/P5.png';

const Dashboard = () => {
    const [rememberMe, setRememberMe] = useState(false);
        
            const toggleRememberMe = () => {
                setRememberMe(!rememberMe);
            };
    return (
      <div className="dashboard">
        {/* Platform Settings */}
        <div className="dashboard-section platform-settings">
          <h3 className="section-title">Platform Settings</h3>
          <div className="settings-group">
            <h4 className="group-title">ACCOUNT</h4>
            <div className="setting-item">
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span>Email me when someone follows me</span>
            </div>

            <div className="setting-item">
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span>Email me when someone answers on my post</span>
            </div>

            <div className="setting-item">
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span>Email me when someone mentions me</span>
            </div>

          </div>

          <div className="settings-group">
            <h4 className="group-title">APPLICATION</h4>

            <div className="setting-item">
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span> New launches and projects</span>
            </div>

            <div className="setting-item">
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span> Monthly product updates</span>
            </div>

            <div className="setting-item">
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
                <span>Subscribe to newsletter</span>
            </div>

          </div>
        </div>
  
        {/* Profile Information */}
        <div className="dashboard-section profile-info">
          <h3 className="section-title">Profile Information</h3>
          <p className="profile-description">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of qeuality).
          </p>
          <div className="profile-details">
            <p><strong>Full Name: </strong> Alec M. Thompson</p>
            <p><strong>Mobile: </strong> (44) 123 1234 123</p>
            <p><strong>Email: </strong> alec.thompson@mail.com</p>
            <p><strong>Location: </strong> United States</p>
            <p><strong>Social Media: </strong>
              <a href="#"><FaFacebook/></a>
              <a href="#"><FaTwitter/></a>
              <a href="#"><FaInstagram/></a>
            </p>
          </div>
        </div>
  
        {/* Conversations */}
        <div className="dashboard-section conversations">
          <h3 className="section-title">Conversations</h3>
          <div className="conversation-item">
            <img src={ P1 } alt="Esthera" />
            <div className="conversation-text">
              <p><strong>Esthera Jackson</strong></p>
              <p>Hi! I need more informations...</p>
            </div>
            <a href="#" className="reply-link">REPLY</a>
          </div>
          <div className="conversation-item">
            <img src= { P2 } alt="Esthera" />
            <div className="conversation-text">
              <p><strong>Esthera Jackson</strong></p>
              <p>Awesome work, can you change...</p>
            </div>
            <a href="#" className="reply-link">REPLY</a>
          </div>
          <div className="conversation-item">
            <img src= { P3 } alt="Esthera" />
            <div className="conversation-text">
              <p><strong>Esthera Jackson</strong></p>
              <p>Have a great afternoon...</p>
            </div>
            <a href="#" className="reply-link">REPLY</a>
          </div>
          <div className="conversation-item">
            <img src= { P4 } alt="Esthera" />
            <div className="conversation-text">
              <p><strong>Esthera Jackson</strong></p>
              <p>About files I can...</p>
            </div>
            <a href="#" className="reply-link">REPLY</a>
          </div>
        </div>
      </div>
    );
  };
  

export default Dashboard;
