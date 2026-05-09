import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import ScrollReveal from '@/components/ScrollReveal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Gambit — Roll Your Theme, Ship Your Project',
  description: 'A Hack Club YSWS where random themes meet shipped projects and mystery prizes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
