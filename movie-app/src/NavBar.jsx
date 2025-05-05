 //Using style components

import React from "react";

import styled from "styled-components"

const Nav =  styled.div`
    height: 70px;
	background: linear-gradient(170deg, #1bc059, #0d47a1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
  
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    &:hover{color: #0d47a1}
`;


const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    display:${(props)=>(props.show ? "block" :"none")};
    background: ${(props)=>props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
`;



class Navbar extends React.Component {

  
    render() {   
        const {cartCount} = this.props;
      return (
      <>
      <Nav>
        
      <Title>MOVIE APP</Title>
        
        <CartIconContainer>
            <CartImg alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
            />
            <CartCount color="yellow" show={true}>{cartCount}</CartCount>
        </CartIconContainer>
      </Nav>

      </>
      )
    }
  }  
 
  
  export default Navbar;
  





















//Using inline styles(Using style attribute)

// import React from "react";


// export default class NavBar extends React.Component {
//   render() {
//     return (
//       <>
//         <div style={styles.nav}>
//           <div style={styles.title}>Movie-App</div>
//           <div style={styles.cartIconContainer}>
//             <img alt="Cart Icon" style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
//             <span style={styles.cartCount}>3</span>
//           </div>
//         </div>
//       </>
//     );
//   }
// } 

// const styles = {
//   cartIcon: {
//     height: 48,
//     marginRight: 20,
//   },
//   nav: {
//     height: 70,
//     background: "#4267b2",
//     display: "flex",
//     justifyContent: "space-between" ,
//     alignItems: "center",
//     position: "relative",
//   },
//   title:{
//     fontSize: 30,
//     color: "#fff",
//     fontWeight: 600,
//     fontFamily: '"Montserrat", sans-serif',
//     textTransform: "uppercase",
//     marginLeft: 20
//   },
  
//   cartIconContainer: {
//     position: "relative",
//     cursor: "pointer",
//   },
//   cartCount: {
//     background: "orange",
//     borderRadius: "50%",
//     padding: "4px 8px",
//     position: "absolute",
//     right: 10,
//     top: -5,
//     fontSize: 12,
//   },
// };

