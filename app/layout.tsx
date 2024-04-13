import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Shifty",
    default: "Shifty",
  },
  description: "Tell us your shifts and we'll handle the rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-radial from-blue-100 to-slate-50">
        <Toaster position="bottom-right" richColors />
        {children}
      </body>
    </html>
  );
}
