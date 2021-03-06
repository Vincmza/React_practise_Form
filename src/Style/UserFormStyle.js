import styledComponents, {keyframes} from "styled-components";
import colors from "../style/colors"

export const errorMove = keyframes`
    20%{
        transform: translateX(10%)
    }
    40% {
        transform: translateX(-10%)
    }
    60%{
        transform: translateX(5%)
    }
    80%{
        transform: translateX(-5%)
    }
    100%{
        transform: translateX(0%);
    }
`
export const Form = styledComponents.form`
    // border:1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#99d2eb,#999ceb);
`;
export const Input = styledComponents.div`
    // border:1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding:10px;
    width:60%;
    @media (max-width:750px){
        width:70%;
    }
    @media (max-width:600px){
        width:75%;
    }
    @media (max-width:450px){
        width:90%;
    }
`;
export const Label = styledComponents.label`
    padding:10px 30px;
    font-size:1.2em;
    text-shadow: 1px 1px 2px ${colors.shadow};
`
export const Input2 = styledComponents.input`
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 2px solid ${colors.shadow};
    height:30px;
    background-color: ${colors.blueSky};
    padding:10px;
    transition:150ms;
    border-radius:5px;
    &:hover {
        border-top: 2px solid ${colors.shadow};
        height:40px;
    }
    &::placeholder{
        color:black;
        font-style:italic;
        opacity:0.6;
    }
    &:focus{
        outline:none;
        background-color: ${colors.orange};
        border-radius: 5px;
        border-bottom:none;
        border-top:none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  @media (max-width:1000px){
      &::placeholder{
          font-size:0.8em;
      }
  }
`
export const Error = styledComponents.span`
    margin-top: 10px;
    font-size: 0.7em;
    color: red;
    text-align:center;
    // border:1px solid red;
    animation: 700ms ${errorMove} linear;
    @media (max-width:450px){
        font-size:0.6em;
    }
`
export const InputContainer = styledComponents.div`
    // border:1px solid blue;
    padding:30px;
    display: flex;
    flex-direction: column;
    width:40%;
    height:auto;
    @media (max-width:1000px){
        width:50%;
    }
    @media (max-width:750px){
        width:60%;
    }
    @media (max-width:600px){
        width:70%;
    }
    @media (max-width:450px){
        width:85%;
    }
`;
export const Validate = styledComponents.input`
    border-radius:5px;
    padding:5px 20px;
    font-size:1.1em;
    border:none;
    width:auto;
    margin-top:20px;
    margin-bottom:40px;
    transform:scale(1);
    transition:500ms;
    background-color: ${colors.orange};
    box-shadow: 2px 2px 5px ${colors.shadow};
    &:hover{
        cursor:pointer;
        background-color: ${colors.pink};
        transform:scale(1.2);
    }
    &:focus {
        border:2px solid red;
    } 
`;
export const Wrapper = styledComponents.div`
    padding-top:60px;
    transition: 500ms;
`
export const SuccessWords = styledComponents.span`
    animation: 1.5s ${errorMove} linear;
`
export const IsSkillChoosen = styledComponents.span`
    border-radius:5px;
    color:red;
    font-size:0.7em;
    text-align:center;
    padding:10px;
`