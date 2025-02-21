import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import { Toaster  } from "react-hot-toast";
import { GoogleOAuthProvider } from '@react-oauth/google';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Super Sweets & Bakers",
  description: "Bakery Sweets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-E00S0WS0PE"></script>
      <script id="google-analytics">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E00S0WS0PE');
  `}
</script>
      <body
        className={`${roboto.className} antialiased`}
      >
        <GoogleOAuthProvider clientId={``}>
          <Toaster/>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
// ${process.env.CLIENT_ID}