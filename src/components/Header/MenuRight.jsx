import React from 'react';

const MenuRight = () => {
    return (
        <div className="col-md-2 col-sm-4 col-xs-3">
            <ul className="menu-extra">
                <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
                <li><a href="login-register.html"><span className="ti-user"></span></a></li>
                <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
                <li className="toggle__menu hidden-xs hidden-sm"><span className="ti-menu"></span></li>
            </ul>
        </div>
    );
};

export default MenuRight;