import React from 'react';
import colors from '@core/style/colors';
import TrackCardMini from './TrackCardMini';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEditPlaylist } from '@core/redux/reducer/editPlaylist';
import 'swiper/css';
import 'swiper/css/pagination';

const TracksSelected = () => {
	const { selectedTracks } = useEditPlaylist();
	return (
		<div className="relative flex-sc pl-12 mt-2 mb-2 w-full h-20">
			<div className="flex-sc w-36">
				<p className="text-lg">
					{selectedTracks.length} Track{selectedTracks.length > 1 && 's'}
				</p>
			</div>
			<Swiper
				slidesPerView="auto"
				spaceBetween={16}
				grabCursor
				freeMode
				modules={[FreeMode]}
				style={{ width: 'calc(100% - 156px)' }}
				className="absolute right-0 h-20"
			>
				{selectedTracks.map((item, i) => (
					<SwiperSlide style={{ width: 240 }} key={i}>
						<TrackCardMini data={item.data} />
					</SwiperSlide>
				))}
				<SwiperSlide style={{ width: 240 }} />
			</Swiper>
			<div
				className="absolute right-0 -top-2 z-20 w-40 h-24 pointer-events-none"
				style={{
					background: `linear-gradient(90deg, ${colors.base}00, ${colors.base}dd, ${colors.base}ff)`,
				}}
			></div>
		</div>
	);
};

export default TracksSelected;
