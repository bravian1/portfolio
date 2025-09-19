import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bravian Nyatoro - System Designer & Full-stack Developer",
  description: "System Designer and Full-stack Developer specializing in scalable backend systems with Go and Laravel. Building the future, one system at a time.",
  icons: {
    icon: ['/pfp.jpg'],
    shortcut: ['/pfp.jpg'],
    apple: ['/pfp.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/pfp.png" />
        <link rel="apple-touch-icon" href="/pfp.png" />
        <link rel="shortcut icon" href="/pfp.png" />
        <meta name="theme-color" content="#4FB3B3" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
