import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const DisplayUser = ({ userData, setUserData, objectData }) => {
	//GETTING AN ARRAY OF DATA INSTEAD OF AN OBJECT TO BE ABLE TO USE MAP
	const user = [];
	const objectToArray = () => {
		for (const [key, value] of Object.entries(userData)) {
			if (value === "") {
				user.push(`${key}: non renseigné`);
			} else {
				user.push(`${key}: ${value}`);
			}
		}
	};
	//CALLING FUNCTION TO GATHER USER INFOS IN AN ARRAY
	objectToArray();
	//STATE TO ALLOW DATA TO BE DISPLAYED
	const [isValid, setIsValid] = useState(false);
	//TOOGLE ISVALID ON EITHER TRUE OR FALSE
	const handleClick = (e) => {
		e.preventDefault();
		if (isValid === false) {
			setIsValid(true);
		} else {
            setUserData(objectData);
			setIsValid(false);			
		}
	};
	return (
		<div>
			{isValid === false && Object.values(userData).slice(0,4).filter(item=> item != "").length === 4 ? (
				<>
					<button type="button" onClick={handleClick}>
						Récapitulatif de mes infos
					</button>
				</>
			) : (
				<></>
			)}

			{isValid === true && user.length > 0 ? (
				<>
					<p>Résumé de mes informations personelles</p>
					<ul>
						{user.map((user, index) => (
							<li key={index} value={user}>
								{user}
							</li>
							
						))}
					</ul>
					<span onClick={handleClick}>
						Effacer les données
						<FaRegTrashAlt/>
					</span>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default DisplayUser;
