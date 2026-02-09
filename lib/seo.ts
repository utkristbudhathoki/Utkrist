import type { Metadata } from "next";

// Personal Information
const siteName = "Utkrist Budhathoki · Software Engineer";
const baseUrl = "https://utkrist.dev";
const description =
  "Personal portfolio of Utkrist Budhathoki, a passionate software engineer specializing in Next.js, React, TypeScript, MongoDB, and Django. Building modern, fast, and accessible web experiences.";

// SEO Metadata Configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: "%s · Utkrist Budhathoki"
  },
  description,
  keywords: [
    "Utkrist Budhathoki",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Full Stack Developer",
    "Nepal",
    "Web Development",
    "Frontend Engineer"
  ],
  authors: [{ name: "Utkrist Budhathoki", url: baseUrl }],
  creator: "Utkrist Budhathoki",
  publisher: "Utkrist Budhathoki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName,
    title: siteName,
    description,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Utkrist Budhathoki - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@u_budhathoki",
    images: [`${baseUrl}/og-image.png`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

// Social Links
export const socialLinks = {
  email: "utkristbudhathoki19@gmail.com",
  linkedin: "https://linkedin.com/in/utkrist-budhathoki-6b1397384",
  twitter: "https://twitter.com/u_budhathoki",
  instagram: "https://www.instagram.com/utkrist_budhathoki/",
  discord: "https://discord.gg/aKAEX7RJ77",
  github: "https://github.com/utkristbudhathoki"
} as const;
