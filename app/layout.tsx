import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uday Cable Service - Digital Cable TV Provider Chennai',
  description: 'Trusted local digital cable provider in Chennai since 1992. Offering 4K resolution, Dolby Atmos, and premium cable services through SCV, TCCL, and VK Digital.',
  keywords: 'cable tv chennai, digital cable, SCV, TCCL, VK Digital, Alwarpet cable service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}