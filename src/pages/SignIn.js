import React, { useState } from 'react';
import '../styles/SignIn.css';
import Header from './header';
import Footer from './footer';


function SignIn() {
    const [rememberMe, setRememberMe] = useState(false);
    
        const toggleRememberMe = () => {
            setRememberMe(!rememberMe);
        };
    return(
        <main className='bg'>
            <header><Header theme="header-signin"/></header>
            <div className="main-content">
                <div className="form">
                  <div className="s-form-content">
                    <div className="signin-title">
                        <div>Welcome Back</div>
                        <aside>Enter your email and password to sign in</aside>
                        <div></div>
                    </div>
                    
                    <div className="s-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your email address" />
                    </div>
                    <div className="s-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Your password" />
                    </div>
                    <div className="s-form-group s-toggle-group">
                        <div
                            className={`toggle-button ${rememberMe ? 'active' : ''}`}
                            onClick={toggleRememberMe}>
                            <div className="toggle-circle"></div>
                        </div>
                        <span>Remember me</span>
                    </div>
                    <button type="submit" className="submit-button">SIGN UP</button>
                    <p className="footer-text">
                        Don't have an account? <a href="#signin">Sign up</a>
                    </p>
                  </div>
                </div>
                <div className="image">

                </div>
            </div>    
            <footer class="signin-footer"><Footer/></footer>
        </main>
    );
};

export default SignIn;