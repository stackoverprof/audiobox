import React from 'react';
import SeeMoreCard from './SeeMoreCard';
import TrackCardDisplay from './TrackCardDisplay';
import useResize from '@core/hooks/useResize';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
	data: any[];
	ordered: boolean;
	highlighted?: boolean;
	playlist_id: string;
}

const SliderTracks = ({ data, ordered, highlighted, playlist_id }: Props) => {
	const screen = useResize();
	const width = (() => {
		if (screen.xl) return highlighted ? 480 : 540;
		else if (screen.lg) return highlighted ? 240 : 270;
		else return 12;
	})();

	return (
		<div>
			<Swiper
				slidesPerView="auto"
				spaceBetween={32}
				grabCursor
				freeMode
				modules={[FreeMode]}
				className="absolute right-0 w-full h-full"
			>
				<SwiperSlide
					style={{
						width: width,
						transition: 'all 0.2s',
					}}
				/>
				{data
					.filter((x) => x)
					.map((item, i) => (
						<SwiperSlide style={{ width: 192 }} key={i}>
							<TrackCardDisplay data={item} index={i} ordered={ordered} />
						</SwiperSlide>
					))}
				{data.length > 0 && (
					<SwiperSlide style={{ width: 192 }}>
						<SeeMoreCard playlist_id={playlist_id} />
					</SwiperSlide>
				)}
				<SwiperSlide style={{ width: 230 }} />
			</Swiper>
		</div>
	);
};

export default SliderTracks;
