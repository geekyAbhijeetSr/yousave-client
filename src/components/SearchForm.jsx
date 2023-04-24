import {
	Box,
	TextField,
	Typography,
	Button,
	useMediaQuery,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { SlowMotionVideo } from '@mui/icons-material'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'
import YoutubeIframe from './YoutubeIframe'
import LinksContainer from './LinksContainer'
import { toast } from 'react-hot-toast'

function SearchForm() {
	const theme = useTheme()
	const smDownMatches = useMediaQuery(theme.breakpoints.down('sm'))
	const [inputLink, setInputLink] = useState('')
	const [data, setData] = useState(null)
	const [pending, setPending] = useState(false)
	const navigate = useNavigate()
	const formElRef = useRef()

	const fetchData = async v_url => {
		setPending(true)

		const response = await fetch(
			`${import.meta.env.VITE_API_URI}/yt/video-info?url=${v_url}`
		)
		const data = await response.json()

		if (data.ok) {
			setData(data)
			navigate(`/?id=${data.videoDetails.videoId}`)
		} else {
			setData(null)
			toast.error(data.errorMsg)
			navigate('/')
		}

		setPending(false)
	}

	const submit = e => {
		e.preventDefault()
		if (!inputLink) return
		fetchData(inputLink)
	}

	const handleInputChange = e => {
		setInputLink(e.target.value)
	}

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search)
		const query = searchParams.get('id')
		if (query && query !== data?.videoDetails?.videoId) {
			const url = `https://youtu.be/${query}`
			setInputLink(url)
			fetchData(url)
		}
	}, [location.search])

	return (
		<Box
			sx={{
				paddingTop: {
					md: '8rem',
					sm: '5rem',
					xs: '3rem',
				},
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<SlowMotionVideo
				sx={{
					fontSize: '80px',
					color: 'primary.main',
					marginBottom: '1.5rem',
					cursor: 'pointer',
				}}
				onClick={() => {
					navigate('/')
					setInputLink('')
					setData(null)
					setPending(false)
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
					marginBottom: '3rem',
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
				}}
				className='form'
				ref={formElRef}
				onSubmit={submit}
			>
				<TextField
					value={inputLink}
					onChange={handleInputChange}
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

			{pending && <Loading />}

			{!pending && data && <YoutubeIframe videoDetails={data.videoDetails} />}

			{!pending && data && <LinksContainer videos={data.videos} audios={data.audios} />}
		</Box>
	)
}

export default SearchForm
