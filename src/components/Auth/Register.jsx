import React, { useState } from 'react';

const Register = ({ showRegister }) => {

    const [registerInfo, setRegisterInfo] = useState({
        userName: "",
        userEmail: "",
        password: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(registerInfo);
    };

    return (
        <div id="register" role="tabpanel" className={`single__tabs__panel tab-pane fade ${showRegister ? 'in active' : ''}`}>
            <form className="login" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name*"
                    onChange={(e) => setRegisterInfo({ ...registerInfo, userName: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email*"
                    onChange={(e) => setRegisterInfo({ ...registerInfo, userEmail: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password*"
                    onChange={(e) => setRegisterInfo({ ...registerInfo, password: e.target.value })}
                />
                <div className="tabs__checkbox">
                    <input type="checkbox" />
                    <span> Remember me</span>
                </div>
                <div className="htc__login__btn">
                    <button type='submit'>Register</button>
                </div>
            </form>
            <div className="htc__social__connect">
                <h2>Or Login With</h2>
                <ul className="htc__soaial__list">
                    <li><a className="bg--twitter" href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                    <li><a className="bg--instagram" href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                    <li><a className="bg--facebook" href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                    <li><a className="bg--googleplus" href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Register;