import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Navbar } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KCC Hotels - Luxury Accommodation & Experiences',
  description: 'Experience luxury like never before at KCC Hotels. Discover our premium rooms, exquisite dining, and exceptional service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}