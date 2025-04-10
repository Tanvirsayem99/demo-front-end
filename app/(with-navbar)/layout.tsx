
import "@/app/globals.css";
import Navbar from "../Navbar/Navbar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" data-theme="light">
      <body
        className=''
      >
          <Navbar/>
        {children}
      </body>
    </html>
  );
}
