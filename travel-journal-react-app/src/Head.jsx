import globe from "../public/assets/globe-earth.png"


function Head() {
    return(
        <header className="header">
            <span><img src={globe} className="globe" alt="site-logo"/></span>
            <span> My Travel Journal</span>
        </header>
    )
}



export default Head