import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/userActions";
import { useEffect } from "react";
import AuthLoader2 from "../../../common/components/authLoader/AuthLoader2";

function Login({ setAuth }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, errorMessage, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			navigate("/mynotes");
		}
	}, [navigate, userInfo]);

	const loginDataChangeHandler = (e) => {
		const name = e.target.name;
		if (name === "email") {
			setEmail(e.target.value);
		} else if (name === "password") {
			setPassword(e.target.value);
		}
	};
	const loginHandler = async (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	return (
		<>
			{loading && <AuthLoader2 />}
			<div className='login_body items-end'>
				<div className='login_wrapper'>
					<div className='login_form_group'>
						<h2 className='text-xl'>Login</h2>
						<form onSubmit={loginHandler}>
							<div className='form_group'>
								<input
									type='email'
									className='form_control'
									name='email'
									placeholder='Email'
									autoFocus
									required
									value={email}
									onChange={loginDataChangeHandler}
								/>
								<label className='form_label'>Email *</label>
							</div>

							<div className='form_group'>
								<input
									type='password'
									className='form_control'
									name='password'
									placeholder='Password'
									required
									value={password}
									onChange={loginDataChangeHandler}
								/>
								<label className='form_label'>Password *</label>
							</div>

							<div className='login_btn'>
								{errorMessage && (
									<div className='error-msg text-red-600 text-center mb-1 text-xs'>
										{errorMessage}
									</div>
								)}
								<input type='submit' value='Login' />
								<p>
									{" "}
									Don't have an account ?{" "}
									<span
										className='text-blue-900 font-semibold cursor-pointer'
										onClick={() => setAuth("signup")}
									>
										Signup
									</span>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
