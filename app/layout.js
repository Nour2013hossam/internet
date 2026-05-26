import './globals.css';

export const metadata = {
  title: 'Sharq Tech',
  description: 'Futuristic technology team platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
