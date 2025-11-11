import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/auth';
import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Aura-Right',
  description: 'HPV learning platform',
  icons: {
    icon: '/logo_new.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
