import type { Metadata } from 'next';
import { Noto_Sans, Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import './globals.css';
import theme from './theme';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
const notoSans = Noto_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--noto-sans',
});

export const metadata: Metadata = {
  title: 'WIXI Exchange',
  description: 'WIXI - Crypto exchange. Buying and selling cryptocurrencies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} ${notoSans.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
