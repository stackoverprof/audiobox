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
				slidesPerView="auto"
				spaceBetween={32}
				grabCursor
				freeMode
				modules={[FreeMode]}
				className="absolute right-0 h-full w-full"
			>
				<SwiperSlide style={{ width: 460 }} />
				{data.map((item, i) => (
					<SwiperSlide style={{ width: 200 }} key={i}>
						<TrackCardDisplay data={item} />
					</SwiperSlide>
				))}
				<SwiperSlide style={{ width: 230 }} />
			</Swiper>
		</div>
	);
};

export default SliderTracks;

