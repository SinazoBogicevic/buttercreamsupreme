import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import { grey } from '../constants/colors'
import Card from '../components/Card'

export type Props = {
	featuredProducts: [
		{
			name: string
			price: number
			salePrice: number
			thumb: string
			sale: boolean
		}
	]
}

export default function Featured(): ReactElement {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<div className={classes.textContainer}>
				<Typography className={classes.title} variant='h1'>
					our featured cakes
				</Typography>
				<Typography className={classes.subtitle} variant='h3'>
					Seldolor sit amet consect etur
				</Typography>
			</div>
			<Grid container justify='center' spacing={4}>
				{PRODUCTS_STATICS.map(({ name, price, sale, salePrice, thumb }) => (
					<Card
						key={name}
						name={name}
						price={price}
						salePrice={salePrice}
						thumb={thumb}
						sale={sale}
						handleCard={() => console.log(name)}
					/>
				))}
			</Grid>
		</div>
	)
}

const PRODUCTS_STATICS = [
	{
		name: 'Product1',
		price: 250,
		salePrice: 190,
		sale: true,
		thumb:
			'https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg',
	},
	{
		name: 'Product2',
		price: 250,
		salePrice: 190,
		sale: true,
		thumb:
			'https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg',
	},
	{
		name: 'Product3',
		price: 250,
		salePrice: 190,
		sale: true,
		thumb:
			'https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg',
	},
	{
		name: 'Product4',
		price: 250,
		salePrice: 190,
		sale: true,
		thumb:
			'https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg',
	},
]

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			flexDirection: 'column',
		},
		title: {
			textTransform: 'capitalize',
			fontWeight: 500,
			fontSize: '2rem',
		},
		subtitle: {
			fontSize: 18,
			color: grey,
		},
		textContainer: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
		},
	})
)
