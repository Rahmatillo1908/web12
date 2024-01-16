import Time from "./Time"
function Header() {
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
        <div className="line">
            <h1>FLash Sales</h1>
            <Time/>
        </div>
    </div>
    </>
  )
}

export default Header