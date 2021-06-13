import React, { ReactElement } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Maintenance from '../components/Maintenance'
import Navbar from '../components/Navbar'

export default function Home() {
	const img = 'image'
	const list = [
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
		{
			path: '/home',
			link: 'home',
		},
	]

	return <Navbar image={img} links={list} />
}

// export default function Home() {
//   return <Navbar image='logo' links={links}/>
// }

// const links=[
//   {
//       path: "/home",
//       link:"home"
//   },
//   {
//       path: "/products",
//       link:"products"
//   },
//   {
//       path: "/gallery",
//       link:"gallery"
//   }
// ]
