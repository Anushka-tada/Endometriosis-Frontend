import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Endometriosis Surgery Specialists International",
  description: "Endometriosis Surgery Specialists International",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

         <link rel="icon" type="image/png" href="/assets/favicon.png" />
         
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
