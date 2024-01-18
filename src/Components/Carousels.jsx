import { useState } from "react"
import array from "../Base"
import CarouselCard from "./CarouselCard"

const Carousels = ({h1, time}) => {
    const [carousels, setCarousels] = useState(0)
    const left = ()=>{
        setCarousels(carousels <= 0 ? carousels : carousels - 1)
    }
    const right = ()=>{
        setCarousels(carousels <= 11 ? carousels+1 :carousels)
    }
    const data = array
    return (
        <div className="arrayCarousel" >
            <div className="titlecarousel">
            <h1>{h1}</h1>
            {time}
            <div className="arrows">
                <i className="fa fa-arrow-left" onClick={left} ></i>
                <i className="fa fa-arrow-right" onClick={right} ></i>
            </div>
            </div>
            <div className="carousels">
                <div className="caruslesCards" style={{transform:`translateX(-${carousels*410}px)`}} >
                    {data.map(item =>
                        <CarouselCard key={item.id} item={item} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Carousels