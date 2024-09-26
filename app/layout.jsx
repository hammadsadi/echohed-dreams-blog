import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900']
})

export const metadata = {
  title: "Echohed Dreams",
  description: "Echohed Dreams Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins}`}
      >
        <Navbar/>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
