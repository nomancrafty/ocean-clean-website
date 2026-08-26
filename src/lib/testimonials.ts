export type Testimonial = {
  initials: string;
  name: string;
  city: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: "KM",
    name: "Karen M.",
    city: "Brentwood, TN",
    quote:
      "Our driveway was covered in oil stains and looked faded after years in the sun. Supreme Sealers cleaned it up and sealed it, and it looks brand new — they even walked us through how to keep it looking that way.",
  },
  {
    initials: "DR",
    name: "David R.",
    city: "Franklin, TN",
    quote:
      "We were losing sand out of our paver patio every time it rained hard. They re-sanded and sealed the whole thing and it's been rock solid since, no more weeds coming up between the pavers either.",
  },
  {
    initials: "AT",
    name: "Amanda T.",
    city: "Nolensville, TN",
    quote:
      "Honest team from the first phone call. They explained exactly what our exposed aggregate driveway needed and didn't try to upsell us on anything we didn't need. Pricing was upfront the whole way.",
  },
];
