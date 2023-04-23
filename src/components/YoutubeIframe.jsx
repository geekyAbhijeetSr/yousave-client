import { Box } from '@mui/material'
import React from 'react'

function YoutubeIframe({ videoDetails }) {
	const { videoId } = videoDetails
	return (
		<Box
            sx={{
				maxWidth: 500,
				width: '100%',
				margin: '3rem 0 2rem',
			}}
		>
			<iframe
				style={{
					width: '100%',
                    aspectRatio: '16/9',
                    border: 0
				}}
				src={`https://www.youtube.com/embed/${videoId}`}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>
		</Box>
	)
}

export default YoutubeIframe
