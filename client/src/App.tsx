import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "./providers/theme.provider";
import LanguageProvider from "./providers/language.provider";
import AuthProvider from "./providers/auth.provider";
import { appRouter } from './navigation';

const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            },
        },
    });

    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <LanguageProvider>
                        <ThemeProvider
                            defaultTheme="light"
                            storageKey="vite-ui-theme"
                        >
                            <RouterProvider router={appRouter} />
                        </ThemeProvider>
                    </LanguageProvider>
                </AuthProvider>
            </QueryClientProvider>
        </HelmetProvider>
    );
};

export default App;
