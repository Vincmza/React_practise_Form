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
    &::placeholder{
        color:black;
        font-style:italic;
    }
    &:focus{
        outline:none;
        background-color: ${colors.orange};
        border-radius: 5px;
    }
`
export const Error = styledComponents.span`
    margin-top: 10px;
    font-size: 0.7em;
    color: red;
    display:flex;
    justify-content: center;
    // border:1px solid red;
    animation: 700ms ${errorMove} linear;
`
export const InputContainer = styledComponents.div`
    // border:1px solid blue;
    padding:30px;
    display: flex;
    flex-direction: column;
    width:40%;
    height:auto;
`;
export const Validate = styledComponents.input`
    width:auto;
    margin-top:20px;
    margin-bottom:20px;
`;
export const Wrapper = styledComponents.div`
    transition: 500ms;
`