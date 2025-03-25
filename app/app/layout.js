// import { Inter } from "next/font/google";
import Footer from "@/components/navigation/Footer";
import "./globals.css";
// import Subscription from "@/components/pop-ups/Subscription"
import Header from "@/components/navigation/Header";
import Navbar from "@/components/navigation/Navbar";
// import ScrollProvider from "@/components/hooks/ScrollProvider";
// import ThemeProviderWrapper from "@/components/ThemeProviderWrapper/ThemeProviderWrapper"; 
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Gospel Tabenacal",
  description: "Heart at the city at heart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden`}>
        {/* <ScrollProvider> */}
        {/* <ThemeProviderWrapper attribute="class" defaultTheme="light"> */}
      <Navbar />
        {children}
        {/* <Subscription/> */}
        <Footer />
        {/* </ThemeProviderWrapper> */}
        {/* </ScrollProvider> */}
      </body>
    </html>
  );
}
