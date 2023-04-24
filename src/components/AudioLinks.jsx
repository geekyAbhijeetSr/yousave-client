import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Stack, Typography } from '@mui/material'
import { bytesToSize } from '../helper/utils'

export default function AudioLinks({ audios }) {
	const downloadClickHandle = url => {
		const downloadLink = document.createElement('a')
		downloadLink.href = url
		downloadLink.download = 'audio.mp3'
		downloadLink.target = '_blank'
		downloadLink.click()
		downloadLink.remove()
	}

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 100 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Audio Bitrate</TableCell>
						<TableCell align='right'>File Size</TableCell>
						<TableCell align='right'>Download</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{audios.map(a => (
						<TableRow
							key={a.itag}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								<Stack flexDirection={'row'} gap={0.5}>
									<Typography>{a.audioBitrate} kbps</Typography>
								</Stack>
							</TableCell>
							<TableCell align='right'>
								{a.contentLength ? bytesToSize(+a.contentLength) : '- -'}
							</TableCell>
							<TableCell align='right'>
								<Button
									variant='contained'
									color='success'
									onClick={() => {
										downloadClickHandle(a.url)
									}}
								>
									Download
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
