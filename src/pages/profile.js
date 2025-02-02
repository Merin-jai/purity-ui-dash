import react from "react";
import DashMenu from "./DashMenu";
import '../styles/profile.css';
import DashHeader from "./DashHeader";
import { MdEdit } from "react-icons/md";
import { transform } from "framer-motion";
import { IoIosCube } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import Dashboard from "./profilecontent";
import Projects from "./projects";
import Footer from "./footer";
function Profile() {
  return (
    <div class="profile">
      <DashMenu/>
      <div class="profile-content">
        <DashHeader theme="Profile"/>
        <div class="profile-body">
          {/* <img src={require('../images/Background1.png')} alt="background" /> */}
          <div className="profile-overview">
              <div className="profile-name">
                  <img src={require('../images/Profile_pic.png')} />
                  <div className="edit-button">
                    <MdEdit style={{color:"4fd1c5"}}/>
                  </div>
                  <div style ={{display:"flex",flexDirection:"column",gap:"5px"}}>
                    <h4>Esthera Jackson</h4>
                    <span span style = {{color : "#718096" , fontSize: "clamp(10px,1vh,10px)", letterSpacing :"0.7px"}}>esthera@simmmple.com</span>
                  </div>
                  
              </div>
              <div className="profile-name-nav">
                 <div className="profile-btn">
                    <IoIosCube/>
                    <label>OVERVIEW</label>
                  </div>
                  <div className="profile-nav-content">
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_67_344)">
                          <path d="M6.91072 5.32514C6.92765 5.32515 6.94421 5.32017 6.95832 5.31081C6.97242 5.30144 6.98345 5.28812 6.99001 5.27252C6.99658 5.25691 6.99838 5.23972 6.99521 5.22309C6.99203 5.20646 6.98402 5.19114 6.97217 5.17905L5.28779 3.46631C5.27582 3.45416 5.26051 3.44584 5.24379 3.44242C5.22708 3.439 5.20973 3.44063 5.19395 3.4471C5.17816 3.45358 5.16467 3.4646 5.15517 3.47877C5.14567 3.49295 5.14061 3.50962 5.14063 3.52668V5.06733C5.14063 5.1357 5.16779 5.20128 5.21614 5.24963C5.26449 5.29798 5.33006 5.32514 5.39844 5.32514H6.91072Z" fill="#2D3748"/>
                          <path d="M4.73242 5.73352C4.64418 5.64646 4.57406 5.54278 4.52612 5.42846C4.47818 5.31415 4.45337 5.19146 4.45312 5.0675V3.09094H2.90625C2.54191 3.09202 2.1928 3.23723 1.93517 3.49486C1.67754 3.75249 1.53233 4.1016 1.53125 4.46594V9.27844C1.53125 9.64311 1.67612 9.99285 1.93398 10.2507C2.19184 10.5086 2.54158 10.6534 2.90625 10.6534H6C6.36467 10.6534 6.71441 10.5086 6.97227 10.2507C7.23013 9.99285 7.375 9.64311 7.375 9.27844V6.01282H5.39844C5.27447 6.01264 5.15176 5.98786 5.03744 5.93992C4.92311 5.89198 4.81944 5.82182 4.73242 5.73352V5.73352Z" fill="#2D3748"/>
                          <path d="M8.49219 2.57496H10.0045C10.0214 2.57497 10.038 2.56998 10.0521 2.56062C10.0662 2.55126 10.0772 2.53794 10.0838 2.52234C10.0903 2.50673 10.0921 2.48953 10.089 2.4729C10.0858 2.45627 10.0778 2.44095 10.0659 2.42886L8.38154 0.716128C8.36957 0.703974 8.35426 0.695657 8.33754 0.692236C8.32083 0.688816 8.30348 0.690446 8.2877 0.696921C8.27191 0.703395 8.25842 0.71442 8.24892 0.728592C8.23942 0.742763 8.23436 0.75944 8.23438 0.776499V2.31714C8.23438 2.38552 8.26154 2.4511 8.30989 2.49944C8.35824 2.54779 8.42381 2.57496 8.49219 2.57496Z" fill="#2D3748"/>
                          <path d="M8.49219 3.26257C8.24206 3.26066 8.00273 3.16045 7.82586 2.98359C7.64899 2.80672 7.54878 2.56738 7.54687 2.31726V0.340698H5.22656C4.8848 0.341096 4.55716 0.477036 4.3155 0.718695C4.07384 0.960355 3.9379 1.288 3.9375 1.62976V2.4032H4.84242C4.95793 2.40366 5.0722 2.42694 5.17868 2.4717C5.28516 2.51646 5.38175 2.58182 5.46289 2.66402L7.80812 5.04878C7.97174 5.21479 8.06309 5.43875 8.06228 5.67183V8.5907H9.20203C9.90049 8.5907 10.4685 8.01234 10.4685 7.30163V3.26257H8.49219Z" fill="black"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_67_344">
                          <rect width="11" height="11" fill="white" transform="translate(0.5 -0.00280762)"/>
                        </clipPath>
                      </defs>
                    </svg>

                    <label>TEAMS</label>
                  </div>
                  <div className="profile-nav-content">
                    <IoBuild/>
                    <label>PROJECTS</label>
                  </div>
              </div>
          </div>
            <div><Dashboard/></div>
            <div><Projects/></div>
        </div>
        <footer class="profile-footer"><Footer/></footer>
      </div>
    </div>
  );
}

export default Profile;