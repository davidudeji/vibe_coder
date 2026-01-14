import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {SessionProvider} from "next-auth/react"
import {auth} from "@/auth"
import { ThemeProvider } from "@/components/providers/theme-providers";

import Header from "@/modules/home/header"

import {Footer}  from "@/modules/home/footer"
import { cn } from "@/lib/utils"
import Home from "./(root)/page";

export const metadata: Metadata = {
    title: {
        template: "VibeCode -  Editor",
        default: "Code Editor For VibeCoders - VibeCode",
    }
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    
    <SessionProvider session={session}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header/>
              {/* <div className={cn("absolute inset-0","[bg_size:40px_40px]", "[bg_image:linear-gradient(to-right,#e4e4e7_1px, transparent_1px),linear-gradient(to-bottom,#e4e4e7_1px,transparent_1px)]",)}/>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-content bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%, black)] dark:bg-black"/> */}
          <Home/>
         <main className="z-20 relative w-full pt-0">
        {children}
        </main>
        </ThemeProvider>
        <Footer/>
      </body>
    </html>
    </SessionProvider>
   
    
  );
}
