import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//components
import { SkillInput } from "./Inputs";
//context
import { FrontSkillsContext, BackSkillsContext } from "../../context/index";
//style
import {WrapperContainer,BackButton,InputBack,Wrapper,SkillContainer,TitleContainer,Title,Header,HideAndDisplayContainer,HideAndDisplay,Boxes,ImgContainer,Img,LabelContainer}from "../../style/Skills/SkillsInfosStyle"
//front skill icons
import html from "../../assets/front/html.png"
import css from "../../assets/front/css3.png"
import javascript from "../../assets/front/js.png"
import react from "../../assets/front/react.png"
import vue from "../../assets/front/vue.png"
import angular from "../../assets/front/angular.svg"
import ember from "../../assets/front/ember.png"
//back skills icons
import php from "../../assets/back/php.png"
import ruby from "../../assets/back/ruby.png"
import symfony from "../../assets/back/symfony.png"
import node from "../../assets/back/nodejs2.jpg"
import python from "../../assets/back/python.png"
import sql from "../../assets/back/sql-logo.png"
import sequelize from "../../assets/back/sequelize.png"
import postgre from "../../assets/back/postgre.png"

const SkillsInfosForm = () => {
	const { frontEndSkills, setFrontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills, setBackEndSkills } = useContext(BackSkillsContext);
	let navigate = useNavigate()
	const handleBack = ()=>{
		navigate("/")
	}
	const availableFrontSkills = [
		{ id: "HTML5", label: "HTML5", type: "frontend", image: html },
		{ id: "CSS3", label: "CSS3", type: "frontend", image: css },
		{ id: "Javascript", label: "Javascript", type: "frontend", image: javascript },
		{ id: "React.js", label: "React.js", type: "frontend", image: react },
		{ id: "Vue.js", label: "Vue.js", type: "frontend", image: vue },
		{ id: "Angular", label: "Angular", type: "frontend", image: angular },
		{ id: "Ember", label: "Ember", type: "frontend", image: ember },
	];
	const availableBackSkills = [
		{ id: "PHP", label: "PHP", type: "backend", image: php },
		{ id: "Ruby", label: "Ruby", type: "backend", image: ruby },
		{ id: "Symfony", label: "Symfony", type: "backend", image: symfony },
		{ id: "Node.js", label: "Node.js", type: "backend", image: node },
		{ id: "Python", label: "Python", type: "backend", image: python },
		{ id: "SQL", label: "SQL", type: "backend", image: sql },
		{ id: "Sequelize", label: "Sequelize", type: "backend", image: sequelize },
		{ id: "PostgreSQL", label: "PostegreSQL", type: "backend", image: postgre },
	];
	//STATE ALLOWS TO EITHER DISPLAY OR HIDE SKILLS
	const [displayListFront, setDisplayListFront] = useState(false);
	const [displayListBack, setDisplayListBack] = useState(false);
	//FUNCTION TO DISPLAY OR HIDE FRONT SKILLS
	const handleListFront = () => {
		setDisplayListFront((pv) => !pv);
	};
	//FUNCTION TO DISPLAY OR HIDE BACK SKILLS
	const handleListBack = () => {
		setDisplayListBack((pv) => !pv);
	};
	//STORING FRONT END SKILLS
	const handleCheckFront = (e) => {
		if (e.target.checked === true) {
			if (frontEndSkills.some((elem) => elem.id === e.target.value) === false) {
				setFrontEndSkills((previousValue) => [
					...previousValue,
					{ id: e.target.value, level: "" },
				]);
			}
		} else {
			const array = [...frontEndSkills];
			const index = array.findIndex((item) => item.id === e.target.value);
			array.splice(index, 1);
			setFrontEndSkills(array);
		}
	};
	//STORING BACKEND SKILLS
	const handleCheckBack = (e) => {
		if (e.target.checked === true) {
			if (backEndSkills.some((elem) => elem.id === e.target.value) === false) {
				setBackEndSkills((previousValue) => [
					...previousValue,
					{ id: e.target.value, level: "" },
				]);
			}
		} else {
			const array = [...backEndSkills];
			const index = array.findIndex((item) => item.id === e.target.value);
			array.splice(index, 1);
			setBackEndSkills(array);
		}
	};
	return (
		<WrapperContainer>
			<BackButton to="/">
				<InputBack type="button" value="Retour" onClick={handleBack} />
			</BackButton>
			<Wrapper>
				<SkillContainer>
					{displayListFront === false ? (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>frontend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Afficher"
										onClick={handleListFront}
									/>
								</HideAndDisplayContainer>
							</Header>
						</>
					) : (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>frontend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Masquer"
										onClick={handleListFront}
									/>
								</HideAndDisplayContainer>
							</Header>
							<Boxes>
								{availableFrontSkills.map((skill, index) => (
									<SkillInput
										anim={150 * (index + 1)}
										key={skill.id}
										name={skill.id}
										value={skill.id}
										skilltype={skill.type}
										onChange={handleCheckFront}
										checked={frontEndSkills.some(
											(elem) => elem.id === skill.id
										)}
									>
										{<LabelContainer>
											<div>{skill.label}</div>
											<ImgContainer><Img src={skill.image} alt={skill.id}/></ImgContainer>
										</LabelContainer>}
									</SkillInput>
								))}
							</Boxes>
						</>
					)}
				</SkillContainer>

				<SkillContainer>
					{displayListBack === false ? (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>backend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Afficher"
										onClick={handleListBack}
									/>
								</HideAndDisplayContainer>
							</Header>
						</>
					) : (
						<>
							<Header>
								<TitleContainer>
									<Title>Compétences</Title>
									<Title>backend</Title>
								</TitleContainer>
								<HideAndDisplayContainer>
									<HideAndDisplay
										type="button"
										value="Masquer"
										onClick={handleListBack}
									/>
								</HideAndDisplayContainer>
							</Header>
							<Boxes>
								{availableBackSkills.map((skill, index) => (
									<SkillInput
										anim={150 * (index + 1)}
										key={skill.id}
										name={skill.id}
										value={skill.id}
										skilltype={skill.type}
										onChange={handleCheckBack}
										checked={backEndSkills.some((elem) => elem.id === skill.id)}
									>
										{<LabelContainer>
											<div>{skill.label}</div>
											<ImgContainer><Img src={skill.image} alt={skill.id}/></ImgContainer>
										</LabelContainer>}
									</SkillInput>
								))}
							</Boxes>
						</>
					)}
				</SkillContainer>
			</Wrapper>
		</WrapperContainer>
	);
};

export default SkillsInfosForm;
