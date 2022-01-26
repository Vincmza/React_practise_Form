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
	// border:1px solid green;
	@media (max-width:600px){
		width:200px;
	}
`
export const BoxLabel = styledComponents.label`
	padding:0px 10px;
`
export const Select = styledComponents.select`
	margin-left: 35px;
	background-color: #ebcd99;
	border:none;
	border-radius:5px;
	padding:2px;
	animation: 600ms ${skillsDisplayed} linear both;
	animation-delay: ${(props)=>props.children[0].props.anim}ms;
`
export const SelectContainer = styledComponents.div`
	display:flex;
	align-items:center;
`