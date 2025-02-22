import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'], // Optimize for Latin characters
  weight: ['300', '400', '700'], // Choose font weights
  variable: '--font-nunito-sans' // Define a CSS variable
});

export const metadata = {
  metadataBase: new URL("https://grc-consulting.vercel.app"),
  title: "GRC Consulting",
  description: "Our mission is to empower businesses and individuals with robust risk and compliance solutions. To offer governance, risk and compliance education and career Development through innovative technology and expert led training, which Ensures a secure and compliant operationl environment",
  keywords: "Consulting, GRC, Government Risk Compliance, Comprehensive Training and Consulting, GRC consulting",
  authors: [{ name: "GRC Consulting", url: "https://grc-consulting.vercel.app" }],
 

  // Open Graph / Facebook
  openGraph: {
    title: "GRC Consulting | Comprehensive Training and Consulting",
    description: "Our expert team is dedicated to helping organizations navigate the complex landscape of governance, risk, and compliance while nurturing the next generation of GRC professionals",
    url: "https://grc-consulting.vercel.app",
    siteName: "GRC Consulting",
    images: ["/Assets/Logo.png"], // Ensure this file is in `public/`
    type: "website",
  },

  // Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "GRC Consulting | Comprehensive Training and Consulting",
    description: "Our expert team is dedicated to helping organizations navigate the complex landscape of governance, risk, and compliance while nurturing the next generation of GRC professionals",
    images: ["/Assets/Logo.png"], // Ensure this file is in `public/`
  },

  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
