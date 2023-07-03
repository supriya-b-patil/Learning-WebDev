import React, { useState, useEffect } from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./mynotes.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNotes = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
	}, [userInfo, navigate]);

	return (
		<div>
			<Header setSearch={setSearch} />
			<Content search={search} />
			<Footer />
		</div>
	);
};

export default MyNotes;
