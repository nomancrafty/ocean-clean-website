export const business = {
  name: "Supreme Sealers",
  shortName: "Supreme Sealers",
  slogan: "Sealed Right, Built to Last",
  phoneDisplay: "(615) 732-5377",
  phoneTel: "+16157325377",
  email: "supremesealers@icloud.com",
  hours: [
    { label: "Monday – Saturday", value: "7:00 AM – 6:00 PM" },
    { label: "Sunday", value: "By appointment" },
  ],
  regionShort: "Brentwood & Franklin, TN",
  regionFull: "Brentwood, Franklin, Cool Springs, Nolensville & Forest Hills, TN",
  county: "Williamson County",
  warrantyYears: "5-Year",
  yearsExperience: "15+",
  jobsCompleted: "1,200+",
  rating: "4.9",
  reviewCount: "160",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://supremesealers.vercel.app",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Google", href: "#" },
] as const;
