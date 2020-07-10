import React, { useEffect, useState } from 'react'
// import useInterval from './hooks/useInterval'
import useWindowSize from './hooks/useWindowSize'
import us from './assets/counties-albers-10m.json'
import * as topojson from 'topojson-client'
// import AnimatedCircle from './components/AnimatedCircle'
import * as d3 from 'd3'
import './reset.css'
import './App.css'

// const Svg = () => {
// 	return (
// 		<svg
// 			style={{
// 				border: '2px solid gold'
// 			}}
// 		/>
// 	)
// }

// const Circle = () => {
// 	return (
// 		<svg>
// 			<circle cx='150' cy='77' r='40' />
// 		</svg>
// 	)
// }

// const allCircles = d3.range(0, 10)
// const generateCircles = () => allCircles.filter(() => Math.random() < 0.5)

const App = () => {
	const viewBoxSize = useWindowSize()

	return (
		<div className='App'>
			{/* <Svg />
			<Circle /> */}
			<USMap vbHeight={viewBoxSize.height} vbWidth={viewBoxSize.width} />
		</div>
	)
}

export default App

const USMap = ({ vbHeight, vbWidth }) => {
	const path = d3.geoAlbersUsa()
  console.table(us)
	return (
		<svg viewBox={`0 0 ${vbWidth} ${vbHeight}`}>
			<g fill='none' stroke='#000' strokeLinejoin='round' strokeLinecap='round'>
				{/* <path
					stroke='#aaa'
					strokeWidth='0.5'
					d={path(
						topojson.mesh(
							us,
							us.objects.counties,
							(a, b) => a !== b && ((a.id / 1000) | 0) === ((b.id / 1000) | 0)
						)
					)}
				></path> */}
				<path
					strokeWidth='0.5'
					d={path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}
				></path>
				<path d={path(topojson.feature(us, us.objects.nation))}></path>
			</g>
		</svg>
	)
}
