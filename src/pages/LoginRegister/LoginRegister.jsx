import React, { useState } from 'react';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import bgImage from '../../assets/images/bg/5.jpg';
import './LoginRegister.css';

const LoginRegister = () => {

    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);

    const handleLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    return (
        <div className="htc__login__register bg__white ptb--130" style={{ background: `rgba(0, 0, 0, 0) url(${bgImage}) no-repeat scroll center center / cover` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="login__register__menu" role="tablist">
                            <li role="presentation" className={`login ${showLogin ? 'active' : ''}`}>
                                <a
                                    onClick={handleLogin}
                                    href="#login"
                                    role="tab"
                                    data-toggle="tab"
                                >Login</a>
                            </li>
                            <li role="presentation" className={`register ${showRegister ? 'active' : ''}`}>
                                <a
                                    onClick={handleRegister}
                                    href="#register"
                                    role="tab"
                                    data-toggle="tab"
                                >Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Start Login Register Content --> */}
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="htc__login__register__wrap">
                            {/* <!-- Start Single Content --> */}
                            <Login showLogin={showLogin} />
                            {/* <!-- End Single Content --> */}

                            {/* <!-- Start Single Content --> */}
                            <Register showRegister={showRegister} />
                            {/* <!-- End Single Content --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Login Register Content --> */}
            </div>
        </div>
    );
};

export default LoginRegister;