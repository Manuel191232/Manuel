import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Nexus Práxis - Formação & Consultoria',
  description: 'Desenvolvemos competências. Geramos resultados. Transformamos pessoas e fortalecemos organizações através de formação e consultoria em comunicação, liderança e desenvolvimento profissional.',
  generator: 'v0.app',
  keywords: ['formação', 'consultoria', 'liderança', 'comunicação', 'desenvolvimento profissional', 'Angola'],
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="bg-background">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
