import React from 'react';
import TrackCardMini from './TrackCardMini';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCreatePlaylist } from '@core/redux/reducer/createPlaylist';
import 'swiper/css';
import 'swiper/css/pagination';

const TracksSelected = () => {
	const { selectedTracks } = useCreatePlaylist();
	return (
		<div className="relative flex-sc pl-12 mb-2 w-full h-20">
			<div className="flex-sc w-36">
				<p className="text-lg">{selectedTracks.length} Tracks</p>
			</div>
			<Swiper
				slidesPerView={4}
				spaceBetween={16}
				grabCursor={true}
				freeMode={true}
				modules={[FreeMode]}
				style={{ width: 'calc(100% - 144px)' }}
				className="absolute right-0 h-20"
			>
				{selectedTracks.map((item, i) => (
					<SwiperSlide key={i}>
						<TrackCardMini data={item.data} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default TracksSelected;

