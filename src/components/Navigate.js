import React from "react"
import { Link } from "react-router-dom"
import About from "../routes/About"
import "./Navigate.css"



function Navigate(){
    return (
        <div className="nav">
            <Link to="/about">About</Link>
            <Link to="/"> Home </Link>
        </div>
    )
}

export default Navigate