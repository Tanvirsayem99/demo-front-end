
import "./globals.css";
import {AuthProvider} from "./provider/provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
