import { Inter } from 'next/font/google';
import React from 'react';
import { Provider } from '@/components/ui/provider';
import { StorageProvider } from '@/components/data/storage-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head>
        <title></title>
      </head>
      <body>
        <Provider>
          <StorageProvider>
            {children}
          </StorageProvider>
          </Provider>
      </body>
    </html>
  );
}
