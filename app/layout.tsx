import ClientOnly from "./components/ClientOnly";
import RegisterModel from "./components/models/RegisterModel";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModel from "./components/models/LoginModel";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb Clone",
  description: "Perfect Looking Places to Stay, for Every Trip.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Toaster/>
          <LoginModel/>
          <RegisterModel />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
