import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MenuOverlay from "../components/MenuOverlay";
import Footer from "../components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grupo Noa",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/../img/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <MenuOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
