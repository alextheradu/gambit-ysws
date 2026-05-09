import type { Metadata } from 'next';
import { Space_Grotesk, Cinzel } from 'next/font/google';
import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Gambit — Roll Your Theme, Ship Your Project',
  description: 'A Hack Club YSWS where random themes meet shipped projects and mystery prizes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${cinzel.variable} font-sans`} suppressHydrationWarning>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
