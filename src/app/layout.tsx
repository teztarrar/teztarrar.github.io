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
  metadataBase: new URL('https://teztarrar.github.io'),
  title: {
    default: "Vishu Dev Singh - Technical Support Executive | Cybersecurity Professional",
    template: "%s | Vishu Dev Singh"
  },
  description: "IT professional with hands-on experience in technical support, cybersecurity, and networking. Specialized in MS 365, Azure EDR/XDR, Linux administration, system security, Microsoft Defender, SIEM tools, and network security. Based in Vadodara, Gujarat, India.",
  keywords: [
    "Vishu Dev Singh",
    "Technical Support Executive",
    "Cybersecurity Professional",
    "IT Support",
    "Network Security",
    "Microsoft Defender",
    "SIEM Tools",
    "Azure EDR",
    "Linux Administration",
    "Active Directory",
    "Windows Server",
    "Cybersecurity Analyst",
    "IT Professional",
    "Vadodara",
    "Gujarat",
    "India",
    "Microsoft 365",
    "Network Troubleshooting",
    "System Administration",
    "Ethical Hacking",
    "Security Operations",
    "Incident Response",
    "Vulnerability Management"
  ],
  authors: [{ name: "Vishu Dev Singh", url: "https://github.com/imvishudevsingh" }],
  creator: "Vishu Dev Singh",
  publisher: "Vishu Dev Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teztarrar.github.io",
    siteName: "Vishu Dev Singh Portfolio",
    title: "Vishu Dev Singh - Technical Support Executive | Cybersecurity Professional",
    description: "IT professional with hands-on experience in technical support, cybersecurity, and networking. Specialized in MS 365, Azure EDR/XDR, Linux administration, and system security.",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Vishu Dev Singh - Technical Support Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishu Dev Singh - Technical Support Executive | Cybersecurity Professional",
    description: "IT professional with hands-on experience in technical support, cybersecurity, and networking.",
    images: ["/avatar.png"],
    creator: "@imvishudevsingh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://teztarrar.github.io",
  },
  category: "Portfolio",
  classification: "Personal Portfolio Website",
  other: {
    "contact:email": "imvishudevsingh@gmail.com",
    "contact:phone_number": "+91 9724500202",
    "contact:locality": "Vadodara",
    "contact:region": "Gujarat",
    "contact:country_name": "India",
    "theme-color": "#11120d",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

// Structured Data (JSON-LD) for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vishu Dev Singh",
  "jobTitle": "Technical Support Executive",
  "worksFor": {
    "@type": "Organization",
    "name": "Cyber Hospitality Pvt. Ltd.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  },
  "email": "imvishudevsingh@gmail.com",
  "telephone": "+91-9724500202",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "url": "https://teztarrar.github.io",
  "sameAs": [
    "https://github.com/imvishudevsingh",
    "https://linkedin.com/in/vishu-dev-singh-1292571ba"
  ],
  "knowsAbout": [
    "Cybersecurity",
    "Network Security",
    "Microsoft Defender",
    "SIEM Tools",
    "Linux Administration",
    "Windows Server",
    "Active Directory",
    "Microsoft 365",
    "Azure EDR",
    "System Administration",
    "Network Troubleshooting",
    "Ethical Hacking",
    "Incident Response"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Parul University",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Open Source Software Development - Linux Foundation"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Ethical Hacking Essentials - EC-Council"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Google Cybersecurity Analyst"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "IBM Cybersecurity Analyst"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${davidLibre.variable} ${firaCode.variable} ${lora.variable} ${spectral.variable} antialiased bg-[#11120d] text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}