import styled from "styled-components";


export const NavBar = styled.div`
 background-color:black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    text-decoration: none;
    color: white;
    padding: 1rem; 
    
` 
export const NavBarUl= styled.ul`
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    margin:35px;  
   
    a{
        color: white;
        font-family: "Raleway",sans-serif;
        font-size: 21px;
        opacity: .8;
        text-decoration: none;
        margin-left: 35px;
        &:hover{
            font-weight: bold;
            text-decoration: underline;
        }
    }
    
    `
    export const Container= styled.div`
margin-left: 40%;
   h3{
       color:#C8C3C2;
;
   }
   h4{
        color:#ADA9A8;
   }
  button{
      background-color:#6EB82D;
      padding: 1rem 3rem;
      margin-left:10px;
      color: white;
      font-weight: 700;
  
    
  }
 
`