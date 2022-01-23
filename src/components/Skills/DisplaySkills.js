import React, { useContext } from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
import {Wrapper,SkillWrapper,Title,List,LiContainer,SkillName,Level,DotIcon,ArrowIcon,IsLevelContainer,IsLevel} from "../../style/Skills/DisplaySkillsStyle"

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
									<SkillName>{skill.label}</SkillName>
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
						<IsLevelContainer>
							{frontEndSkills
							.filter(elem=>elem.level === "")
							.map(elem=>(<IsLevel key={elem}>Pensez à renseigner un niveau en {elem.label}</IsLevel>))
							}
						</IsLevelContainer>
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
									<SkillName>{skill.label}</SkillName>
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
						<IsLevelContainer>
							{backEndSkills
							.filter(elem=>elem.level === "")
							.map(elem=>(<IsLevel key={elem}>Pensez à renseigner un niveau en {elem.label}</IsLevel>))
							}
						</IsLevelContainer>
						
					</>
				) : (
					<></>
				)}
			</SkillWrapper>
		</Wrapper>
	);
};

export default DisplaySkills;
