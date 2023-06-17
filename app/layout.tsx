
import { Footer } from "@components";
import Navbar from "@components/Navbar";
import "./globals.css";


export const metadata = {
  title: 'Car Explorer',
  description: "Discover world's best car showcase in one application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
