import React from 'react';

const SinglePortfolio = () => {
    return (
        <>
            <div className="ht__bradcaump__area" style={{background: "rgba(0, 0, 0, 0) url('../../assets/images/bg/2.jpg') no-repeat scroll center center / cover"}}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">single portfolio</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">single portfolio</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Bradcaump area --> */}
        <div className="single-portfolio-area bg__white ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="single-portfolio-img">
                            <img src="images/portfolio/single-portfolio/2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="portfolio-description mrg-sm">
                            <h2>portfolio name</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliqu erat volutpat. Ut wisi enim ad minim veniam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                            <div className="portfolio-info">
                                <ul>
                                    <li><span>Created by:</span>Tayeb rayed</li>
                                    <li><span>Completed on:</span>20 Sep 2017</li>
                                    <li><span>Categories:</span>Wordpress</li>
                                    <li><span>Client:</span>Tayeb rayed</li>
                                    <li><span>Skills:</span>HTML5 / WP / CSS3</li>
                                    <li><span>Created by:</span>Hamim Ahmed</li>
                                    <li><span>portfolio link:</span><a href="#">https://user/Theme365/portfolio</a></li>
                                </ul>
                            </div>
                            <div className="portfolio-social">
                                <ul>
                                    <li>Share: </li>
                                    <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-google"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-related-post pb--100 bg__white">
            <div className="container">
                <div className="section__title text-center mb--50">
                    <h2 className="title__line">Related Projects</h2>
                </div>
                <div className="tab-content portfolio-carousel-style jump">
                    <div className="related-portfolio">
                        <div className="row">
                            <div className="portfolio-slider-active owl-carousel">
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="single-portfolio mb--30">
                                        <div className="portfolio-img-title">
                                            <a href="single-portfolio.html">
                                                <img src="images/portfolio/equal/1.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-title hover-title">
                                                <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                                <span>Design</span>
                                            </div>
                                        </div>					
                                    </div>				
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="single-portfolio mb--30">
                                        <div className="portfolio-img-title">
                                            <a href="single-portfolio.html">
                                                <img src="images/portfolio/equal/2.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-title hover-title">
                                                <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                                <span>Design</span>
                                            </div>
                                        </div>					
                                    </div>					
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="single-portfolio mb--30">
                                        <div className="portfolio-img-title">
                                            <a href="single-portfolio.html">
                                                <img src="images/portfolio/equal/3.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-title hover-title">
                                                <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                                <span>Design</span>
                                            </div>
                                        </div>					
                                    </div>					
                                </div> 
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="single-portfolio mb--30">
                                        <div className="portfolio-img-title">
                                            <a href="single-portfolio.html">
                                                <img src="images/portfolio/equal/4.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-title hover-title">
                                                <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                                <span>Design</span>
                                            </div>
                                        </div>					
                                    </div>				
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="single-portfolio mb--30">
                                        <div className="portfolio-img-title">
                                            <a href="single-portfolio.html">
                                                <img src="images/portfolio/equal/5.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-title hover-title">
                                                <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                                                <span>Design</span>
                                            </div>
                                        </div>					
                                    </div>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SinglePortfolio;