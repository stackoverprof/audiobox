import React from 'react';
import ButtonOptions from './ButtonOptions';
import TrackCardMini from './TrackCardMini';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCreatePlaylist } from '@core/redux/reducer/createPlaylist';
import 'swiper/css';
import 'swiper/css/pagination';

const SliderTracks = () => {
	const { selectedTracks } = useCreatePlaylist();

	return (
		<div className="relative flex-sc w-full h-20">
			<ButtonOptions />
			<Swiper
				slidesPerView={3.5}
				spaceBetween={16}
				grabCursor={true}
				freeMode={true}
				modules={[FreeMode]}
				style={{ width: 'calc(100% - 72px)' }}
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
		</div>
	);
};

export default SliderTracks;

