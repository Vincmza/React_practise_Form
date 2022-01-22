import React, { useContext } from "react";
import { UserContext, FrontSkillsContext, BackSkillsContext } from "../context/index";
import styledComponents from "styled-components";
import colors from "../style/colors";
import logo from "../assets/form.png"

const Wrapper = styledComponents.div`
    border:1px solid red;
    padding:30px;
    display:flex;
    flex-direction:column;
`;
const GlobalTitle = styledComponents.h1`
    text-align: center;
    padding:20px;
    font-size:1.8em;
    text-shadow: 1px 1px 2px ${colors.shadow};
`;
const GlobalTitleContainer = styledComponents.div`

`;
const IdentityAndSkills = styledComponents.div`
    border:1px solid purple;
    display:flex;
    justify-content:space-around;
    width:100%;
    padding:10px;
    margin-top:10px;
`
const IdentityTitle = styledComponents.h2`
    font-size:1.5em;
    text-align:center;
    padding:20px;
    border:1px solid yellow;
    text-shadow: 1px 1px 2px ${colors.shadow};
`;
const IdentityContainer = styledComponents.div`
    border:1px solid green;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`;
const ImgContainer = styledComponents.div`
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
`
const Img = styledComponents.img`
    width:150px;
    height:100%;
    object-fit:contain;
`
const IdCard = styledComponents.p`
    padding:10px
`;
const SkillsContainer = styledComponents.div`
    border:1px solid yellow;
    padding:20px;
`;
const Identity = styledComponents.div`
    border:1px solid black;
    padding:10px;
    margin-top:30px;
`;
const SkillTitle = styledComponents.h2`
    text-align:center;
    font-size:1.5em;
    padding:20px;
    text-shadow: 1px 1px 2px ${colors.shadow};
`;
const TypeTitle = styledComponents.h3`
    font-size:1.2em;
    padding:20px;
    border:1px solid yellow;
    text-shadow: 1px 1px 2px ${colors.shadow};
`;
const TypeContainer = styledComponents.div`
    border:1px solid blue;
    padding:20px;
`;
const List = styledComponents.ul`
    border:1px solid green;
    padding:10px
`;
const Li = styledComponents.li`
    padding:10px;
`;
const Level = styledComponents.p`
    padding:10px 0px;
`;
const NoSkill = styledComponents.h3`

`;
const Confirmation = () => {
	const { userData } = useContext(UserContext);
	const { frontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills } = useContext(BackSkillsContext);
	//Display the skills according the level choosen
	const skillsToDisplay = (type, level) => {
		if (type === "front") {
			return (
				<>
					<List>
						{frontEndSkills
							.filter((skill) => skill.level === level)
							.map((item) => (
								<Li key={item.id} value={item.id}>
									<span>{item.id}</span>
								</Li>
							))}
					</List>
				</>
			);
		} else if (type === "back") {
			return (
				<>
					<List>
						{backEndSkills
							.filter((skill) => skill.level === level)
							.map((item) => (
								<Li key={item.id} value={item.id}>
									<span>{item.id}</span>
								</Li>
							))}
					</List>
				</>
			);
		}
	};
	//Check the level choosen previously
	const checkLevel = (type, level) => {
		if (type === "front") {
			return (
				<>
					{frontEndSkills.some((item) => item.level === level) && (
						<div>
							<Level>Vous êtes {level} en :</Level>
							{skillsToDisplay(type, level)}
						</div>
					)}
				</>
			);
		} else if (type === "back") {
			return (
				<>
					{backEndSkills.some((item) => item.level === level) && (
						<div>
							<Level>Vous êtes {level} en :</Level>
							{skillsToDisplay(type, level)}
						</div>
					)}
				</>
			);
		}
	};
	return (
		<Wrapper>
			<GlobalTitleContainer>
				<GlobalTitle>Résumons ensemble vos informations</GlobalTitle>
			</GlobalTitleContainer>
			<IdentityAndSkills>
				<IdentityContainer>
					<IdentityTitle>Vos données personnelles :</IdentityTitle>
					<Identity>
						<IdCard>
							Vous êtes : {userData.nom.toUpperCase()} {userData.prenom}
						</IdCard>
						<IdCard>Votre date de naissance est le : {userData.birthday}</IdCard>
						<IdCard>L'email que vous utilisez est : {userData.email}</IdCard>
						{userData.telephone && (
							<IdCard>Vous êtes joignable au : {userData.telephone}</IdCard>
						)}
						{userData.lien && <IdCard>Votre compte github : {userData.lien}</IdCard>}
					</Identity>
                    <ImgContainer>
                        <Img src={logo} alt=""/>
                    </ImgContainer>
				</IdentityContainer>
				<SkillsContainer>
					<SkillTitle>Voici vos compétences :</SkillTitle>
					<TypeContainer>
						{frontEndSkills.length > 0 ? (
							<>
								<TypeTitle>En ce qui concerne la partie frontend :</TypeTitle>
								{checkLevel("front", "Débutant")}
								{checkLevel("front", "Intermédiaire")}
								{checkLevel("front", "Confirmé")}
								{checkLevel("front", "Expert")}
							</>
						) : (
							<>
								<NoSkill>Vous n'avez renseigné aucune compétence frontend</NoSkill>
							</>
						)}
					</TypeContainer>
					<TypeContainer>
						{backEndSkills.length > 0 ? (
							<>
								<TypeTitle>En ce qui concerne la partie backend :</TypeTitle>
								{checkLevel("back", "Débutant")}
								{checkLevel("back", "Intermédiaire")}
								{checkLevel("back", "Confirmé")}
								{checkLevel("back", "Expert")}
							</>
						) : (
							<>
								<NoSkill>Vous n'avez renseigné aucune compétence backend</NoSkill>
							</>
						)}
					</TypeContainer>
				</SkillsContainer>
			</IdentityAndSkills>
		</Wrapper>
	);
};

export default Confirmation;
