import React from 'react';
import logo from '../../assets/images/logo/logo.png'
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';

const Header = () => {
    return (
        <>
            <header id="header" className="htc-header header--3 bg__white">
                {/* <!-- Start Mainmenu Area --> */}
                <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Start MAinmenu Ares --> */}
                            <MenuLeft />
                            {/* <!-- End MAinmenu Ares --> */}
                            <MenuRight />
                        </div>
                        <div className="mobile-menu-area"></div>
                    </div>
                </div >
                {/* <!-- End Mainmenu Area --> */}
            </header >
            <div className="body__overlay"></div>
        </>
    );
};

export default Header;