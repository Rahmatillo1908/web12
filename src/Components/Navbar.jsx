
function Navbar() {
    return (
        <>
            <div className="navbarTop">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <u>ShopNow</u> </p>
                <p>English <i className="fa fa-chevron-down" ></i></p>
            </div>
            <div className="navWrapper">
            <div className="nav">
                <div className="logo">
                    <b>Exclusive</b>
                </div>
                <div className="menu">
                    <a href="">Home</a>
                    <a href="">Contact</a>
                    <a href="">About</a>
                    <a href="">Sign Up</a>
                </div>
                <div className="search">
                    <div className="searchForm">
                        <input type="text" />
                        <button><i className="fa fa-search" ></i></button>
                    </div>
                    <i className="fa fa-heart" ></i>
                    <i className="fa fa-cart-plus"></i>
            </div>
            </div>
            </div>
        </>
    )
}

export default Navbar