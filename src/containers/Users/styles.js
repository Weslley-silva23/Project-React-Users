import styled from "styled-components";

import Background from "../../assets/background.svg"

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;


`
export const Image = styled.img`
 margin-top: 30px;

`
export const ContainerItens = styled.div`
 
 background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 36px ;
display: flex;
flex-direction: column;
height: 100vh;
min-height: calc(100vh - 170px);


`

export const H1 = styled.h1`

font-size: 34px;
font-weight: 700;
line-height: 39.84px;
text-align: center;
color: white;
margin-bottom: 70px;


`



export const Button = styled.button`
 
 width: 342px;
height: 74px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
color: white;
border: none;
cursor: pointer;
font-size: 17px;
font-weight: 700;
line-height: 28px;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 50px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

&:hover {
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

img {
    transform: rotateY(180deg);
}

`
export const User = styled.li `
 box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
 background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
font-size: 20px;
font-weight: 500;


margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-around;

&:hover {
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}
`

export const Backtrash = styled.img `

border: none;
`

