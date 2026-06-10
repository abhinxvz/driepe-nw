import type { Metadata } from "next";
import { Inter, Koulen } from "next/font/google";
import "./globals.css";
import StoreWrapper from "@/components/StoreWrapper";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const koulen = Koulen({ weight: "400", subsets: ["latin"], variable: "--font-koulen" });

export const metadata: Metadata = {
  title: "Driepe | Redefining Conventional Streetwear",
  description: "E-commerce platform for Driepe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="disable-devtools" strategy="beforeInteractive">
          {`
            // Disable right-click
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });

            // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
            document.addEventListener('keydown', function(e) {
              if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.key === 'U')
              ) {
                e.preventDefault();
                return false;
              }
            });

            // Disable text selection
            document.addEventListener('selectstart', function(e) {
              e.preventDefault();
              return false;
            });

            // Disable copy
            document.addEventListener('copy', function(e) {
              e.preventDefault();
              return false;
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${koulen.variable} min-h-screen bg-black text-white overflow-x-hidden selection:bg-gray-400 selection:text-black relative flex flex-col`}
        style={{ userSelect: 'none', WebkitUserSelect: 'none' } as React.CSSProperties}>
        <StoreWrapper>
          {children}
        </StoreWrapper>

        {/* Brutalist styled toasts */}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: {
              background: '#000',
              color: '#fff',
              border: '1px solid #333',
              borderRadius: '0px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 'bold',
            },
            className: 'font-sans'
          }} 
        />
      </body>
    </html>
  );
}