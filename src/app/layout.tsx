import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AçaíDirect | Conectando o produtor da Amazônia ao mercado global",
  description: "Plataforma web e aplicativo móvel que conecta produtores, peconheiros, barqueiros, donos de batedeiras e compradores em uma rede justa e transparente no Amapá e Pará.",
  keywords: ["AçaíDirect", "Açaí", "Amazônia", "Peconheiros", "Barqueiro", "Donos de Batedeiras", "Amapá", "CINCA"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} bg-[#F8FAFC] text-[#0F172A] selection:bg-[#10B981] selection:text-white antialiased`}>
        <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex items-center justify-center font-bold">Carregando AçaíDirect...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
