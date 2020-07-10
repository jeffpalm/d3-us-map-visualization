import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedCircle = ({ isShowing, index}) => {
	const wasShowing = useRef(false)

	useEffect(() => {
		wasShowing.current = isShowing
	}, [isShowing])

	const style = useSpring({
		config: {
			duration: 1200
		},
		opacity: isShowing ? 1 : 0,
		r: isShowing ? 50 : 0
	})
	
	return (
		<animated.circle
			{...style}
			cx={index * 100 + 100}
			cy='100'
			fill={
				!isShowing
					? 'tomato'
					: !wasShowing.current
					? 'cornflowerblue'
					: 'lightgrey'
			}
		/>
	)
}

export default AnimatedCircle
