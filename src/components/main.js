import React from "react"


export default function Main(props){
    return(
        <div className="content">
            <img src={`${props.item.imageUrl}`} className="image" alt="item images"/>
            <section className="container">
                <span className="type">{props.item.itemType}</span>
                <h1 className="title">{props.item.title}</h1>
                <span className="date">{props.item.date}</span>
                <p className="des"> {props.item.description}</p>
                <button type="submit" className="more">Read More</button>
            </section>
        </div>
    )
}