import styledComponents from "styled-components";
import colors from "../colors";

export const WrapperContainer = styledComponents.div`
	background: linear-gradient(#999ceb, #99d2eb);
`
export const BackButton = styledComponents.div`
	// border:2px solid green;
	padding:20px;
	display:flex;
	justify-content:center;
`
export const InputBack = styledComponents.input`
	padding:5px 10px;
	border:none;
	background-color: ${colors.orange};
	box-shadow: 2px 2px 3px ${colors.shadow};
	border-radius:5px;
	transform: scale(1);
	transition:500ms;
	&:hover {
		transform:scale(1.2);
		cursor:pointer;
		background-color: ${colors.pink}	
	}
	&:active {
		background-color: ${colors.green};
	}
	
`
export const Wrapper = styledComponents.div`
	// border:1px solid purple;
	display:flex;
	justify-content:space-around;
	padding:30px;
`;
export const SkillContainer = styledComponents.div`
	border:1px solid ${colors.orange};
	border-radius:20px;
	padding:30px;
	display:flex;
`;
export const TitleContainer = styledComponents.div`
	// border:1px solid blue;
	text-align: center;
`;
export const Title = styledComponents.h1`
	padding:10px;
	font-size:1.8em;
	text-shadow: 1px 1px 2px ${colors.shadow};
`;
export const Header = styledComponents.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
`;
export const HideAndDisplayContainer = styledComponents.div`
	width:100%;
	padding:20px;
	// border:2px solid red;
	display:flex;
	justify-content:center;
`;
export const HideAndDisplay = styledComponents.input`
	border:none;
	border-radius:15px;
	background-color: ${colors.orange};
	box-shadow: 2px 2px 3px ${colors.shadow};
	padding:5px 15px;
	max-width:80%;
	transform:scale(1);
	transition:500ms;
	:hover {
		transform:scale(1.2);
		cursor: pointer;
		background-color: ${colors.pink}
	}
	&:active {
		background-color: ${colors.green};
	}
`;
export const Boxes = styledComponents.div`
	font-size: 1.2em;
	padding:20px;
	// border:1px solid yellow;
`;
export const ImgContainer = styledComponents.div`
	width:25px;
	height:25px;
	margin-left:10px;
`
export const Img = styledComponents.img`
	width:100%;
	height:100%;
	object-fit:cotain;
`
export const LabelContainer = styledComponents.div`
	display:flex;
`