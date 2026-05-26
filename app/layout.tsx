import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sharq Tech',
  description: 'Futuristic team platform UI for Sharq Tech'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
