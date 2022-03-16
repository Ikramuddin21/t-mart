import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioPresentational = (props) => {

    const { catClass, imgUrl, mainClass, mainLink, iconObj: { parentClass, childClass, link, icon }, text: { textClass, textLink, linkText, spanText } } = props.portfolio;

    return (
        <div className={`col-md-6 col-sm-6 col-xs-12 grid-item ${catClass}`}>
            <div className="single-portfolio-card mb--30">
                <div className={`${mainClass}`}>
                    <Link to={mainLink}>
                        <img src={require(`../../assets/${imgUrl}`)} alt="" />
                    </Link>
                    <div className={parentClass}>
                        <Link to={link} className={childClass}>
                            <i className={icon}></i>
                        </Link>
                    </div>
                </div>
                <div className={textClass}>
                    <h3>
                        <Link to={textLink}>{linkText}</Link>
                    </h3>
                    <span>{spanText}</span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPresentational;