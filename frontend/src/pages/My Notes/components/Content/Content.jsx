import React, { useEffect, useState } from "react";
import "./content.css";
import Note from "./Note/Note";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../../../redux/actions/notesActions";
import { useNavigate } from "react-router-dom";
import ContentLoader from "../../../../common/components/loader/ContentLoader";
import CreateNote from "./Modals/Create/CreateNote";
import UpdateNote from "./Modals/Update/UpdateNote";
import DeleteNote from "./Modals/Delete/DeleteNote";

const Content = ({ search }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const notesList = useSelector((state) => state.notesList);
	const { loading: listLoading, notes, errorMessage } = notesList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	//-------------------------Create Note----------------------------

	const [createModel, setCreateModel] = useState(false);

	const noteCreate = useSelector((state) => state.noteCreate);
	const { success: createdNote } = noteCreate;

	const openCreateModel = () => {
		setCreateModel(true);
	};
	const closeCreateModel = () => {
		setCreateModel(false);
	};

	//--------------------------Update Note---------------------------

	const [updateModal, setUpdateModal] = useState(false);
	const [selectedNoteData, setSelectedNoteData] = useState({});

	const noteUpdate = useSelector((state) => state.noteUpdate);
	const { success: updatedNote } = noteUpdate;

	const openUpdateModel = () => {
		setUpdateModal(true);
	};
	const closeUpdateModel = () => {
		setUpdateModal(false);
		setSelectedNoteData({});
	};

	//--------------------------Delete Note----------------------------
	const [deleteModal, setDeleteModal] = useState(false);
	const [selectedNote, setSelectedNote] = useState({});
	const noteDelete = useSelector((state) => state.noteDelete);
	const { success: deleteSuccess } = noteDelete;

	const openDeleteModel = () => {
		setDeleteModal(true);
	};
	const closeDeleteModel = () => {
		setDeleteModal(false);
		setSelectedNote({});
	};
	//---------------------------------------------------------------------
	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		}
		dispatch(listNotes());
	}, [dispatch, userInfo, navigate, createdNote, updatedNote, deleteSuccess]);

	return (
		<div className='content'>
			<h1 className='text-center text-xl py-1 capitalize'>
				Hi , {userInfo?.name}
			</h1>
			<div className='content-wrapper'>
				<button
					className='btn-create bg-gray-200 p-2 rounded-2xl text-center ml-7'
					onClick={openCreateModel}
				>
					Create New Note
				</button>
				{errorMessage && (
					<div className='text-center text-2xl'>{errorMessage}</div>
				)}
				{listLoading && <ContentLoader />}
				<Note
					search={search}
					notes={notes}
					openUpdateModel={openUpdateModel}
					setSelectedNoteData={setSelectedNoteData}
					openDeleteModel={openDeleteModel}
					setSelectedNote={setSelectedNote}
				/>
				{createModel && (
					<CreateNote closeCreateModel={closeCreateModel} />
				)}
				{updateModal && (
					<UpdateNote
						closeUpdateModel={closeUpdateModel}
						selectedNoteData={selectedNoteData}
						setSelectedNoteData={setSelectedNoteData}
					/>
				)}
				{deleteModal && (
					<DeleteNote
						selectedNote={selectedNote}
						closeDeleteModel={closeDeleteModel}
					/>
				)}
			</div>
		</div>
	);
};

export default Content;
