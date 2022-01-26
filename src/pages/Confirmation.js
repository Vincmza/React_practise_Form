import React, { useContext } from "react";
import { UserContext, FrontSkillsContext, BackSkillsContext } from "../context/index";
import styledComponents from "styled-components";
import colors from "../style/colors";

const Wrapper = styledComponents.div`
    // border:1px solid red;
    padding:30px;
    display:flex;
    flex-direction:column;
`;
const GlobalTitle = styledComponents.h1`
	width:40%;
    text-align: center;
    padding:20px;
    font-size:1.8em;
    text-shadow: 1px 1px 2px ${colors.shadow};
	// border:1px solid black;
`;
const GlobalTitleContainer = styledComponents.div`
	width:100%;
	display:flex;
	justify-content:center;
`;
const IdentityAndSkills = styledComponents.div`
    // border:1px solid purple;
    display:flex;
    justify-content:space-around;
    width:100%;
    padding:10px;
    margin-top:10px;
`;
const IdentityTitle = styledComponents.h2`
    font-size:1.5em;
    text-align:center;
    padding:20px;
    // border:1px solid yellow;
    text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.redLight};
	border-radius:10px;
`;
const IdentityContainer = styledComponents.div`
	width:40%;
	border-radius:10px;
    padding:20px;
    display:flex;
    flex-direction:column;
    background-color: ${colors.orangeLight};
	box-shadow: 2px 2px 5px ${colors.shadow};
`;
const ImgContainer = styledComponents.div`
    width:100%;
    height:200px;
    display:flex;
    justify-content:center;
`;
const Img = styledComponents.img`
    width:200px;
    height:100%;
    object-fit:contain;
`;
const Identity = styledComponents.div`
    // border:1px solid black;
    padding:10px;
    margin-top:10px;
`;
const IdCard = styledComponents.div`
	margin-top:10px;
	display:flex;
	flex-direction:column;
	// border:1px solid blue;
`;
const IdTitle = styledComponents.h3`
	text-shadow: 1px 1px 2px ${colors.shadow};
	font-size:1.2em;
	padding:10px;
	background-color: ${colors.green};
	border-radius: 10px;
`
const IdContent = styledComponents.span`
	// border:1px solid red;
	padding:10px 20px;
	margin-top:10px;
`
const SkillsContainer = styledComponents.div`
    // border:1px solid yellow;
    padding:20px;
	background-color: ${colors.orangeLight};
	border-radius:10px;
	width:40%;
	box-shadow: 2px 2px 5px ${colors.shadow};
`;
const SkillTitle = styledComponents.h2`
    text-align:center;
    font-size:1.5em;
    padding:20px;
    text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.redLight};
	border-radius:10px;
	margin-bottom:10px;
`;
const TypeTitle = styledComponents.h3`
    font-size:1.2em;
    padding:10px;
    // border:1px solid yellow;
    text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.green};
	border-radius:10px;
	text-align:center;
`;
const TypeContainer = styledComponents.div`
    // border:1px solid blue;
    padding:20px;
`;
const List = styledComponents.ul`
    border:1px solid ${colors.green};
    padding:10px;
	border-radius:10px;
`;
const Li = styledComponents.li`
    padding:10px;
	display:flex;
	align-items:center;
`;
const Level = styledComponents.p`
    padding:10px 0px;
`;
const NoSkill = styledComponents.h3`
`;
const Icon = styledComponents.img`
	width:25px;
	height:25px;
	margin-left:10px;
	object-fit:contain;
`
let importAll = (r) => r.keys().map(r);
;
const [
	angular,
	css,
	ember,
	html,
	js,
	react,
	vue,
	nodejs,
	php,
	postgresql,
	python,
	ruby,
	sequelize,
	sql,
	symfony
] = importAll(require.context("../assets", true, /\.(png|jpe?g|svg|webp|)$/));
const pathNames = {
	angular,
	css,
	ember,
	html,
	js,
	react,
	vue,
	nodejs,
	php,
	postgresql,
	python,
	ruby,
	sequelize,
	sql,
	symfony
};
console.log(pathNames)
const Confirmation = () => {
	const { userData } = useContext(UserContext);
	const { frontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills } = useContext(BackSkillsContext);
	//Display the skills according the level choosen
	console.log(frontEndSkills);
	const skillsToDisplay = (type, level) => {
		if (type === "front") {
			return (
				<>
					<List>
						{frontEndSkills
							.filter((skill) => skill.level === level)
							.map((item) => (
								<Li key={item.id} value={item.id}>
									<span>{item.label}</span>
									<Icon
										src={pathNames[item.id]}
									/>
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
									<span>{item.label}</span>
									<Icon
										src={pathNames[item.id]}
									/>
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
							<IdTitle>Vous êtes :</IdTitle> 
							<IdContent>{userData.nom.toUpperCase()} {userData.prenom}</IdContent>
						</IdCard>
						
						<IdCard>
							<IdTitle>Votre date de naissance est le : </IdTitle>
							<IdContent>{userData.birthday}</IdContent>
						</IdCard>

						<IdCard>
							<IdTitle>L'email que vous utilisez est : </IdTitle>
							<IdContent>{userData.email}</IdContent>
						</IdCard>

						{userData.telephone && (
							<IdCard>
								<IdTitle>Vous êtes joignable au : </IdTitle>
								<IdContent>{userData.telephone}</IdContent>
							</IdCard>
						)}
						{userData.lien && 
							<IdCard>
								<IdTitle>Votre compte github : </IdTitle>
								<IdContent>{userData.lien}</IdContent>
							</IdCard>}
					</Identity>
					<ImgContainer>
						{/* <Img src={} alt="" /> */}
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
