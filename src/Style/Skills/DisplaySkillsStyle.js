import { FaCircle, FaArrowRight } from "react-icons/fa";
import styledComponents, { keyframes } from "styled-components";
import colors from "../colors";

export const liDisplay = keyframes`
	to {
		opacity: 1;
	}
`
export const Wrapper = styledComponents.div`
	display:flex;
	justify-content: space-around;
	// border:1px solid purple;
	@media (max-width:830px){
		flex-direction:column;
		align-items:center;
	}
`;
export const SkillWrapper = styledComponents.div`
	border:2px solid ${colors.orange};
	border-radius:10px;
	margin-top:20px;
	width:40%;
	padding:30px;
	@media (max-width:830px){
		width:60%;
	}
	@media (max-width:560px){
		width:80%;
	}
	@media (max-width:450px){
		width:90%;
		padding:15px;
	}
`;
export const Title = styledComponents.h1`
	text-align: center;
	font-size: 1.3em;
	margin-bottom:20px;
	text-shadow: 1px 1px 1px ${colors.shadow};
	@media (max-width:900px){
		font-size:1em;
	}
`;
export const List = styledComponents.ul`
	display:flex;
	flex-direction:column;
	align-items:center;
	@media (max-width:830px){
		align-items:flex-start;
	}
`;
export const LiContainer = styledComponents.li`
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
export const IsLevelContainer = styledComponents.div`
	// border:1px solid red;
`;
export const IsLevel = styledComponents.li`
	list-style-type:none;
	text-align:center;
	margin-bottom:10px;
	color:red;
	@media (max-width:830px){
		text-align:left;
	}
	@media (max-width:450px){
		font-size:0.8em;
	}
`
export const SkillName = styledComponents.span`
	margin-right:10px;
	@media (max-width:450px){
		font-size:0.9em;
	}
	@media (max-width:380px){
		font-size:0.8em;
	}
`;
export const Level = styledComponents.span`
	margin-right:10px;
	@media (max-width:450px){
		font-size:0.9em;
	}
	@media (max-width:380px){
		font-size:0.8em;
	}
`;
export const DotIcon = styledComponents(FaCircle)`
	font-size:0.7em;
	@media (max-width:380px){
		font-size:0.5em;
	}
`;
export const ArrowIcon = styledComponents(FaArrowRight)`
	font-size:0.6em;
	@media (max-width:380px){
		font-size:0.5em;
	}
`;