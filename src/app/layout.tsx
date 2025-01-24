import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Template',
  description: 'This is a template for initializing projects',
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body></body>
    </html>
  );
}
