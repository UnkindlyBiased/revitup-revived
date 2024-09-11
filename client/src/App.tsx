import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Container from "./components/container/Container"
import { ThemeProvider } from './providers/theme.provider'
import LanguageProvider from './providers/language.provider'
import StartPage from './pages/start.page'
import AuthProvider from './providers/auth.provider'
import LoginPage from './pages/auth/login.page'

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