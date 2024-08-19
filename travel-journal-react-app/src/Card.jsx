import img from "../public/assets/mount-fuji.webp"
import pinImg from "../public/assets/pin.webp"

function Card(props) {

    return(
        <div className="card">
            <img src={props.element.imageUrl} className="cardImage" alt="image" />
            <div className="card--txt">
                <div className="card--location">
                    <span><img src={pinImg} className="pinImg" alt="pin"/></span>
                    <span> {props.element.location} </span>
                    <span><a href={props.element.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <div className="card--details">
                    <div className="card--title"><h1>{props.element.title}</h1></div>
                    <div className="card--date">{props.element.startDate} - {props.element.endDate}</div>
                    <div className="card--description">{props.element.description}</div>
                </div>
            </div>
        </div>
    )
    
}

export default Card