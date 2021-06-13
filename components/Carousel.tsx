import React, { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export type props = {
	auto: boolean
	navigation: boolean
	images: string[]
}

function Carousel({ images }: props): ReactElement {
	const slide = images.map((img, index) => {
		// eslint-disable-next-line prettier/prettier
		<SwiperSlide key={index}>{img}</SwiperSlide>
	})
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{slide}
		</Swiper>
	)
}

export default Carousel
