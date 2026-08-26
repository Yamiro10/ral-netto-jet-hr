import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ral-netto-jet-hr.ciaoydr.chatgpt.site'),
  title: 'RAL → Netto | Jet HR',
  description: 'Stima la retribuzione netta annuale e mensile a partire dalla RAL, con il dettaglio di contributi e imposte.',
  openGraph: {
    title: 'RAL → Netto | Jet HR',
    description: 'Quanto ti resta davvero? Stima il netto e scopri ogni trattenuta.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'RAL → Netto — Quanto ti resta davvero?' }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAL → Netto | Jet HR',
    description: 'Quanto ti resta davvero? Stima il netto e scopri ogni trattenuta.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

