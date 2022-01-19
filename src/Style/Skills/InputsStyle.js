import styledComponents, { keyframes }  from "styled-components";

export const skillsDisplayed = keyframes`
	from {
		opacity:0;
		transform: translate(-50%,50%);
	}
	to {
		opacity:1;
		transform: translate(0%,0%);
	}
`
export const OneBox = styledComponents.div`
	animation: 400ms ${skillsDisplayed} linear both;
	padding:10px;
	animation-delay: ${(props)=>props.children[0].props.anim}ms;
	display:flex;
	align-items:center;
`
export const BoxLabel = styledComponents.label`
	padding:0px 10px;
`
export const Select = styledComponents.select`
	background-color: #ebcd99;
	border:none;
	border-radius:5px;
	padding:2px;
`