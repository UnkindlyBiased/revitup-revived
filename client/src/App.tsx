import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Container from "./components/container/Container"
import { ThemeProvider } from './providers/ThemeProvider'
import LanguageProvider from './providers/LanguageProvider'
import StartPage from './pages/StartPage'
import AuthProvider from './providers/AuthProvider'
import LoginPage from './pages/auth/LoginPage'

const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	})
	const router = createBrowserRouter([{
		element: <Container />,
		children: [
			{
				path: '/',
				element: <StartPage />
			},
			{
				path: '/login',
				element: <LoginPage />
			}
		]
	}])

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<LanguageProvider>
					<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
						<RouterProvider router={router} />
					</ThemeProvider>
				</LanguageProvider>
			</AuthProvider>
		</QueryClientProvider>
	)
}

export default App