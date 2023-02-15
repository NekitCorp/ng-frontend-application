import { Layout } from '@/src/components/layout/layout';
import GlobalStyle from '@/styles/GlobalStyles';
import { darkTheme } from '@/styles/theme';
import { Cinzel, Lato } from '@next/font/google';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'], display: 'swap' });

const config: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5
		},
		mutations: {
			retry: 5,
			retryDelay: 500
		}
	}
};

const queryClient = new QueryClient(config);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.svg' />
				<meta name='robots' content='noindex' />
			</Head>

			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={darkTheme}>
					<GlobalStyle />
					<Layout mainClassName={cinzel.className}>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}
