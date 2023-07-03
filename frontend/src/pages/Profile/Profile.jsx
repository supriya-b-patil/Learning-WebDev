import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/userActions";
import Footer from "../My Notes/components/Footer/Footer";
import Header from "../My Notes/components/Header/Header";
import ContentLoader from "../../common/components/loader/ContentLoader";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading, success, error } = userUpdate;

	const navigate = useNavigate();

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		} else {
			setName(userInfo.name);
			setEmail(userInfo.email);
		}
	}, [navigate, userInfo, success]);

	const updateDataChangeHandler = (e) => {
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
		if (data.password !== data.confirmpassword) {
			setErrorMessage("Password Not Matched");
			return false;
		}
		return true;
	};
	const updateHandler = async (e) => {
		e.preventDefault();
		const inputData = { name, email, password, confirmpassword };
		if (!validateData(inputData)) {
			return;
		}
		// api call for update
		dispatch(updateProfile({ name, email, password }));
	};
	return (
		<div>
			<Header />
			<div className='text-center text-xl font-semibold'>{`Hey, ${userInfo?.name}`}</div>
			<div className='text-center text-2xl'>Edit Your Profile</div>
			{loading ? (
				<ContentLoader />
			) : (
				<div className='form-div flex items-center justify-center shadow-xl py-10 mx-auto mt-10'>
					<form onSubmit={updateHandler}>
						<div className='form-group'>
							<input
								type='text'
								className='name-input form-control'
								name='name'
								placeholder='Name'
								autoFocus
								value={name}
								onChange={updateDataChangeHandler}
							/>
							<label className='form-label'>Name *</label>
						</div>

						<div className='form-group'>
							<input
								type='email'
								className='form-control'
								name='email'
								placeholder='Email'
								value={email}
								onChange={updateDataChangeHandler}
							/>
							<label className='form-label'>Email *</label>
						</div>

						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								name='password'
								placeholder='Password'
								value={password}
								onChange={updateDataChangeHandler}
							/>
							<label className='form-label'>Password *</label>
						</div>

						<div className='form-group'>
							<input
								type='password'
								className='form-control'
								name='confirmpassword'
								placeholder='ConfirmPassword'
								value={confirmpassword}
								onChange={updateDataChangeHandler}
							/>
							<label className='form-label'>
								Confirm Password *
							</label>
						</div>

						{errorMessage && (
							<div className='validate-msg text-red-600 text-center mt-2 text-md mb-3'>
								{errorMessage}
							</div>
						)}
						{error && (
							<div className='validate-msg text-red-600 text-center mt-2 text-md mb-3'>
								{error}
							</div>
						)}
						{success && (
							<div className='text-center mb-3 text-green-500'>
								Updated SuccessFull
							</div>
						)}
						<div className='update-btn'>
							<input type='submit' value='Update' />
						</div>
					</form>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Profile;
