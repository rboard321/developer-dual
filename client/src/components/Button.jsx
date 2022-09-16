import styled from "styled-components";

const Button = styled.button`
width: ${({width}) => width};
height: ${({height}) => height};
border: 1px solid black;
background: ${({backGround}) => backGround};
border-radius: 6px;
color: #000;
font-size: 20px;
padding: 5px 15px 5px 15px;
margin-bottom: 20px;
&:hover{
    cursor: pointer;
}
`

export default Button