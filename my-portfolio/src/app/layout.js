import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'SCG Portfolio',
  description: 'Showcasing my projects and skills in software development',
  openGraph: {
    title: 'SCG Portfolio',
    description: 'Showcasing my projects and skills in software development',
    url: 'https://portfolio-spencercgriffiths-projects.vercel.app/',
    images: [
      {
        url: 'https://portfolio-spencercgriffiths-projects.vercel.app/portfolioScreenshot.png',
        width: 800,
        height: 600,
        alt: 'SCG Portfolio Screenshot',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCG Portfolio',
    description: 'Showcasing my projects and skills in software development',
    creator: 'Spencer Clarke-Griffiths',
    images: ['https://portfolio-spencercgriffiths-projects.vercel.app/portfolioScreenshot.png'], 
  },
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  )
}

