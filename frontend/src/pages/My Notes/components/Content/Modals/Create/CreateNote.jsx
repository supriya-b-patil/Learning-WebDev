import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../../../../../redux/actions/notesActions";
import "./createnote.css";

const CreateNote = ({ closeCreateModel }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const dispatch = useDispatch();
	const noteCreate = useSelector((state) => state.noteCreate);
	const { errorMessage } = noteCreate;

	const resetStates = () => {
		setTitle("");
		setContent("");
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (!title || !content) return;
		dispatch(createNote(title, content));
		resetStates();
		closeCreateModel();
	};
	return (
		<div className='fixed inset-0 z-10 overflow-y-auto'>
			<div className='fixed inset-0 w-full h-full bg-black opacity-40'></div>
			<div className='flex items-center min-h-screen px-4 py-8'>
				<div className='relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg'>
					<div className='mt-3'>
						<div className='mt-2 text-center'>
							<h4 className='text-lg font-medium text-gray-800'>
								Create New Note
							</h4>

							<form className='mt-4' onSubmit={submitHandler}>
								<div className='text-sm text-gray-500'>
									Title
								</div>

								<input
									type='text'
									name='title'
									id='title'
									value={title}
									placeholder='Enter Note Title'
									className='mt-3 w-10/12 px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
									autoComplete='off'
									onChange={(e) => setTitle(e.target.value)}
								/>
								<div className='text-sm mt-3 text-gray-500'>
									Content
								</div>
								<input
									type='textarea'
									name='content'
									id='content'
									value={content}
									placeholder='Enter Note Content'
									className='mt-3 w-10/12 h-14 px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
									autoComplete='off'
									onChange={(e) => setContent(e.target.value)}
								/>
								<div className='text-red-400 mt-2'>
									{errorMessage && errorMessage}
								</div>
								<div className='modal-btns mt-6 justify-center'>
									<button
										type='button'
										className='text-sm font-medium text-black capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/3 sm:mx-5 dark:text-black dark:border-gray-700 dark:hover:bg-gray-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40'
										onClick={closeCreateModel}
									>
										Cancel
									</button>
									<button
										type='submit'
										className='text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/3 sm:mx-5 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
									>
										Create
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateNote;
