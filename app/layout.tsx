import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
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
  title: "Traacker — Keep Your Trucks Moving. Keep Your Revenue Growing.",
  description:
    "Traacker helps owner-operators and fleets secure high-paying loads, reduce downtime, and simplify dispatch operations across the U.S.",
  keywords:
    "truck dispatch, owner operator dispatch, freight dispatch, load board, trucking dispatch service",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="grain page-grid font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
