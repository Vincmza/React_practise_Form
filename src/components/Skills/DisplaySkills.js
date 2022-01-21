import React, { useContext } from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
import { FaCircle, FaArrowRight } from "react-icons/fa";
import styledComponents, { keyframes } from "styled-components";
import colors from "../../style/colors";

//array for dot colors in relation to user's level
const dotColors = [
	{ name: "Débutant", color: "green" },
	{ name: "Intermédiaire", color: "yellow" },
	{ name: "Confirmé", color: "orange" },
	{ name: "Expert", color: "red" },
];
const findRightColor = (skill) => {
	for (let i = 0; i < dotColors.length; i++) {
		if (skill === dotColors[i].name) return { color: dotColors[i].color };
	}
};
const liDisplay = keyframes`
	to {
		opacity: 1;
	}
`
const Wrapper = styledComponents.div`
	display:flex;
	justify-content: space-around;
	// border:1px solid purple;
`;
const SkillWrapper = styledComponents.div`
	// border:1px solid green;
	width:40%;
	padding:30px;
`;
const Title = styledComponents.h1`
	text-align: center;
	font-size: 1.3em;
	margin-bottom:20px;
	text-shadow: 1px 1px 1px ${colors.shadow};
`;
const List = styledComponents.ul`
	display:flex;
	flex-direction:column;
	align-items:center;
`;
const LiContainer = styledComponents.li`
	// border:1px solid red;
	border-radius:5px;
	padding:10px;
	margin-bottom:10px;
	display:flex;
	align-items:center;
	background-color:${colors.orange};
	opacity:0;
	animation: 1.5s ${liDisplay} forwards;
`;
const SkillName = styledComponents.span`
	margin-right:10px;
`;
const Level = styledComponents.span`
	margin-right:10px;
`;
const DotIcon = styledComponents(FaCircle)`
	font-size:0.7em;
`;
const ArrowIcon = styledComponents(FaArrowRight)`
	font-size:0.6em;
`;
const DisplaySkills = () => {
	const { frontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills } = useContext(BackSkillsContext);
	return (
		<Wrapper>
			<SkillWrapper>
				{frontEndSkills.length > 0 ? (
					<>
						<Title>Les technologies frontend que je connais :</Title>
						<List>
							{frontEndSkills.map((skill) => (
								<LiContainer key={skill.id} value={skill}>
									<SkillName>{skill.id}</SkillName>
									<Level>
										{skill.level === "" ? (
											<></>
										) : (
											<>
												{" "}
												<ArrowIcon /> {skill.level}
											</>
										)}
									</Level>
									{dotColors.find((elem) => elem.name === skill.level) && (
										<DotIcon style={findRightColor(skill.level)} />
									)}
								</LiContainer>
							))}
						</List>
					</>
				) : (
					<></>
				)}
			</SkillWrapper>
			<SkillWrapper>
				{backEndSkills.length > 0 ? (
					<>
						<Title>Les technologies backend que je connais :</Title>
						<List>
							{backEndSkills.map((skill) => (
								<LiContainer key={skill.id} value={skill}>
									<SkillName>{skill.id}</SkillName>
									<Level>
										{skill.level === "" ? (
											<></>
										) : (
											<>
												{" "}
												<ArrowIcon /> {skill.level}
											</>
										)}
									</Level>
									{dotColors.find((elem) => elem.name === skill.level) && (
										<DotIcon style={findRightColor(skill.level)} />
									)}
								</LiContainer>
							))}
						</List>
					</>
				) : (
					<></>
				)}
			</SkillWrapper>
		</Wrapper>
	);
};

export default DisplaySkills;
