import React from 'react';
import ButtonOptions from './ButtonOptions';
import TrackCardMini from './TrackCardMini';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
	data: any[];
}

const SliderTracks = ({ data }: Props) => {
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
				{data.map((item, i) => (
					<SwiperSlide key={i}>
						<TrackCardMini data={item.track} />
					</SwiperSlide>
				))}
				<SwiperSlide />
			</Swiper>
		</div>
	);
};

export default SliderTracks;
