import styled from 'styled-components'

const AppDiv = styled.div`
background: black;
width: 100%;
`;
const Input = styled.input`
width: 15%;
margin:auto;  
color: black;
text-align: center;
display:block;
`;
const Headling = styled.div`
color: white;
font-size: 60x
width: 100%;
text-shadow: 1px 1px 2px purple, 0 0 25px blue, 0 0 5px red;
display:block;
`;

const MainDiv = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const Text = styled.p`
color: white;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
width: 40%;
background: black;
margin: 5%  5%;
text-align: center;
padding: 20px;
box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
border-radius: 10px;
`;

const ImageDiv = styled.div`
width: 40%;
margin: 5%  5%; 
`;

const ImageStyle = styled.img`
width: 100%;
border-radius: 50px;
box-shadow: -5px -5px 30px 5px blue, 5px 5px 30px 5px white;
`;
const IframeDiv = styled.div`
width: 40%;
margin: 5%  5%; 
`;
const IframeStyle = styled.iframe`
width: 100%;
border-radius: 50px;
box-shadow: -5px -5px 30px 5px blue, 5px 5px 30px 5px white;
`;

const Title = styled.h1`
color: white;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
box-shadow: 10px 10px 5px lightblue;
border-radius: 10px; 
width: 50%;
margin: 2% auto; 
background: black;
&:hover {color:lightblue};
text-align: center;
`;

export {Title, AppDiv, Text, ImageStyle, MainDiv, ImageDiv, IframeStyle, IframeDiv, Input, Headling}