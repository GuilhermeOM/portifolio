import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import Header from '@/components/header';
import Container from '@/components/container';
import Footer from '@/components/footer/footer';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning -> https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
            <main className='py-28'>
              <Container>
                {children}
              </Container>
            </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
