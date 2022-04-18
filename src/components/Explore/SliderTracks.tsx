import React from 'react';
import TrackCardDisplay from './TrackCardDisplay';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
	data: any[];
}

const SliderTracks = ({ data }: Props) => {
	return (
		<div>
			<Swiper
				slidesPerView={3.5}
				spaceBetween={16}
				grabCursor={true}
				freeMode={true}
				modules={[FreeMode]}
				className="absolute right-0 h-20 w-full"
				containerModifierClass="pr-12"
			>
				{data.map((item, i) => (
					<SwiperSlide key={i}>
						<TrackCardDisplay data={item} />
					</SwiperSlide>
				))}
				<SwiperSlide />
			</Swiper>
		</div>
	);
};

export default SliderTracks;

