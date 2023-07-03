import React from "react";
import "./notfound.css";
import img from "../../common/assets/404.gif";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate("/");
	};
	return (
		<div className='image'>
			<img src={img} alt='...Not Found' />
			<button onClick={goBack}>Go Back</button>
		</div>
	);
};

export default NotFound;
