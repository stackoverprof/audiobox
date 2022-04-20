import React, { useState } from 'react';
import usePlaylist from '@core/swr/usePlaylist';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { setEditMode, useEditPlaylist } from '@core/redux/reducer/editPlaylist';
import { useDispatch } from 'react-redux';

interface Props {
	handleFollow(): void;
	handleDelete(): void;
}

const EditingButtons = ({ handleFollow, handleDelete }: Props) => {
	const { id } = useEditPlaylist();
	const { isOwned, isFollowed } = usePlaylist(id);
	const [preDelete, setPreDelete] = useState(false);
	const dispatch = useDispatch();

	const handlePreDelete = () => {
		setPreDelete(true);
	};

	return (
		<div className="flex-cc">
			{!preDelete ? (
				<>
					{isOwned && isFollowed && (
						<button
							type="button"
							onClick={() => dispatch(setEditMode(true))}
							className="flex-cc py-2 pr-3 pl-4 mb-3 rounded-md border border-opacity-60 -xl:mb-0 hover:text-white text-theme-blue border-theme-blue hover:bg-theme-blue hover:bg-opacity-30 "
						>
							<p className="mr-2 font-semibold">Edit</p>
							<FiEdit3 className="m-1" size={16} />
						</button>
					)}
					{isFollowed ? (
						<button
							type="button"
							onClick={handlePreDelete}
							className="flex-cc py-2 pr-3 pl-4 mb-3 ml-2 text-red-400 rounded-md border border-red-400 border-opacity-60 -xl:mb-0 hover:text-white hover:bg-red-400 hover:bg-opacity-30"
						>
							<p className="mr-2 font-semibold">
								{isOwned ? 'Remove' : 'Remove from Library'}
							</p>
							<FaTrash className="" size={14} />
						</button>
					) : (
						<button
							type="button"
							onClick={handleFollow}
							className="flex-cc py-2 pr-3 pl-4 mb-3 ml-2 rounded-md border border-opacity-60 text-theme-green border-theme-green hover:text-white hover:bg-theme-green hover:bg-opacity-30"
						>
							<p className="mr-2 font-semibold">Add to Library</p>
							<FaPlus className="" size={14} />
						</button>
					)}
				</>
			) : (
				<>
					<button
						type="button"
						onClick={handleDelete}
						className="flex-cc py-2 pr-3 pl-4 mb-3 text-red-400 rounded-md border border-red-400 border-opacity-60 hover:text-white hover:bg-red-400 hover:bg-opacity-30"
					>
						<p className="mr-2 font-semibold">Confirm to Remove?</p>
						<FaTrash className="" size={14} />
					</button>
					<button
						type="button"
						onClick={() => setPreDelete(false)}
						className="flex-cc px-2 py-2 mb-3 ml-2 w-10 h-10 text-yellow-400 rounded-md border border-yellow-400 border-opacity-60 hover:text-white hover:bg-yellow-400 hover:bg-opacity-30"
					>
						<RiArrowGoBackFill className="" size={20} />
					</button>
				</>
			)}
		</div>
	);
};

export default EditingButtons;
