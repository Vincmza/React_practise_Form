import React from "react";
import { useNavigate } from "react-router-dom";
import {DiAptana} from "react-icons/di"
//style
import {Wrapper, IconContainer, ImageContainer, Image, HeadWrapper, Title, TextHeader, TextDown, Button}from"../style/PresentationStyle"
//Image
import img from "../assets/form.png";

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
					Vous souhaitez renseigner les compétences qui sont les vôtres
                    à travers cette interface douce et sympathique ?
				</TextHeader>
			</HeadWrapper>
			<ImageContainer>
				<Image src={img} />
			</ImageContainer>
			<TextDown>
				Il vous suffit simplement de cliquer sur ce bouton magique juste en dessous
			</TextDown>
			<Button type="button" value="Accéder au formulaire" onClick={handleNav} />
		</Wrapper>
	);
};

export default Presentation;
