import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Roboto } from "next/font/google";
import BootstrapJs from "./components/bootstrap-js/BootstrapJs";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eCommerce Application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <Header />
        </div>
        <div className="pt-5" style={{ minHeight: "54vh" }}>
          {children}
        </div>
        <div>
          <Footer />
        </div>
        <BootstrapJs />
      </body>
    </html>
  );
}
