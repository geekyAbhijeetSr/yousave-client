import {
	Box,
	TextField,
	Typography,
	Button,
	useMediaQuery,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { SlowMotionVideo } from '@mui/icons-material'
import Loading from './Loading'

function SearchForm() {
	const theme = useTheme()
	const smDownMatches = useMediaQuery(theme.breakpoints.down('sm'))
	const [inputLink, setInputLink] = useState('')
	const [data, setData] = useState(null)
	const [pending, setPending] = useState(false)

	const submit = async e => {
		e.preventDefault()
		if (!inputLink) return

		setPending(true)

		const response = await fetch(
			`${import.meta.env.VITE_API_URI}/yt/video-info?url=${inputLink}`
		)
		const data = await response.json()

		console.log(data)

		if (data.ok) {
			setData(data)
		} else {
			setData(null)
		}

		setPending(false)
	}

	return (
		<Box
			sx={{
				margin: '2rem 0rem',
				marginTop: '4rem',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: !data ? '70vh' : 'auto'
			}}
		>
			<SlowMotionVideo
				sx={{
					fontSize: '80px',
					color: 'primary.main',
					marginBottom: '1.5rem',
				}}
			/>

			<Typography
				sx={{
					textAlign: 'center',
				}}
				color='primary'
				component='h2'
				variant='h6'
			>
				YouSave
			</Typography>
			<Typography
				sx={{
					textAlign: 'center',
					marginBottom: '1.5rem',
				}}
				color='primary'
				component='h2'
				variant={smDownMatches ? 'h6' : 'h5'}
			>
				Free YouTube Downloader
			</Typography>
			<Typography
				sx={{
					textAlign: 'center',
					fontWeight: 300,
				}}
				component='h2'
				variant={smDownMatches ? 'h4' : 'h3'}
			>
				Download YouTube Videos & Audios
			</Typography>

			<form
				style={{
					position: 'relative',
					width: '100%',
					margin: '3rem',
				}}
				className='form'
				onSubmit={submit}
			>
				<TextField
					value={inputLink}
					onChange={e => {
						setInputLink(e.target.value)
					}}
					fullWidth
					placeholder='Paste an youtube video link'
				/>
				<Button
					sx={{
						position: 'absolute',
						top: '0.65em',
						right: '0.65em',
					}}
					type='submit'
					className='buttton'
					variant='contained'
				>
					Search
				</Button>
			</form>

			{
				pending && <Loading />
			}
		</Box>
	)
}

export default SearchForm
