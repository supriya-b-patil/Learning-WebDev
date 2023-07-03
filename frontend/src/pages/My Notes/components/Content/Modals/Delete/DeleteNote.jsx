import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../../../../../redux/actions/notesActions";
import "./deletenote.css";

const DeleteNote = (props) => {
	const { selectedNote, closeDeleteModel } = props;
	const { _id } = selectedNote;
	const dispatch = useDispatch();
	const noteDelete = useSelector((state) => state.noteDelete);
	const { errorMessage } = noteDelete;

	const deleteHandler = () => {
		if (!_id) return;
		dispatch(deleteNote(_id));
		closeDeleteModel();
	};
	return (
		<div className='fixed inset-0 z-10 overflow-y-auto'>
			<div className='fixed inset-0 w-full h-full bg-black opacity-40'></div>
			<div className='flex items-center min-h-screen px-4 py-8'>
				<div className='relative w-full max-w-lg p-8 mx-auto bg-white rounded-md shadow-lg'>
					<div className='mt-3'>
						<div className='mt-2 text-center'>
							<h4 className='text-lg font-medium text-gray-800'>
								Delete Note
							</h4>

							<div className='text-sm text-gray-500 mt-2'>
								Are you Sure , You Want to Delete ?
							</div>
							<div className='text-red-400 mt-2'>
								{errorMessage && errorMessage}
							</div>
							<div className='modal-btns mt-6 justify-center'>
								<button
									type='button'
									className='text-sm font-medium text-black capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/3 sm:mx-5 dark:text-black dark:border-gray-700 dark:hover:bg-gray-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40'
									onClick={closeDeleteModel}
								>
									Cancel
								</button>
								<button
									type='button'
									className='btn-del text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-md sm:mt-0 sm:w-1/3 sm:mx-5 hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
									onClick={deleteHandler}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteNote;
