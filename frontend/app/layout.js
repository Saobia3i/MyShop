import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Department of Computer Science and Engineering',
  description: 'University of Dhaka - Department of Computer Science and Engineering website',
};

// Root layout must have html and body tags
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
