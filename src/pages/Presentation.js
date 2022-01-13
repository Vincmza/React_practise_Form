import React from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";
//Image
import img from "../assets/form.png";
//Colors
import colors from "../style/colors";
const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:1px solid green;
    background-color: ${colors.blueSky}
`;
const ImageContainer = styledComponents.div`
    padding:30px
    width:220px;
    height:220px;
`;
const Image = styledComponents.img`
    object-fit: cover;
    width:100%;
    height:100%;
`;
const HeadWrapper = styledComponents.div`
    padding:30px;
    border:1px solid yellow;
`;
const Title = styledComponents.h1`
    padding:30px;
    text-align:center;
`;
const TextHeader = styledComponents.p`
    text-align:center;
    padding:10px;
`;
const TextDown = styledComponents.p`
    text-align:center;
    padding:10px;
`;
const ButtonContainer = styledComponents.div`
    padding:30px;
`;
const Button = styledComponents.input`
    padding:10px 15px;
    border: none;
    border-radius:10px;
    box-shadow: 2px 2px 5px ${colors.shadow};
    background-color: ${colors.orange}
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
					<Button type="button" value="Remplir le formulaire" onClick={handleNav} />
				</ButtonContainer>
			</Wrapper>
		</div>
	);
};

export default Presentation;
