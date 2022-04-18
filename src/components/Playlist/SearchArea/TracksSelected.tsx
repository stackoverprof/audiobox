import React from 'react';
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
				slidesPerView={4.5}
				spaceBetween={16}
				grabCursor={true}
				freeMode={true}
				modules={[FreeMode]}
				style={{ width: 'calc(100% - 156px)' }}
				className="absolute right-0 h-20"
				containerModifierClass="pr-12"
			>
				{selectedTracks.map((item, i) => (
					<SwiperSlide key={i}>
						<TrackCardMini data={item.data} />
					</SwiperSlide>
				))}
				<SwiperSlide />
			</Swiper>
			<div
				className="absolute right-0 -top-2 z-20 w-40 h-24 pointer-events-none"
				style={{
					background: 'linear-gradient(90deg, #160e2d00, #160e2ddd, #160e2dff)',
				}}
			></div>
		</div>
	);
};

export default TracksSelected;
