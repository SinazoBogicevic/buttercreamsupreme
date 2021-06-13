import React, { useState, ReactElement } from 'react'
import Link from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { black, pink, white } from '../constants/colors'
import Sidebar from './Sidebar'

export type NavbarPops = {
	image: string
	links: { path: string; link: string }[]
}

export default function Navbar({ image, links }: NavbarPops): ReactElement {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen((prev) => !prev)
	console.log(open)

	const ListItemLink = links.map(({ path, link }) => {
		return (
			<ListItem key={link} className={classes.listItem}>
				<ListItemText>{link}</ListItemText>
			</ListItem>
		)
	})

	return (
		<div className={classes.root}>
			<AppBar position='sticky'>
				<Toolbar className={classes.toolbar}>
					<Typography variant='h6' className={classes.title}>
						Buttercream Supreme
					</Typography>
					<List className={classes.list}>{ListItemLink}</List>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
						onClick={handleOpen}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			{open && <Sidebar links={links} />}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'row',
			flexGrow: 1,
		},
		toolbar: {
			background: white,
			color: black,
		},
		title: {
			color: pink,
			flexGrow: 1,
			cursor: 'pointer',
		},
		list: {
			display: 'flex',
			flexGrow: 1,
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
		listItem: {
			color: black,
			textTransform: 'capitalize',
			'&:hover': {
				color: pink,
			},
		},
		link: {
			color: black,
			'&:hover': {
				color: pink,
			},
		},
		menuButton: {
			display: 'none',
			marginRight: theme.spacing(2),
			'&:hover': {
				background: pink,
			},
			[theme.breakpoints.down('sm')]: {
				display: 'block',
			},
		},
	})
)
