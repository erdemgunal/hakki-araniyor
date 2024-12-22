import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: " Hakkı Aranıyor",
  description: "Hakkı Aranıyor'da ilgi çekici gizemli bulmacaları keşfedin.",
  "keywords": "bulmaca, durum bulmacası, gizemli bulmaca, durum bulmacaları, durum bulmacası oyunu, durum bulmacası oyunları, durum bulmacası oyna, durum bulmacası çöz, durum bulmacası çözümleri, durum bulmacası örnekleri, durum bulmacası oyunu nasıl oynanır, durum bulmacası oyunu kuralları, durum bulmacası oyunu hakkında, durum bulmacası oyunu hakkında bilgi, durum bulmacası oyunu oyna, durum bulmacası oyunu çöz, durum bulmacası oyunu çözümleri, durum bulmacası oyunu örnekleri, durum bulmacası oyunu nasıl oynanır, durum bulmacası oyunu kuralları, durum bulmacası oyunu hakkında, durum bulmacası oyunu hakkında bilgi, durum bulmacası oyunu oyna, durum bulmacası oyunu çöz, durum bulmacası oyunu çözümleri, durum bulmacası oyunu örnekleri, durum bulmacası oyunu nasıl oynanır, durum bulmacası oyunu kuralları, durum bulmacası oyunu hakkında, durum bulmacası oyunu hakkında bilgi, durum bulmacası oyunu oyna, durum bulmacası oyunu çöz, durum bulmacası oyunu çözümleri, durum bulmacası oyunu örnekleri, durum bulmacası oyunu nasıl oynanır, durum bulmacası oyunu kuralları, durum bulmacası oyunu hakkında, durum bulmacası oyunu hakkında bilgi, durum bulmacası oyunu oyna, durum bulmacası oyunu çöz, durum bulmacası oyunu çözümleri, durum bulmacası oyunu örnekleri, hakkı aranıyor"
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
