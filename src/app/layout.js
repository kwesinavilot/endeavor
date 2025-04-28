import localFont from "next/font/local";
import "@/styles/globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Your Site Name',
  description: 'Your site description for Google ranking.',
  keywords: 'your,keywords,here',
  authors: [{ name: 'Your Name', url: 'https://yourdomain.com' }],
  openGraph: {
    title: 'Your Site Name',
    description: 'Your site description for social media.',
    url: 'https://yourdomain.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Site Name',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitter',
    creator: '@yourtwitter',
    title: 'Your Site Name',
    description: 'Your site description for Twitter.',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur border-b border-border flex items-center px-6 py-3 gap-6">
          <Link href="/" className="font-bold text-xl">Endeavor</Link>
          <div className="flex gap-4 flex-1">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          </div>
          <div className="flex gap-2">
            <Link href="/auth/signin" className="px-3 py-1 rounded bg-primary text-white hover:bg-primary/90">Sign In</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
