import React, { useState, useEffect } from "react";
import "./Signup.css";
import AuthLoader from "../../../common/components/authLoader/AuthLoader";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/userActions";

function Signup({ setAuth }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;
	// const userLogin = useSelector((state) => state.userLogin)
	// const { userInfo } = userLogin

	useEffect(() => {
		if (userInfo) {
			setAuth("login");
		}
		//eslint-disable-next-line
	}, [userInfo, dispatch]);

	const signupDataChangeHandler = (e) => {
		const name = e.target.name;
		if (name === "name") {
			setName(e.target.value);
		} else if (name === "email") {
			setEmail(e.target.value);
		} else if (name === "password") {
			setPassword(e.target.value);
		} else if (name === "confirmpassword") {
			setConfirmPassword(e.target.value);
		}
		setErrorMessage("");
	};

	const validateData = (data) => {
		if (data.password.length < 6) {
			setErrorMessage("Password should be more than 6 characters");
			return false;
		}
		if (data.password.includes(" ")) {
			setErrorMessage("Password should not contain spaces");
			return false;
		}
		return true;
	};

	const signupHandler = async (e) => {
		const inputData = { name, email, password };
		e.preventDefault();
		if (!validateData(inputData)) {
			return;
		}
		// api call for signup
		dispatch(register(name, email, password));
	};
	return (
		<>
			{loading && <AuthLoader />}
			<div className='signup-body items-end'>
				<div className='signup-wrapper'>
					<div className='signup-form-group'>
						<h2 className='text-xl'>Signup</h2>
						<form onSubmit={signupHandler}>
							<div className='form-group'>
								<input
									type='text'
									className='name-input form-control'
									name='name'
									placeholder='Name'
									autoFocus
									required
									value={name}
									onChange={signupDataChangeHandler}
								/>
								<label className='form-label'>Name *</label>
							</div>

							<div className='form-group'>
								<input
									type='email'
									className='form-control'
									name='email'
									placeholder='Email'
									required
									value={email}
									onChange={signupDataChangeHandler}
								/>
								<label className='form-label'>Email *</label>
							</div>

							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									name='password'
									placeholder='Password'
									required
									value={password}
									onChange={signupDataChangeHandler}
								/>
								<label className='form-label'>Password *</label>
							</div>

							<div className='form-group'>
								<input
									type='password'
									className='form-control'
									name='confirmpassword'
									placeholder='ConfirmPassword'
									required
									value={confirmpassword}
									onChange={signupDataChangeHandler}
								/>
								<label className='form-label'>
									Confirm Password *
								</label>
								{password && confirmpassword ? (
									password === confirmpassword ? (
										<p
											style={{
												color: "#1bab6e",
												fontSize: "12px",
												margin: "-7.5px 0px",
												padding: "0px",
												marginTop: "-15px",
											}}
										>
											* Password Matched
										</p>
									) : (
										<p
											style={{
												color: "red",
												fontSize: "12px",
												margin: "-7.5px 0px",
												padding: "0px",
												marginTop: "-15px",
											}}
										>
											* Password Not Matched
										</p>
									)
								) : (
									""
								)}
								<div className='validate-msg text-red-600 text-center mt-2 text-xs'>
									{errorMessage}
									{error}
								</div>
							</div>

							<div className='signup-btn'>
								<input type='submit' value='Signup' />
								<p>
									Already have an account ?{" "}
									<span
										className='text-blue-900 font-semibold cursor-pointer'
										onClick={() => setAuth("login")}
									>
										Login
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

export default Signup;
