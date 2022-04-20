import React from 'react';
import TrackCardMini from './TrackCardMini';
import useResize from '@core/hooks/useResize';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCreatePlaylist } from '@core/redux/reducer/createPlaylist';
import 'swiper/css';
import 'swiper/css/pagination';

const TracksSelected = () => {
	const { selectedTracks } = useCreatePlaylist();
	const screen = useResize();

	return (
		<div className="flex-ss col w-full -md:pl-2">
			<div className="flex-sc py-2 mt-4 w-28 min-w-28 md:hidden">
				<p className="text-lg">
					{selectedTracks.length} Track{selectedTracks.length > 1 && 's'}
				</p>
			</div>
			<div className="relative flex-sc pl-2 mb-2 w-full h-20">
				<div className="flex-sc w-28 min-w-28 -md:hidden">
					<p className="text-lg">
						{selectedTracks.length} Track{selectedTracks.length > 1 && 's'}
					</p>
				</div>
				{selectedTracks.length > 0 && (
					<Swiper
						slidesPerView="auto"
						spaceBetween={16}
						grabCursor
						freeMode
						modules={[FreeMode]}
						style={{ width: screen.md ? 'calc(100% - 112px)' : '100%' }}
						className="absolute right-0 h-20"
					>
						{selectedTracks.map((item, i) => (
							<SwiperSlide style={{ width: 240 }} key={i}>
								<TrackCardMini data={item.data} />
							</SwiperSlide>
						))}
						<SwiperSlide style={{ width: 240 }} />
					</Swiper>
				)}
				<div
					className="absolute right-0 -top-2 z-20 w-40 h-24 pointer-events-none -md:hidden"
					style={{
						background: 'linear-gradient(90deg, #160e2d00, #160e2ddd, #160e2dff)',
					}}
				></div>
			</div>
		</div>
	);
};

export default TracksSelected;
