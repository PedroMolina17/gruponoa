import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MenuOverlay from "../components/MenuOverlay";
import Menu from "./menu/Menu";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MenuOverlay />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
