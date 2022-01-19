import React, { useContext } from "react";
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
import styledComponents from "styled-components";

const Wrapper = styledComponents.div`
	display:flex;
	justify-content: space-around;
	border:1px solid purple;
`
const SkillWrapper = styledComponents.div`
	border:1px solid green;
`
const DisplaySkills = () => {
	const { frontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills } = useContext(BackSkillsContext);
	return (
		<Wrapper>
			<SkillWrapper>
				{frontEndSkills.length > 0 ? (
					<>
						<p>Les technologies frontend que je connais :</p>
						<ul className="front-skills-container">
							{frontEndSkills.map((skill) => (
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
			<SkillWrapper>
				{backEndSkills.length > 0 ? (
					<>
						<p>Les technologies backend que je connais :</p>
						<ul className="back-skills-container">
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
