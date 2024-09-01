import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Container from "./components/container/Container"

const App = () => {
	const router = createBrowserRouter([{
		element: <Container />,
		children: [
			{
				path: '/',
				element: <span>Hello</span>
			}
		]
	}])
	return <RouterProvider router={router} />
}

export default App