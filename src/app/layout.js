import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "سایت گردشگری تورینو",
  description: "بزرگترین سایت گردشگری داخلی و خارجی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
