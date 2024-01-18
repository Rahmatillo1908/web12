import Time from "./Time"
import Carousels from "./Carousels"
function Header() {
    const time = <Time/>
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
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eveniet exercitationem provident laboriosam maiores illo dolore, ad quisquam accusamus debitis distinctio veritatis, sapiente dicta eius numquam doloribus quos magnam impedit amet natus dolorem ipsa eaque similique rem. Rem repellendus nihil facere assumenda eveniet, illum consectetur tenetur repellat veniam quasi dolores?</h1>
                </div>
                <Carousels h1="Explore Our Products" />
                <div className="new">
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in non, eligendi est porro vero autem excepturi enim deserunt vel ipsum, ipsam eos maxime labore voluptatum, rem officiis laboriosam quia incidunt dicta eaque optio iste cupiditate molestias. Amet similique, mollitia dignissimos necessitatibus corporis repellendus ullam nisi pariatur provident. Saepe, quibusdam!</h3>
                </div>
                <Carousels h1="Best Selling Products" />
            </div>
        </>
    )
}

export default Header