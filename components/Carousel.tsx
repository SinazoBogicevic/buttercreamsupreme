import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardMedia } from '@material-ui/core'
import 'swiper/swiper-bundle.css'

export type props = {
	auto: boolean
	navigation: boolean
	images: string[]
}

export default function Carousel({ images }: props): ReactElement {
	const classes = useStyles()
	console.log(images)
	const slide = images.map((img, index) => {
		return (
			<SwiperSlide className={classes.swiperWrapper} key={index} tag='li'>
				<CardMedia
					component='img'
					alt='cake'
					image={img}
					title='chocolate cake'
					className={classes.media}
				/>
			</SwiperSlide>
		)
	})
	return (
		<Swiper
			spaceBetween={8}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			wrapperTag='ul'
			className={classes.swiperContainer}
		>
			{slide}
		</Swiper>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		swiperContainer: {
			width: '100%',
			height: '100%',
		},
		swiperWrapper: {
			listStyleType: 'none',
		},
		media: {
			objectFit: 'cover',
			width: '100%',
			height: '100%',
		},
		swiperSlide: {},
	})
)
