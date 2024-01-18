import { useState } from "react"

const CarouselCard = ({ item }) => {
    const [like, setLike] = useState(true)
    const likes = ()=>{
        setLike(!like)
    }
    return (
        <div onDoubleClick={likes} key={item.id} className="carouselCard">
            <img onDoubleClick={likes} src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.price}$</h3>
            <div className="icons">
                <i onClick={likes} className={`fa fa-heart${like ? "-o" : ""}`} style={{color:"red"}} ></i>
                <i className="fa fa-eye" ></i>
            </div>
        </div>
    )
}

export default CarouselCard