import Header from "@/components/header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="flex flex-1 overflow-hidden min-h-0">{children}</main>
      </body>
    </html>
  );
}
