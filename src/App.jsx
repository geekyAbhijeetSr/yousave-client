import { Box, Container, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import SearchForm from './components/SearchForm'

function App() {
	let theme = createTheme({
		palette: {
			primary: {
				main: '#c00',
			},
			background: {
				default: '#eef0f4',
				paper: '#fff',
			},
		},
		shape: {
			borderRadius: 16,
		},
		shadows: Array(25).fill('none'),
		typography: {
			button: {
				textTransform: 'none',
			},
		},
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						minWidth: '100px',
					},
				},
			},
		},
	})
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='md'>
				<SearchForm />
			</Container>
		</ThemeProvider>
	)
}

export default App
