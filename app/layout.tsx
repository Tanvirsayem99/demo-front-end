
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import { AuthProvider } from "./provider";


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
        <AuthProvider>
          <Navbar/>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
