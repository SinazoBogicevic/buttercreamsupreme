import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography, Button, CardMedia } from '@material-ui/core'
import { grey, pink, white, black, salmon } from '../constants/colors'
import { Backdrop } from '@material-ui/core'

export type props = {
	title: string
	intro: string
	snug: string
	buttonText: string
	img: {
		image: string
		alt: string
	}
}

export default function KnowMoreBanner({
	title,
	intro,
	snug,
	buttonText,
	img,
}: props): ReactElement {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div className={classes.textContainer}>
				<Typography variant='h2' gutterBottom className={classes.title}>
					{title}
				</Typography>
				<Typography variant='subtitle2' gutterBottom className={classes.intro}>
					{intro}
				</Typography>
				<Typography variant='body1' gutterBottom className={classes.snug}>
					{snug}
				</Typography>
				<Button className={classes.button}>{buttonText}</Button>
			</div>
			<div className={classes.image}>
				<CardMedia
					component='img'
					alt='cake'
					image={img.image}
					title={img.alt}
					className={classes.cardMedia}
				/>
			</div>
		</div>
	)
}
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignContent: 'center',
			flexWrap: 'wrap',
			padding: '50px 100px',
			overflowX: 'hidden',
			[theme.breakpoints.down('md')]: {
				padding: '12px 20px',
			},
		},
		textContainer: {
			display: 'flex',
			flexDirection: 'column',
			flex: 1,
			paddingRight: 0,
			[theme.breakpoints.up('md')]: {
				paddingRight: 70,
			},
		},
		title: {
			fontWeight: 700,
		},
		intro: {
			marginBottom: 16,
		},
		snug: {
			color: grey,
			marginBottom: 24,
		},
		button: {
			width: 'fit-content',
			borderRadius: 24,
			border: 'none',
			outline: 'none',
			marginBottom: 32,
			background: pink,
			color: white,
			'& .MuiTouchRipple-root span': {
				backgroundColor: 'rgb(255, 255, 255, 0.3)',
				opacity: 0.5,
			},
			'&:hover, &:focus': {
				background: salmon,
			},
		},
		image: {
			width: 300,
			[theme.breakpoints.down('md')]: {
				width: 353,
			},
		},
		cardMedia: {
			width: '100%',
		},
	})
)
