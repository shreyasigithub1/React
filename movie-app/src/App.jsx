// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from "react";  
import MovieList from "./MovieList";
import NavBar from "./NavBar";
// import Navbar from "./assets/NavbarModule";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import { movieArray } from "./MovieData"; 

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        movies: movieArray,
        cartCount:0,
    }
    // this.addStars = this.addStars.bind(this);
}

addStars = () => {
    //First form
    // this.setState({
    //     stars: this.state.stars + 0.5,
    // });
    //Second Form
    if (this.state.stars >=5) {
        
        return;
    }
    // this.setState((prevState) => {
    //     return {
    //         stars: prevState.stars + 0.5
    //     }
    // })
    // this.setState({
    //     stars: this.state.stars + 0.5,
    // }, () => (console.log("this.state.stars inside callback", this.state.stars)));
    // console.log("this.state.stars outside callback", this.state.stars);
   

    // this.setState({
    //         stars: this.state.stars + 0.5,
    // });
    // this.setState({
    //     stars: this.state.stars + 0.5,
    // });
    
    // this.setState({
    //     stars: this.state.stars + 0.5,
    // });
    
    this.setState({
        stars: this.state.stars + 0.5,
    });
    
    // this.state.stars += 0.5;
    //  console.log("this.state.stars:", this.state.stars);

}
// decStars = () => {
//     if (this.state.stars === 0) {
        
//         return;
//     }
//     this.setState((prevState) => {
//         return {
//             stars: prevState.stars - 0.5
//         }
//     })  
// }
// handleFav = () => {
//     this.setState({
//         fav:!this.state.fav,
//     })
// }
// //Using arrow function no need for bindinmg
// handleCart = () => {
//     this.setState({
//         cart:!this.state.cart,
//     })
// }
handleIncStars=(movie)=> {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);
    if (movies[mid].star >= 5) {
        return;
    }
    movies[mid].star += 0.5;
    this.setState({
        movies: movies,
    })
}
handleDecStars=(movie)=> {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);
    if (movies[mid].star == 0) {
        return;
    }
    movies[mid].star -= 0.5;
    this.setState({
        movies: movies,
    })
}
handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
   (movies[mid].fav =!movies[mid].fav ) 
        
    this.setState({
        movies: movies,
    }) 
}
handleToggleCart = (movie) => {
    let { movies,cartCount } = this.state;
    const mid = movies.indexOf(movie);
   (movies[mid].cart =!movies[mid].cart ) 
    if (movies[mid].cart == true) {
        cartCount += 1;
    } else {
        cartCount -= 1; 
    }   
    this.setState({
        movies: movies,
        cartCount:cartCount,
    }) 

}


  
    render() {
        const { movies,cartCount } = this.state;
    return (
      <>
     
        {/* with css style components */}
            <NavBar cartCount={ cartCount} />
        {/*With css modules */}
        {/* <Navbar/> */}
            <MovieList movies={ movies} addStars={this.handleIncStars}
                    decStars={this.handleDecStars} toggleFav={this.handleToggleFav} toggleCart={ this.handleToggleCart} />
        {/* <HeadingOne />
      <HeadingTwo/> */}
      </>
    )
  }
}

export default App;
