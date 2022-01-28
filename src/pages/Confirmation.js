import React, { useContext,useState  } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, FrontSkillsContext, BackSkillsContext } from "../context/index";
//component
import Loader from "../components/Loader";
import {Wrapper,GlobalTitle,GlobalTitleContainer,IdentityAndSkills,IdentityTitle,IdentityContainer,Identity,IdCard,IdTitle,IdContent,SkillsContainer,SkillTitle,TypeTitle,TypeContainer,List,Li,Level,NoSkill,Icon,ButtonContainer,ResetButton,Sentence} from "../style/Pages/ConfirmationStyle"

//variable allowing to build an array upon the folder assets containing all icons in 
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

const Confirmation = () => {
	const [isLoading, setIsLoading]= useState(false)
	const { userData, setUserData } = useContext(UserContext);
	const { frontEndSkills, setFrontEndSkills } = useContext(FrontSkillsContext);
	const { backEndSkills, setBackEndSkills } = useContext(BackSkillsContext);
	let navigate = useNavigate()
	const displayLoader = ()=>{
		setIsLoading((pv)=>(!pv))
		setTimeout(() => {
			resetAll()
		}, 3000);
	}
	const resetAll = ()=>{
		navigate("/")
		setFrontEndSkills([])
		setBackEndSkills([])
		setUserData([])
	}
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
					<IdentityTitle>Vos données personnelles</IdentityTitle>
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
				</IdentityContainer>
				<SkillsContainer>
					<SkillTitle>Voici vos compétences</SkillTitle>
					<TypeContainer>
						{frontEndSkills.length > 0 ? (
							<>
								<TypeTitle>En ce qui concerne la partie frontend</TypeTitle>
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
								<TypeTitle>En ce qui concerne la partie backend</TypeTitle>
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
			<ButtonContainer>
				{isLoading && <Loader/>}
				<ResetButton type="button" value="Réinitialiser" onClick={displayLoader}/>
			</ButtonContainer>
			<Sentence>
				<span>Petite interface codée en React, merci d'avoir joué le jeu</span>
			</Sentence>
		</Wrapper>
	);
};

export default Confirmation;
