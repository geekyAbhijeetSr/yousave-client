import { Container, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import SearchForm from './components/SearchForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
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
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Container maxWidth='md'>
					<Routes>
						<Route path='/' element={<SearchForm />} />
					</Routes>
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
