import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingCallButton from "@/components/layout/FloatingCallButton"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Tracckar — Keep Your Trucks Moving. Keep Your Revenue Growing.",
  description:
    "Tracckar helps owner-operators and fleets secure high-paying loads, reduce downtime, and simplify dispatch operations across the U.S.",
  keywords:
    "truck dispatch, owner operator dispatch, freight dispatch, load board, trucking dispatch service",
}

/* Inline script runs before React hydrates — prevents flash of wrong theme */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})()`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain page-grid font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
