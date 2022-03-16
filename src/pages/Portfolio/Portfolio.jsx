import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/bg/2.jpg';
import portfolioData from '../../temp/portfolio.json';
import PortfolioPresentational from '../../components/Portfolio/PortfolioPresentational';

const Portfolio = () => {
    return (
        <>
            {/* <!-- Start Bradcaump area --> */}
            <div className="ht__bradcaump__area" style={{ background: `rgba(0, 0, 0, 0) url(${bgImage}) no-repeat scroll center center / cover` }}>
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title">portfolio card 2 column</h2>
                                    <nav className="bradcaump-inner">
                                        <Link className="breadcrumb-item" to="/home">Home</Link>
                                        <span className="brd-separetor">/</span>
                                        <span className="breadcrumb-item active">portfolio card 2 column</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Bradcaump area --> */}

            {/* <!-- Start Our Blog Area --> */}
            <div className="portfolio-grid-area bg__white pt--130 pb--100">
                <div className="container">
                    <div className="portfolio-menu-active gutter-btn mb--50 text-center">
                        <button className="active" data-filter="*">All works</button>
                        <button data-filter=".cat2">print</button>
                        <button data-filter=".cat3">Webdesign</button>
                        <button data-filter=".cat5">Photography</button>
                    </div>
                    <div className="portfolio-style">
                        <div className="row grid">
                            {
                                portfolioData.map(portfolio => <PortfolioPresentational
                                    key={portfolio.id}
                                    portfolio={portfolio}
                                 />)
                            }
                            {/* <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat3">
                                <div className="single-portfolio-card mb--30">
                                    <div className="portfolio-img">
                                        <Link to="/single-portfolio">
                                            <img src="images/portfolio/equal/2.jpg" alt="" />
                                        </Link>
                                        <div className="portfolio-icon">
                                            <a className="img-poppu" href="images/portfolio/equal/2.jpg">
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-title portfolio-card-title text-center">
                                        <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat5 cat2">
                                <div className="single-portfolio-card mb--30">
                                    <div className="portfolio-img">
                                        <a href="single-portfolio.html">
                                            <img src="images/portfolio/equal/2.jpg" alt="" />
                                        </a>
                                        <div className="portfolio-icon">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                                <i className="zmdi zmdi-videocam"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-title portfolio-card-title text-center">
                                        <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat3">
                                <div className="single-portfolio-card mb--30">
                                    <div className="portfolio-img">
                                        <a href="single-portfolio.html">
                                            <img src="images/portfolio/equal/3.jpg" alt="" />
                                        </a>
                                        <div className="portfolio-icon">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                                <i className="zmdi zmdi-videocam"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-title portfolio-card-title text-center">
                                        <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat5 cat2">
                                <div className="single-portfolio-card mb--30">
                                    <div className="portfolio-img">
                                        <a href="single-portfolio.html">
                                            <img src="images/portfolio/equal/4.jpg" alt="" />
                                        </a>
                                        <div className="portfolio-icon">
                                            <a className="img-poppu" href="images/portfolio/equal/2.jpg">
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-title portfolio-card-title text-center">
                                        <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat5">
                                <div className="single-portfolio-card mb--30">
                                    <div className="portfolio-img">
                                        <a href="single-portfolio.html">
                                            <img src="images/portfolio/equal/5.jpg" alt="" />
                                        </a>
                                        <div className="portfolio-icon">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                                <i className="zmdi zmdi-videocam"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-title portfolio-card-title text-center">
                                        <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat3 cat5">
                                <div className="single-portfolio-card mb--30">
                                    <div className="portfolio-img">
                                        <a href="single-portfolio.html">
                                            <img src="images/portfolio/equal/6.jpg" alt="" />
                                        </a>
                                        <div className="portfolio-icon">
                                            <a className="img-poppu" href="images/portfolio/equal/2.jpg">
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-title portfolio-card-title text-center">
                                        <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;