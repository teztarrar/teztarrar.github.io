import type { Metadata } from "next";
import "./globals.css";
import {
  Inter,
  Poppins,
  David_Libre,
  Fira_Code,
  Lora,
  Spectral,
} from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const davidLibre = David_Libre({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-david-libre",
});

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const spectral = Spectral({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Vishu Dev Singh - Technical Support Executive | Cybersecurity Professional",
  description: "IT professional with hands-on experience in technical support, cybersecurity, and networking. Specialized in MS 365, Azure EDR/XDR, Linux administration, and system security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${davidLibre.variable} ${firaCode.variable} ${lora.variable} ${spectral.variable} antialiased bg-[#11120d] text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}