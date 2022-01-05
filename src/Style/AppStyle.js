import styledComponents from "styled-components";

export const Form = styledComponents.form`
display: flex;
flex-direction: column;
align-items: center;
border:1px solid green
`;
export const Input = styledComponents.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;
margin-top: 10px;
margin-bottom: 10px;
width:45%;
`;
export const InputContainer = styledComponents.div`
display: flex;
flex-direction: column;
width:60%;
height:auto;
border:1px solid red;
`;
export const Validate = styledComponents.input`
width:auto;
`;