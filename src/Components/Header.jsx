import Time from "./Time"
import Carousels from "./Carousels"
function Header() {
    const time = <Time />
    return (
        <>
            <div className="header" >
                <div className="headerLeft">
                    <div className="headerText"><p>Collection</p> <i className="fa fa-chevron-right" ></i></div>
                    <div className="headerText"><p>Collection</p> <i className="fa fa-chevron-right" ></i></div>
                    <div className="headerText"><p>Collection</p></div>
                    <div className="headerText"><p>Collection</p></div>
                    <div className="headerText"><p>Collection</p></div>
                    <div className="headerText"><p>Collection</p></div>
                    <div className="headerText"><p>Collection</p></div>
                    <div className="headerText"><p>Collection</p></div>
                    <div className="headerText"><p>Collection</p></div>
                </div>
                <div className="headerRight">
                    <div className="bgImage">
                        <h3>Up to  10% <br /> Off Vaucher</h3>
                        <div className="link">
                            <u>Shop Now</u>
                            <i className="fa fa-arrow-right" ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categoryHeader">
                <div className="start">Today s</div>
                <Carousels h1="Best Selling Products" time={time} />
                <div className="newCategory">
                    <div className="headerTop">
                        <div className="categoryTopHeader">
                            <div>
                                <p className="startSection" >Categories</p>
                                <h1>Browse By Category</h1>
                            </div>
                            <div className="arrows">
                                <i className="fa fa-arrow-left"  ></i>
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="categoryCards">
                            <div className="categoryCard">
                                <i className="fa fa-mobile-phone"></i>
                                <p>Phones</p>
                            </div>
                            <div className="categoryCard">
                                <i className="fa fa-desktop"></i>
                                <p>Computers</p>
                            </div>
                            <div className="categoryCard">
                                <i className="fa fa-play"></i>
                                <p>SmartWatch</p>
                            </div>
                            <div className="categoryCard">
                                <i className="fa fa-camera"></i>
                                <p>Camera</p>
                            </div>
                            <div className="categoryCard">
                                <i className="fa fa-headphones" ></i>
                                <p>HeadPhones</p>
                            </div>
                            <div className="categoryCard">
                                <i className="fa fa-gamepad"></i>
                                <p>Gaming</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousels h1="Explore Our Products" />
                <div className="new">
                    <div className="newSection">
                        <div className="newSectionLeft">
                            <p>Categories</p>
                            <h1>Enhance Your <br /> Music Experience</h1>
                            <div className="deadLines">
                                <div className="deadLine">
                                    <h4>23</h4>
                                    <h5>Hours</h5>
                                </div>
                                <div className="deadLine">
                                    <h4>23</h4>
                                    <h5>Hours</h5>
                                </div>
                                <div className="deadLine">
                                    <h4>23</h4>
                                    <h5>Hours</h5>
                                </div>
                                <div className="deadLine">
                                    <h4>23</h4>
                                    <h5>Hours</h5>
                                </div>
                            </div>
                            <button>Buy Now!</button>
                        </div>
                        <div className="newSectionRight">
                            <img src="./kalonka.png" alt="" />
                        </div>
                    </div>
                </div>
                <Carousels h1="Best Selling Products" />
            </div>
        </>
    )
}

export default Header