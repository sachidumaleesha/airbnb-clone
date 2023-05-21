import ClientOnly from "./components/ClientOnly";
import Model from "./components/models/Model";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb Clone",
  description: "Perfect Looking Places to Stay, for Every Trip.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Model title='Hello world' isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
