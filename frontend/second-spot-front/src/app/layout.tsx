import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '2件目どうする',
  description: '現在地からランダムで2次会のお店を提案するサービスです',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
