import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

// message for delay in request caused by free hosting of backend
setTimeout(() => {
	alert(`I'm currently using a free hosting service for backend, free instance will spin down with inactivity, which can delay requests by 50 seconds or more, which means there might be a short delay when you first interact with the application. I apologize for any inconvenience this may cause.

Thank you for your patience.`)
}, 2000)

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
