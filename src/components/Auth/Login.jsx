import React, { useRef, useState } from 'react';

const Login = ({ showLogin }) => {

    const formReset = useRef(null);

    const [loginInfo, setLoginInfo] = useState({
        userName: "",
        password: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log('sumbitted yes', loginInfo);
        formReset.current.reset();
    };

    return (
        <div id="login" role="tabpanel" className={`single__tabs__panel tab-pane fade ${showLogin ? 'in active' : ''}`}>
            <form
                className="login"
                ref={formReset}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="User Name*"
                    value={loginInfo.userName}
                    onChange={(e) => setLoginInfo({ ...loginInfo, userName: e.target.value })} />
                <input
                    type="password"
                    placeholder="Password*"
                    value={loginInfo.password}
                    onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
                <div className="tabs__checkbox login-custom">
                    <div>
                        <input type="checkbox" />
                        <span> Remember me</span>
                    </div>
                    <span className="forget"><a href="#">Forget Pasword?</a></span>
                </div>
                <div className="htc__login__btn mt--30">
                    <button type='submit'>Login</button>
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

export default Login;