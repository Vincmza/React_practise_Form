import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents, { keyframes } from 'styled-components';
import {FaRadiationAlt} from "react-icons/fa"
import colors from '../../style/colors';

const Explosion = keyframes`
    to {
        transform:scale(2);
        color:yellow;
        background-color:black;
    }
`
const BlinkRed = keyframes`
    to {
        color:red;
        text-shadow:1px 1px 2px red;
    }
`

const Wrapper = styledComponents.div`
    padding:60px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    // border:1px solid yellow;
    height: 100%;
    width:100%;
    @media (max-width:400px){
        padding:60px 0px;
    }
`
const ButtonContainer = styledComponents.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    // border:1px solid green;
    padding:30px;
    height:30%;
`
const Msg = styledComponents.h1`
    padding:10px 0px;
    text-align:center;
    // border:1px solid red;
    margin-bottom:20px;
    font-size:1.5em;
    animation: 500ms ${BlinkRed} linear infinite;
    width:100%;
`
const BackButton = styledComponents.input`
    padding:5px 20px;
    border:none;
    background-color: ${colors.orange};
    border-radius:10px;
    box-shadow: 2px 2px 5px ${colors.shadow};
    transform:scale(1);
    transition:500ms;
    &:hover {
        cursor:pointer;
        background-color:${colors.pink};
        transform:scale(1.3);
    }
`
const Container = styledComponents.div`
    display:flex;
    justify-content:center;
    padding:60px;
    // border:1px solid red;
    border-radius:100%;
    height:30%;
`
const Radioactive = styledComponents(FaRadiationAlt)`
    color:red;
    font-size:4em;
    transform: scale(1);
    animation: 1.5s ${Explosion} linear infinite;
    border-radius:200px;
`


const Error = () => {
    return (
        <Wrapper>
            <ButtonContainer>
                <Msg>Erreur radioactive</Msg>
                <Link to="/"><BackButton type="button" value="Retour"/></Link>
            </ButtonContainer>
            <Container>
                <Radioactive/>
            </Container>
        </Wrapper>
    );
};

export default Error;