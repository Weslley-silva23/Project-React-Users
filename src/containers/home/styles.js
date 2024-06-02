import styled from "styled-components";

import Background from "../../assets/background.svg"

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;


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

`

export const H1 = styled.h1`

font-size: 34px;
font-weight: 700;
line-height: 39.84px;
text-align: center;
color: white;
margin-bottom: 70px;


`
export const InputLabel = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
color: rgba(238, 238, 238, 1);
font-weight: bold;
letter-spacing: -0.41px;
margin-left: 25px;


 

`
export const Input = styled.input`
 box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
 background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left: 25px;
font-size: 20px;
font-weight: 400;
line-height: 28.13px;
color: white;
margin-bottom: 34px;

`
export const Button = styled.button`
 
 width: 342px;
height: 74px;
background: rgba(0, 0, 0, 0.8);
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
margin-top: 80px;

&:hover {
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

`