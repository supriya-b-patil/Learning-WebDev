import React from "react";

import "./note.css";

const Note = ({
	search,
	notes,
	openUpdateModel,
	setSelectedNoteData,
	openDeleteModel,
	setSelectedNote,
}) => {
	const open = (note) => {
		openUpdateModel();
		setSelectedNoteData(note);
	};
	const del = (note) => {
		openDeleteModel();
		setSelectedNote(note);
	};
	return (
		<div className='note-wrapper'>
			{notes
				?.filter((filteredNote) =>
					filteredNote.title
						.toLowerCase()
						.includes(search.toLowerCase())
				)
				.map((note) => (
					<div className='a-note' key={note._id}>
						<h2 className='text-center text-lg font-semibold my-2 text-blue-600 w-full break-words'>
							{note.title}
						</h2>
						<p className='note-discription'>{note.content}</p>
						<div className='icons mt-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='2.5em'
								height='2.5em'
								preserveAspectRatio='xMidYMid meet'
								viewBox='0 0 24 24'
								className='icon-edit'
								onClick={() => open(note)}
							>
								<path
									fill='currentColor'
									d='m19.1 21.875l-6.375-6.35L7.25 21H3v-4.25l5.475-5.475L2.1 4.9l1.45-1.425l16.975 17Zm-3.525-9.2l-4.25-4.25L13.6 6.15l4.25 4.25Zm3.725-3.75l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387Z'
								/>
							</svg>

							<div className='tooltip text-gray-400 text-sm'>
								{note.createdAt.substring(0, 10)}
								<span className='tooltiptext'>
									Created on {note.createdAt.substring(0, 10)}
								</span>
							</div>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='2.5em'
								height='2.5em'
								preserveAspectRatio='xMidYMid meet'
								viewBox='0 0 24 24'
								className='icon-delete'
								onClick={() => del(note)}
							>
								<path
									fill='currentColor'
									d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
								/>
							</svg>
						</div>
					</div>
				))}
		</div>
	);
};

export default Note;
