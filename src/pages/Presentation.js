import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents, { keyframes } from "styled-components";
import {DiAptana} from "react-icons/di"
//Image
import img from "../assets/form.png";
//Colors
import colors from "../style/colors";

const Wrapper = styledComponents.div`
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blueSky}
`;
const iconRotate = keyframes`
    to {
        transform:rotate(0deg);
    }
`
const IconContainer = styledComponents.div`
    display:flex;
    justify-content:center;
    font-size:2.5em;
    transform: rotate(360deg);
    color: ${colors.shadow};
    animation: 3s ${iconRotate} forwards;
`
const imgMove = keyframes`
    to {
        transform: translateX(0);
    }
`
const ImageContainer = styledComponents.div`
    width:25%;
    max-width:200px;
    height:200px;
    transform: translateX(-100vw);
    animation: 2s ${imgMove} cubic-bezier(.32,1.14,.44,1.18) forwards;
`;
const Image = styledComponents.img`
    object-fit: cover;
    width:100%;
    height:100%;
`;
const HeadWrapper = styledComponents.div`
    padding:10px;
`;
const Title = styledComponents.h1`
    padding:30px;
    text-align:center;
    font-size:2.5em;
    text-shadow: 1px 1px 2px ${colors.shadow};
`;
const TextHeader = styledComponents.p`
    text-align:center;
    padding:10px;
    font-size:1em;
`;
const TextDown = styledComponents.p`
    text-align:center;
    padding:20px;
    font-size:1em;
`;
const Button = styledComponents.input`
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
`;
const Presentation = () => {
	let navigate = useNavigate();
	const handleNav = () => {
		navigate("/form");
	};
	return (
		<Wrapper>
            <IconContainer>
                <DiAptana/>
            </IconContainer>
			<HeadWrapper>
				<Title>
					Un formulaire en bonne et due <span>Form</span>
				</Title>
				<TextHeader>
					Vous souhaitez renseigner les compétences qui sont les vôtres,
				</TextHeader>
				<TextHeader>
                    à travers cette interface douce et sympathique ?
                </TextHeader>
			</HeadWrapper>
			<ImageContainer>
				<Image src={img} />
			</ImageContainer>
			<TextDown>
				il vous suffit simplement de cliquer sur ce bouton magique juste en dessous
			</TextDown>
			<Button type="button" value="Accéder au formulaire" onClick={handleNav} />
		</Wrapper>
	);
};

export default Presentation;
