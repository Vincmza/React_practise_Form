import React, { useContext } from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
import {FaCircle}from "react-icons/fa"
import styledComponents from "styled-components";
import colors from "../../style/colors";

//array for dot colors in relation to user's level
const dotColors = [
	{name: "Débutant", color: "green"},
	{name: "Intermédiaire", color: "yellow"},
	{name: "Confirmé", color: "orange"},
	{name: "Expert", color: "red"}
]
const findRightColor = (skill)=>{
	for(let i = 0; i<dotColors.length; i++){
		if(skill === dotColors[i].name) return {color:dotColors[i].color}
	}
}
const Wrapper = styledComponents.div`
	display:flex;
	justify-content: space-around;
	border:1px solid purple;
`
const SkillWrapper = styledComponents.div`
	border:1px solid green;
	width:40%;
	padding:30px;
`
const Title = styledComponents.h1`
	text-align: center;
	font-size: 1.2em;
	margin-bottom:10px;
	text-shadow: 1px 1px 1px ${colors.shadow};
`
const List = styledComponents.ul`
	display:flex;
	flex-direction:column;
	align-items:center;
`
const LiContainer = styledComponents.li`
	border:1px solid red;
	padding:10px;
	margin-bottom:10px;
	display:flex;
	align-items:center;
`
const SkillName = styledComponents.span`
	margin-right:10px;
`
const Level = styledComponents.span`
	margin-right:10px;
`
const Icon = styledComponents(FaCircle)`
	font-size:0.7em;
`
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
									<SkillName>{skill.id} : </SkillName>
									<Level>{skill.level === "" ? (<></>):(<> {skill.level}</>)}</Level>
									{dotColors.find(elem => elem.name === skill.level)&&
										<Icon style={findRightColor(skill.level)}/>
									}
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
						<h1>Les technologies backend que je connais :</h1>
						<ul>
							{backEndSkills.map((skill) => (
								<li key={skill.id} value={skill}>
									<span>{skill.id}</span>
									<span>{skill.level === "" ? (<></>):(<> : {skill.level}</>)}</span>
								</li>
							))}
						</ul>
					</>
				) : (
					<></>
				)}
			</SkillWrapper>
			
		</Wrapper>
	);
};

export default DisplaySkills;
