import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: " Hakkı Aranıyor - Mystery Puzzle Game",
  description: "Explore intriguing mystery puzzles in  Hakkı Aranıyor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
