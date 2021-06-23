import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card as MaterialCard } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export type Props = {
	name: string
	price: number
	salePrice: number
	sale: boolean
	thumb: string
	handleCard?: () => void
}

export default function Card({
	name,
	price,
	salePrice,
	sale,
	thumb,
	...rest
}: Props): ReactElement {
	const classes = useStyles()

	return (
		<MaterialCard className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt='Contemplative Reptile'
					height='140'
					image={thumb}
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{PromiseRejectionEvent}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					{price}
				</Button>
				<Button size='small' color='primary'>
					Add to cart
				</Button>
			</CardActions>
		</MaterialCard>
	)
}

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
})
