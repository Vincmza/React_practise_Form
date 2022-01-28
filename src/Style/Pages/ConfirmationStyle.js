import styledComponents, { keyframes } from "styled-components";
//style
import colors from "../colors";

export const theArrival = keyframes`
	to{
		transform: translateX(0%);
	}
`
export const Wrapper = styledComponents.div`
    // border:1px solid red;
    padding:30px;
    display:flex;
    flex-direction:column;
	@media (max-width:490px){
		padding:30px 0px;
	}
`;
export const GlobalTitle = styledComponents.h1`
	width:40%;
    text-align: center;
    padding:20px;
    font-size:1.8em;
    text-shadow: 1px 1px 2px ${colors.shadow};
	box-shadow: 2px 2px 5px ${colors.shadow};
	background-color: ${colors.orangeLight};
	border-radius:10px;
	// border:1px solid black;
	@media (max-width:900px){
		font-size:1.4em;
		width:60%;
		padding:10px;
	}
	@media (max-width:550px){
		font-size:1.2em;
		width:85%;
	}

`;
export const GlobalTitleContainer = styledComponents.div`
	width:100%;
	display:flex;
	justify-content:center;
	margin-bottom:20px;
	margin-top:20px;
`;
export const IdentityAndSkills = styledComponents.div`
    // border:1px solid purple;
    display:flex;
    justify-content:space-around;
    width:100%;
    padding:10px;
    margin-top:10px;
	@media (max-width:1085px){
		flex-direction:column;
		align-items:center;
	}
`;
export const IdentityTitle = styledComponents.h2`
    font-size:1.5em;
    text-align:center;
    padding:20px;
    // border:1px solid yellow;
    text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.redLight};
	border-radius:10px;
	@media (max-width:675px){
		font-size:1.2em;
	}
	@media (max-width:400px){
		font-size:1em;
	}
`;
export const IdentityContainer = styledComponents.div`
	width:45%;
    max-height:800px;
	border-radius:10px;
    padding:20px;
    display:flex;
    flex-direction:column;
    background-color: ${colors.orangeLight};
	box-shadow: 2px 2px 5px ${colors.shadow};
	transform: translateX(-100vh) rotate(-180deg);
	animation: 1.5s ${theArrival} ease-in-out forwards;
	animation-delay:400ms;
	@media (max-width:1085px){
		width:60%;
	}
	@media (max-width:850px){
		width:80%;
	}
	@media (max-width:540px){
		width:95%;
	}
`;
export const Identity = styledComponents.div`
    // border:1px solid black;
    padding:10px;
    margin-top:10px;
	@media (max-width:350px){
		padding:10px 0px;
	}
`;
export const IdCard = styledComponents.div`
	margin-top:10px;
	display:flex;
	flex-direction:column;
	// border:1px solid blue;
`;
export const IdTitle = styledComponents.h3`
	text-shadow: 1px 1px 2px ${colors.shadow};
	font-size:1.2em;
	padding:10px;
	background-color: ${colors.green};
	border-radius: 10px;
	@media (max-width:675px){
		font-size:0.9em;
	}
`
export const IdContent = styledComponents.span`
    word-wrap: break-word;
	// border:1px solid red;
	padding:10px 20px;
	margin-top:10px;
	@media (max-width:675px){
		font-size:0.9em;
	}
`
export const SkillsContainer = styledComponents.div`
    // border:1px solid yellow;
    padding:20px;
	background-color: ${colors.orangeLight};
	border-radius:10px;
	width:45%;
	box-shadow: 2px 2px 5px ${colors.shadow};
	transform: translateX(-200vh) rotate(-180deg);
	animation: 1.5s ${theArrival} ease-in-out forwards;
	@media (max-width:1085px){
		width:60%;
		margin-top:20px;
	}
	@media (max-width:850px){
		width:80%;
	}
	@media (max-width:540px){
		width:95%;
	}
`;
export const SkillTitle = styledComponents.h2`
    text-align:center;
    font-size:1.5em;
    padding:20px;
    text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.redLight};
	border-radius:10px;
	margin-bottom:10px;
	@media (max-width:675px){
		font-size:1.2em;
	}
	@media (max-width:400px){
		font-size:1em;
	}
`;
export const TypeTitle = styledComponents.h3`
    font-size:1.2em;
    padding:10px;
    // border:1px solid yellow;
    text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.green};
	border-radius:10px;
	text-align:center;
	@media (max-width:675px){
		font-size:0.9em;
	}
`;
export const TypeContainer = styledComponents.div`
    // border:1px solid blue;
    padding:20px;
	@media (max-width:350px){
		padding:10px 0px;
	}
`;
export const List = styledComponents.ul`
    border:1px solid ${colors.green};
    padding:10px;
	border-radius:10px;
`;
export const Li = styledComponents.li`
    padding:10px;
	display:flex;
	align-items:center;
	@media (max-width:675px){
		font-size:0.9em;
	}
`;
export const Level = styledComponents.p`
    padding:10px 0px;
	@media (max-width:675px){
		font-size:0.9em;
	}
`;
export const NoSkill = styledComponents.h3`
	font-size:1.2em;
	padding:10px;
	text-shadow: 1px 1px 2px ${colors.shadow};
	background-color: ${colors.green};
	border-radius:10px;
	text-align:center;
	@media (max-width:675px){
		font-size:0.9em;
	}
`;
export const Icon = styledComponents.img`
	width:25px;
	height:25px;
	margin-left:10px;
	object-fit:contain;
`
export const ButtonContainer = styledComponents.div`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-top:40px;
	margin-bottom:20px;
`
export const ResetButton = styledComponents.input`
	font-size:1.1em;
	border:none;
	padding:10px 15px;
	border-radius:10px;
	background-color: ${colors.orange};
	box-shadow: 2px 2px 5px ${colors.shadow};
	transition:500ms;
	&:hover{
		background-color: ${colors.pink};
		font-size:1.3em;
		cursor:pointer;
	}
`
export const Sentence = styledComponents.div`
	display:flex;
	justify-content:center;
	font-size:0.7em;
	padding:20px;
	text-align:center;
	font-style:italic;
`