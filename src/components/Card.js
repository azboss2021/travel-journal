import React from "react"

export default function Card(props) {
    return (
        <div className="section">
            <br />
            <div className="card">
                <img src={`../images/${props.image}`} className="card-image" />
                <div className="card-content">
                    <div className="country-map">
                        <div className="country">📍 {props.country}</div>
                        <a href={props.googleMaps} target="#" className="google-maps">View on Google Maps</a>
                    </div>
                    <div className="location">{props.location}</div>
                    <div className="date">{props.dates}</div>
                    <div className="description">{props.description}</div>
                </div>
            </div>
            <br />
            <hr />
        </div>
    )
}