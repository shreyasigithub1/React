import React from "react";
import MovieCard from "./Moviecard";



export default class MovieList extends React.Component{
    

    render() {
        // const { title, plot, price, rating, stars, fav, cart,poster } = this.state.movies;
        const { movies,addStars,decStars,toggleCart,toggleFav } = this.props;
        return (
            <>
               
                {/* <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav}
                cart={cart}
                /> */}
                {movies.map((movie) => (<MovieCard movies={movie} addStars={addStars}
                    decStars={decStars} toggleFav={toggleFav} toggleCart={ toggleCart} key={movie.id} />))}
               
                
            </>

        );
        
     
 }

}