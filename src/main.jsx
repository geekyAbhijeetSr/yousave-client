import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Toaster
			position='top-center'
			reverseOrder={false}
			toastOptions={{
				// Define default options
				className: '',
				duration: 5000,
				style: {
					fontFamily: 'Roboto'
				},
			}}
		/>
		<App />
	</React.StrictMode>
)
