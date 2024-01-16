import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

function Time() {
    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [second, setSeconds] = useState("00")
    let interval = useRef()
    const startTimer = () => {
        const CountdownDate = new Date("January 20, 2024 00:00:00").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = CountdownDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)
            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000);
    }
    useEffect(() => {
        startTimer()
        return clearInterval(interval.current)

    }, [])
  return (
    <div className="times" >
        <div className="time">
            <p>Days</p>
            <h2>{days} : </h2>
        </div>
        <div className="time">
            <p>Hours</p>
            <h2>{hours} : </h2>
        </div>
        <div className="time">
            <p>Minutes</p>
            <h2>{minutes} : </h2>
        </div>
        <div className="time">
            <p>Seconds</p>
            <h2>{second}</h2>
        </div>
    </div>
  )
}

export default Time