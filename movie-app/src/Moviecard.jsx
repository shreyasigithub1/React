import React from "react";

class MovieCard extends React.Component{
render() {
    console.log("Rendered the document");
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
        const { title, plot, price, rating,fav,cart,star } = this.props.movies;
        return (<div className="main">
            <div className="movie-card">
                <div className="left"><img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"/></div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs.{price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img alt="Decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn" onClick={() => { this.props.decStars(movies) }}/>
                            <img src="https://cdn-icons-png.flaticon.com/128/616/616490.png" alt="star" className="stars" />
                            <img alt="Increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" onClick={() => { this.props.addStars(movies) }} />
                            <span>{star}</span>
                            
                        </div>
                        {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> :
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                       
                        <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={()=>{toggleFav(movies)}}>{fav ? "Un-favourite" : "Favourite"}</button>
                        
                        <button className={cart ? "unfavourite-btn" : "cart-btn"} onClick={()=>{toggleCart(movies)}}>{cart ?"Remove from cart":"Add to cart"}</button>

                       

                    </div>
                </div>
            </div>
             
         </div>)
    }
}
export default MovieCard;