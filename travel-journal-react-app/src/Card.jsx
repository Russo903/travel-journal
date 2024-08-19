import img from "../public/assets/mount-fuji.webp"
import pinImg from "../public/assets/pin.webp"

function Card() {

    return(
        <div className="card">
            <img src={img} className="cardImage" alt="image" />
            <div className="card--txt">
                <div className="card--location">
                    <span><img src={pinImg} className="pinImg" alt="pin"/></span>
                    <span> LOCATION </span>
                    <span><a href="#">View on Google Maps</a></span>
                </div>
                <div className="card--details">
                    <div className="card--title"><h1>Mount Fuji</h1></div>
                    <div className="card--date">12 Jan, 2021 - 24 Jan, 2021</div>
                    <div className="card--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi tempore vero aperiam nam doloremque eveniet fugit assumenda, perspiciatis odio aliquam quod omnis dolorum aspernatur iusto pariatur nulla cumque temporibus!</div>
                </div>
            </div>
        </div>
    )
    
}

export default Card