import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { brown, pink, white, overlay } from '../constants/colors'

export type props = {
	links: { path: string; link: string }[]
}

export default function Sidebar({ links }: props): ReactElement {
	const classes = useStyles()
	const ListItemLink = links.map(({ path, link }) => {
		return (
			<ListItem key={link} className={classes.listItem}>
				<ListItemText>{link}</ListItemText>
			</ListItem>
		)
	})
	return (
		<div className={classes.root}>
			<div className={classes.listContainer}>
				<List component='nav' className={classes.list}>
					{ListItemLink}
				</List>
			</div>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			height: '100vh',
			flexGrow: 1,
			background: overlay,
			zIndex: 10,
			//position: 'fixed',
		},
		listContainer: {
			display: 'flex',
			width: '80%',
			height: '100vh',
			background: pink,
			/**boxShadow:
				'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',*/
		},
		list: {
			display: 'flex',
			flexDirection: 'column',
			flexGrow: 1,
			marginTop: 32,
		},
		listItem: {
			color: white,
			textTransform: 'capitalize',
			fontSize: '1.2rem',
			marginTop: 16,
			transition: 'color .4s ease-in-out',
			cursor: 'pointer',
			'&:hover': {
				color: brown,
			},
		},
		link: {
			color: white,
			'&:hover': {
				color: pink,
			},
		},
	})
)
