export type Area = {
  slug: string;
  city: string;
  region: string;
  heroImage: string;
  blurb: string;
  intro: string[];
  highlights: string[];
};

export const areas: Area[] = [
  {
    slug: "brentwood",
    city: "Brentwood",
    region: "Williamson County, TN",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    blurb: "Large-lot driveways, pool decks & estate patios.",
    intro: [
      "Brentwood's large lots and long, winding driveways mean a lot of exposed concrete and paver square footage baking in the sun and taking on runoff from every storm. Between HOA curb-appeal expectations and the number of pool decks and outdoor living spaces we see in Brentwood, an unsealed surface stands out fast — and so does a properly sealed one.",
      "We work with Brentwood homeowners on everything from long entry driveways to paver pool decks, matching the sealer to how each surface is actually used so it holds up and looks the part.",
    ],
    highlights: [
      "Long estate driveways & circular drives",
      "Paver pool decks & outdoor kitchens",
      "HOA-friendly, curb-appeal-focused finishes",
      "Exposed aggregate entryways and walkways",
    ],
  },
  {
    slug: "franklin",
    city: "Franklin",
    region: "Williamson County, TN",
    heroImage:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    blurb: "Historic homes and fast-growing new subdivisions alike.",
    intro: [
      "Franklin is a mix of historic homes near downtown and newer construction spreading through the surrounding subdivisions — which means we see everything from decades-old broom-finish driveways to brand-new paver patios that just finished curing. Both need the same underlying protection against Tennessee's humid summers and freeze-thaw winters.",
      "Whether you're preserving an older driveway's character or protecting a patio that's only a season old, we tailor the cleaning, prep and sealer to the age and condition of the concrete or pavers in front of us.",
    ],
    highlights: [
      "Historic-home driveways & walkways near downtown Franklin",
      "New-construction patios & pool decks in growing subdivisions",
      "Broom-finish and exposed aggregate driveway sealing",
      "Sidewalk and walkway sealing for high-visibility curb appeal",
    ],
  },
  {
    slug: "cool-springs",
    city: "Cool Springs",
    region: "Franklin, TN",
    heroImage:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
    blurb: "Franklin's busy commercial & residential corridor.",
    intro: [
      "Cool Springs is one of the busiest corridors in Franklin — a dense mix of residential neighborhoods packed in around a major commercial district. That density means driveways, walkways and patios that see heavy day-to-day use and constant vehicle traffic nearby, which accelerates staining and wear on unsealed concrete.",
      "We help Cool Springs homeowners keep their driveways and patios protected against the extra grime and traffic that comes with living in one of Franklin's most active areas.",
    ],
    highlights: [
      "High-traffic residential driveways",
      "Patio & paver sealing for townhome and single-family communities",
      "Sidewalk sealing for busy, walkable neighborhoods",
      "Fast scheduling given the area's dense homeowner base",
    ],
  },
  {
    slug: "nolensville",
    city: "Nolensville",
    region: "Williamson County, TN",
    heroImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80",
    blurb: "One of Tennessee's fastest-growing towns.",
    intro: [
      "Nolensville is one of the fastest-growing towns in Tennessee, and that growth means a steady stream of newly poured driveways, patios and pool decks that need to be sealed for the first time — plus older properties along the historic Nolensville Pike corridor that need a fresh coat after years of exposure.",
      "We serve new-construction neighborhoods and long-established Nolensville properties alike, with the same honest inspection and sealer recommendation either way.",
    ],
    highlights: [
      "First-time sealing for new-construction driveways & patios",
      "Resealing for established homes along the Nolensville corridor",
      "Paver patio and outdoor living space sealing",
      "Exposed aggregate and broom-finish driveway sealing",
    ],
  },
  {
    slug: "forest-hills",
    city: "Forest Hills",
    region: "Davidson & Williamson County, TN",
    heroImage:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
    blurb: "Wooded estate lots bordering Nashville & Brentwood.",
    intro: [
      "Forest Hills is a small, exclusive residential city bordering Nashville and Brentwood, known for large wooded lots, long private driveways and mature landscaping. Heavy tree cover means more shade, more moisture retention and more organic staining on concrete and pavers than in open, sun-exposed neighborhoods.",
      "We account for that extra shade and moisture when we recommend a sealer for Forest Hills properties, so you get protection against mildew and staining in addition to the standard water and UV defense.",
    ],
    highlights: [
      "Long, shaded private driveways",
      "Mildew- and mold-resistant sealer options for wooded lots",
      "Exposed aggregate and paver entryways",
      "Estate-scale patios and outdoor living spaces",
    ],
  },
];

export function getAreaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug);
}
