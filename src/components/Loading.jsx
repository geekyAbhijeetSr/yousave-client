import { Player } from '@lottiefiles/react-lottie-player'
import { Box } from '@mui/material'
import loading from '../assets/loading.json'
import React from 'react'

function Loading() {
	return (
		<Box>
			<Player
				autoplay
                speed={1}
                loop
				src={loading}
				style={{ height: '250px', width: '100%' }}
			/>
		</Box>
	)
}

export default Loading
