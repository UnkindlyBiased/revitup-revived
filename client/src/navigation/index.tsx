import { createBrowserRouter } from 'react-router-dom';
import Container from '../components/container/Container';
import StartPage from '../pages/start.page';
import LoginPage from '../pages/auth/login.page';
import RegistratePage from '../pages/auth/registrate.page';
import PrivatePage from '../pages/private.page';
import { ArticleDetailedPage } from '../pages/article/article-detailed.page';

export const appRouter = createBrowserRouter([
    {
        element: <Container />,
        children: [
            {
                path: "/",
                element: <StartPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/registrate",
                element: <RegistratePage />,
            },
            {
                path: "/private",
                element: <PrivatePage />,
            },
            {
                path: "/articles/:link",
                element: <ArticleDetailedPage />,
            },
        ],
    },
]);