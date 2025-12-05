import '../app/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'

export const metadata = {
  title: 'Axis Football Tours',
  description: 'World-class soccer tours for players, coaches and parents',
  icons: {
    icon: "/favicon.png",
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        {/* REMOVE padding from main */}
        <main>{children}</main>

        {/* ADD spacer so footer does NOT get covered by StickyCTA */}
        <div className="h-32 md:h-0"></div>

        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}