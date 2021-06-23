import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import Navbar from '../components/Navbar'
import { grey, pink, white } from '../constants/colors'
//import darkerHeroBg from '../public/imgs/darkerHeroBg'

export default function Hero(): ReactElement {
	const classes = useStyles()
	return (
		<header className={classes.header}>
			<div className={classes.textContainer}>
				<Typography variant='h3' gutterBottom>
					Cake bakery...
				</Typography>
				<Typography variant='h3' gutterBottom>
					make delicious treats
				</Typography>
				<Typography
					className={classes.subtitle}
					variant='subtitle2'
					gutterBottom
				>
					subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Button className={classes.button}>Order Now</Button>
			</div>
		</header>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			display: 'flex',
			backgroundImage: `url(/imgs/heroBg.jpg)`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			overflowX: 'hidden',
			width: '100%',
			height: '100vh',
		},
		carouselContainer: {
			position: 'fixed',
			top: '30%',
			left: '20%',
			zIndex: -1,
			width: 400,
			height: 300,
			borderRadius: '50%',
		},
		textContainer: {
			display: 'flex',
			flexDirection: 'column',
		},
		subtitle: {
			padding: 8,
		},
		button: {
			width: '1rem',
			padding: '12px 24px',
			borderRadius: 24,
			border: 'none',
			outline: 'none',
			color: grey,
			background: white,
			transition: 'color .4 ease-out',
			'&:hover, &:focus': {
				background: pink,
				color: white,
			},
		},
	})
)

const navbarProps = {
	image: 'image',
	links: [
		{
			path: '/home',
			link: 'home',
		},
		{
			path: '/products',
			link: 'products',
		},
		{
			path: '/gallery',
			link: 'gallery',
		},
	],
}

const carouselProps = {
	auto: false,
	navigation: false,
	images: [
		'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		'https://images.pexels.com/photos/4110012/pexels-photo-4110012.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		'https://images.pexels.com/photos/1684039/pexels-photo-1684039.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		'https://images.pexels.com/photos/4887830/pexels-photo-4887830.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	],
}
