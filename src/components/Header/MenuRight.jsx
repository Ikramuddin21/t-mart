import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OffsetCart from '../OffsetMenu/OffsetCart';
import OffsetRightMenu from '../OffsetMenu/OffsetRightMenu';
import OffsetSearch from '../OffsetMenu/OffsetSearch';

const MenuRight = () => {

    const [offsetSearch, setOffsetSearch] = useState(false);
    const [offsetCart, setOffsetCart] = useState(false);

    const handleSearch = () => {
        setOffsetSearch(true);
    };

    const handleCart = () => {
        setOffsetCart(true);
    };

    return (
        <>
            <div className="col-md-2 col-sm-4 col-xs-3">
                <ul className="menu-extra">
                    <li className="search search__open hidden-xs">
                        <span 
                        className="ti-search"
                        onClick={handleSearch}
                        ></span>
                    </li>
                    <li>
                        <Link to="/login-register">
                            <span className="ti-user"></span>
                        </Link>
                    </li>
                    <li className="cart__menu">
                        <span
                         className="ti-shopping-cart"
                         onClick={handleCart}
                         ></span>
                    </li>
                    <li className="toggle__menu hidden-xs hidden-sm">
                        <span className="ti-menu"></span>
                    </li>
                </ul>
            </div>

            <div className="offset__wrapper" >
                {/* <!-- Start Search Popap --> */}

                { offsetSearch && <OffsetSearch />}

                {/* <!-- End Search Popap --> */}
                {/* <!-- Start Offset MEnu --> */}

                <OffsetRightMenu />

                {/* <!-- End Offset MEnu --> */}
                {/* <!-- Start Cart Panel --> */}

                <OffsetCart />

                {/* <!-- End Cart Panel --> */}
            </div>
        </>
    );
};

export default MenuRight;