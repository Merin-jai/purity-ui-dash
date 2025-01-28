import React, { useState } from 'react';
import '../styles/SignUp.css';
import '../styles/style.css';
import Header from './header';
import Footer from './footer';
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

function SignUp() {
    const [rememberMe, setRememberMe] = useState(false);
    const [name,setname] =useState('');

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit =  (event)=>{
            event.preventDefault();
            console.log("Name : ",name);
            alert(`Name : name`);
    }
    return (
        <main className="background">
            {/* <img src={require('../images/Image.png')} alt="background" /> */}
            
            <header class="header-pos"><Header theme="header-signup"/></header>
            <div class="content"> 
                <h2>Welcome!</h2>
                <div>Use these awsome forms to login or create new <br></br>account in your project for free</div>
            </div>
            <div class="login-form">
                <div class="title">
                    <label>Register with</label>
                    
                    {/* <div class="social-icons">
                        {/* social icons are impoprted as images }
                        <a href="#" class="facebook"><img src={require('../images/facebook.png')}></img></a>
                        <a href="#" class="facebook"><img src={require('../images/apple.png')}></img></a>
                        <a href="#" class="google"><img src={require('../images/google.png')}></img></a>
                    </div> */}
    
                    <div class="social-icons">
                        <a href="" class="facebook"><FaFacebook style={{ color: "#2D3748"}}/></a>
                        <a href="#" class="facebook"><FaApple style={{ color: "#2D3748"}}/></a>
                        <a href="#" class="google"><FaGoogle style={{ color: "#2D3748" }}/></a>
                    </div>
                    <div class="col"><label>or</label></div>
                </div>
                {/* <section>
                    <form action="#">
                        <div class="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Username" />
                        </div>
                    </form>
                </section> */}

                <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your full name" value = {name} onChange={(event)=>setname(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your email address" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Your password" />
                </div>
                <div className="form-group toggle-group">
                    <div
                        className={`toggle-button ${rememberMe ? 'active' : ''}`}
                        onClick={toggleRememberMe}>
                        <div className="toggle-circle"></div>
                        
                    </div>
                    <span>Remember me</span>
                </div>
                <button type="submit" className="ss-submit-button">SIGN UP</button>
            </form>
            <p className="ss-footer-text">
                Already have an account? <a href="#signin">Sign in</a>
            </p>

            </div>
            <footer><Footer/></footer>
        </main>
    );
}

export default SignUp;

