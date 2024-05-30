
import "./globals.css";
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import { CartProvider } from "@/context/CartContext";
 
export const metadata: Metadata = {
  title: 'MKS Desafio',
  description: 'Desafio Front-end',
  keywords:"Desafio Frontend",
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <CartProvider>
      <body className={montserrat.className}>{children}</body>
      </CartProvider>
    </html>
  );
}


