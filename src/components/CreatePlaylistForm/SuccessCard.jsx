import { PropTypes } from 'prop-types';
import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const SuccessCard = ({ handleClose }) => {
	return (
		<div className="relative flex-sc overflow-hidden px-4 py-4 pl-44 mb-4 w-full h-36 rounded-md border border-green-300">
			<img src="/img/success.svg" alt="" className="absolute bottom-0 left-0 h-full" />
			<FaWindowClose
				onClick={handleClose}
				className="absolute top-2 right-2 text-green-300 cursor-pointer"
				size={24}
			/>

			<p className="text-xl font-semibold">Playlist Created</p>
		</div>
	);
};

export default SuccessCard;

SuccessCard.propTypes = {
	handleClose: PropTypes.func.isRequired,
};
