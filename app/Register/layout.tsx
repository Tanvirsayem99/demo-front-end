import "@/app/globals.css";



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
        {children}
      </body>
    </html>
  );
}

