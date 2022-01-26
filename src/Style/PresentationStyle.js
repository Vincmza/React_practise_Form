import styledComponents, { keyframes } from "styled-components";
//Colors
import colors from "../style/colors";

export const Wrapper = styledComponents.div`
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const balance = keyframes`
    25%{
        transform:rotate(-10deg);
    }
    50% {
        transform:rotate(10deg);
    }
    75%{
        transform:rotate(-5deg)
    }
    100%{
        transform:rotate(0deg);
    }
`
export const iconRotate = keyframes`
    to {
        transform:rotate(0deg);
    }
`
export const IconContainer = styledComponents.div`
    display:flex;
    justify-content:center;
    font-size:2.5em;
    transform: rotate(-360deg);
    color: ${colors.shadow};
    animation: 4s ${iconRotate} forwards;
`
export const imgMove = keyframes`
    to {
        transform: translateX(0);
    }
`
export const ImageContainer = styledComponents.div`
    width:25%;
    max-width:200px;
    height:200px;
    transform: translateX(-100vw);
    animation: 2s ${imgMove} cubic-bezier(.32,1.14,.44,1.18) forwards;
    // border:1px solid red;
    @media (max-width:700px){
        width:50%;
    }
    @media (max-width:400px){
        width:80%;
    }
`;
export const Image = styledComponents.img`
    object-fit: cover;
    width:100%;
    height:100%;
`;
export const HeadWrapper = styledComponents.div`
    padding:10px;
`;
export const Title = styledComponents.h1`
    animation: 1.5s ${balance} linear;
    animation-iteration-count: 2;
    padding:30px;
    text-align:center;
    font-size:2.5em;
    text-shadow: 1px 1px 2px ${colors.shadow};
    @media (max-width:700px){
        font-size:2em;
    }
    @media (max-width:400px){
        font-size:1.7em;
    }
`;
export const TextHeader = styledComponents.p`
    text-align:center;
    padding:10px;
    font-size:1em;
`;
export const TextDown = styledComponents.p`
    text-align:center;
    padding:20px;
    font-size:1em;
`;
export const Button = styledComponents.input`
    margin-top:20px;
    font-size: 1em;
    transform: scale(1);
    transition:500ms;
    padding:10px 15px;
    border: none;
    border-radius:10px;
    box-shadow: 2px 2px 5px ${colors.shadow};
    background-color: ${colors.orange};
    &:hover{
        transform:scale(1.2);
        cursor: pointer;
        background-color: ${colors.pink};
    }
    @media (max-width:400px){
        margin-bottom:20px;
    }
`;