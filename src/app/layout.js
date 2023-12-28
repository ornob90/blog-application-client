import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={" max-w-[1400px] mx-auto font-poppins"}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
