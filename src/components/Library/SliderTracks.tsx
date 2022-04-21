import React from 'react';
import colors from '@core/style/colors';
import PlayButton from './PlayButton';
import SeeMoreCardMini from './SeeMoreCardMini';
import TrackCardMini from './TrackCardMini';
import useResize from '@core/hooks/useResize';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
	data: any[];
	hover: boolean;
	playlist_id: string;
}

const SliderTracks = ({ data, hover, playlist_id }: Props) => {
	const fader = hover ? '#17072f' : colors.base;
	const screen = useResize();

	return (
		<div className="relative flex-sc w-full h-20">
			<PlayButton tracks={data} />
			<Swiper
				slidesPerView="auto"
				spaceBetween={16}
				grabCursor
				freeMode
				modules={[FreeMode]}
				style={{ width: screen.xl ? 'calc(100% - 72px)' : '100%' }}
				className="absolute right-0 h-20"
			>
				{data.map((item, i) => (
					<SwiperSlide style={{ width: 240 }} key={i}>
						<TrackCardMini data={item} />
					</SwiperSlide>
				))}
				{data.length > 0 && (
					<SwiperSlide style={{ width: 240 }}>
						<SeeMoreCardMini playlist_id={playlist_id} />
					</SwiperSlide>
				)}
				<SwiperSlide style={{ width: 240 }} />
			</Swiper>
			<div
				className="absolute right-0 z-20 w-24 h-full pointer-events-none"
				style={{
					background: `linear-gradient(90deg, ${fader}00, ${fader}dd, ${fader}ff)`,
				}}
			></div>
		</div>
	);
};

export default SliderTracks;
