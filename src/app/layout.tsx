import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>DevFusion</title>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
