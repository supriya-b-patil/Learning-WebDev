import React, { useState, useEffect } from "react";
import "./landingpage.css";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import blob1 from "../../common/assets/blob1.svg";
import blob2 from "../../common/assets/blob2.svg";
import blob3 from "../../common/assets/blob3.svg";
import blob4 from "../../common/assets/blob4.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const [auth, setAuth] = useState("login");
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			navigate("/mynotes");
		}
	}, [navigate]);

	return (
		<div>
			<div className='landing-page'>
				<div className='design-div'>
					<div>
						<h1 className='main-heading font-semibold text-yellow-300 text-4xl text-center p-2 flex items-center justify-center gap-5'>
							<div>Welcome to Note Safe</div>
							<div className='logo-icon-div'>
								{" "}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-10 h-10 logo-icon'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
									/>
								</svg>
							</div>
							<div className='sm-title'>
								Wnat to Keep you note safe
							</div>
						</h1>
						<h1 className='heading font-semibold text-6xl absolute select-none'>
							Hey, are you trying to keep your notes safe
							<p className='sub-heading font-semibold text-4xl'>
								You are at right place
							</p>
						</h1>
					</div>

					<div className='forms'>
						{auth === "login" && <Login setAuth={setAuth} />}
						{auth === "signup" && <Signup setAuth={setAuth} />}
					</div>

					<img className='blob1 absolute' src={blob1} alt='.' />
					<img className='blob2 absolute' src={blob2} alt='.' />
					<img className='blob3 absolute' src={blob3} alt='.' />
					<img className='blob4 absolute' src={blob4} alt='.' />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
