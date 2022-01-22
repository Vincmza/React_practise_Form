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
`;
export const SkillWrapper = styledComponents.div`
	// border:1px solid green;
	width:40%;
	padding:30px;
`;
export const Title = styledComponents.h1`
	text-align: center;
	font-size: 1.3em;
	margin-bottom:20px;
	text-shadow: 1px 1px 1px ${colors.shadow};
`;
export const List = styledComponents.ul`
	display:flex;
	flex-direction:column;
	align-items:center;
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
export const SkillName = styledComponents.span`
	margin-right:10px;
`;
export const Level = styledComponents.span`
	margin-right:10px;
`;
export const DotIcon = styledComponents(FaCircle)`
	font-size:0.7em;
`;
export const ArrowIcon = styledComponents(FaArrowRight)`
	font-size:0.6em;
`;