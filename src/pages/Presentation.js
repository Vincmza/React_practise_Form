import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
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
    border:1px solid green;
    background-color: ${colors.blueSky}
`;
const ImageContainer = styledComponents.div`
    width:25%;
    max-width:200px;
    height:200px;
`;
const Image = styledComponents.img`
    object-fit: cover;
    width:100%;
    height:100%;
`;
const HeadWrapper = styledComponents.div`
    padding:30px;
`;
const Title = styledComponents.h1`
    padding:30px;
    text-align:center;
    font-size:1.9em;
`;
const TextHeader = styledComponents.p`
    text-align:center;
    padding:10px;
    font-size:1.5em;
`;
const TextDown = styledComponents.p`
    text-align:center;
    padding:30px;
    font-size:1.5em;
`;
const ButtonContainer = styledComponents.div`
    padding:30px;
`;
const Button = styledComponents.input`
    transform: scale(1);
    transition:500ms transform;
    padding:10px 15px;
    border: none;
    border-radius:10px;
    box-shadow: 2px 2px 5px ${colors.shadow};
    background-color: ${colors.orange};
    &:hover{
        transform:scale(1.3);
        cursor: pointer;
        background-color: ${colors.redSoft};
    }
`;

const Presentation = () => {
	let navigate = useNavigate();
	const handleNav = () => {
		navigate("/form");
	};
	return (
		<div>
			<Wrapper>
				<HeadWrapper>
					<Title>
						Un formulaire en bonne et due <span>Form</span>
					</Title>
					<TextHeader>
						Vous souhaitez renseigner les compétences qui sont les vôtres,
					</TextHeader>
					<TextHeader>à travers cette petite interface toute mignonne ?</TextHeader>
				</HeadWrapper>
				<ImageContainer>
					<Image src={img} />
				</ImageContainer>
				<TextDown>
					il vous suffit simplement de cliquer sur ce bouton magique juste en dessous
				</TextDown>
				<ButtonContainer>
					<Button type="button" value="Accéder au formulaire" onClick={handleNav} />
				</ButtonContainer>
			</Wrapper>
		</div>
	);
};

export default Presentation;
