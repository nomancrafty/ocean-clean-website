import type { IconKey } from "@/components/icons";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  cardCopy: string;
  heroImage: string;
  icon: IconKey;
  intro: string[];
  checklist: string[];
  signs: string[];
  ctaLabel: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "concrete-sealing",
    name: "Concrete Sealing",
    shortName: "Concrete Sealing",
    tagline: "Driveways & Sidewalks",
    cardCopy:
      "Commercial-grade sealers that protect standard driveways, sidewalks and walkways from stains, salt and sun damage.",
    heroImage:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    icon: "layers",
    intro: [
      "Your driveway and sidewalks take more abuse than almost any other surface on your property — tires, deicing salt, oil drips, mower traffic and constant sun exposure. Left unsealed, concrete absorbs water, oil and chlorides, which leads to staining, pitting and the freeze-thaw cracking that's common through Middle Tennessee winters.",
      "We clean, repair and seal standard broom-finish and smooth-finish concrete with a professional penetrating or acrylic topical sealer matched to your surface and how it's used, so it resists stains and weather instead of just looking wet for a season.",
    ],
    checklist: [
      "Pressure washing & degreasing before every application",
      "Crack and joint inspection with minor repairs included",
      "Penetrating or acrylic sealer matched to traffic & sun exposure",
    ],
    signs: [
      "Water no longer beads on the surface",
      "Dark stains from oil, tires or fertilizer",
      "Chalky white efflorescence or a faded, dusty look",
      "Small surface pits or flaking after winter",
    ],
    ctaLabel: "Get My Driveway Estimate",
    faqs: [
      {
        q: "How long does a sealed driveway last before it needs to be resealed?",
        a: "Most penetrating sealers protect a driveway for 3-5 years, while topical acrylic sealers on high-traffic areas typically need a refresh coat every 1-2 years. We'll recommend a resealing schedule based on your specific driveway and traffic during your free estimate.",
      },
      {
        q: "Will sealing make my driveway slippery?",
        a: "Not with the right product. We match a slip-appropriate sealer to your surface — a matte or low-sheen finish for daily-use driveways, so you get protection without sacrificing traction.",
      },
      {
        q: "Can you seal a new concrete driveway?",
        a: "Yes, but new concrete needs to cure fully first — typically 28-30 days — before sealing. We're happy to schedule around your pour date.",
      },
    ],
  },
  {
    slug: "patio-paver-sealing",
    name: "Patio Paver Sealing",
    shortName: "Paver Sealing",
    tagline: "Patios & Outdoor Living",
    cardCopy:
      "Joint-stabilizing paver sealers that lock in sand, block weeds and ants, and bring out the true color of your patio.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    icon: "grid",
    intro: [
      "Paver patios, pool decks and outdoor kitchens are where Middle Tennessee homeowners spend their summers — but loose joint sand, weeds, ants and fading color creep in fast without protection. A proper paver sealer does more than add shine: it locks polymeric sand in place, keeps weeds and insects from taking over the joints, and shields the pavers from mildew and stains.",
      "We clean every joint and surface, re-sand where needed, and apply a joint-stabilizing sealer in either a wet-look enhancer or a natural low-sheen finish — whichever suits your outdoor space.",
    ],
    checklist: [
      "Full surface cleaning with joint-safe pressure washing",
      "Polymeric sand refresh in open or washed-out joints",
      "Joint-stabilizing sealer: wet-look or natural low-sheen finish",
    ],
    signs: [
      "Sand washing out from between pavers",
      "Weeds or ants working their way into the joints",
      "Faded, dull or blotchy paver color",
      "Green or black mildew in shaded areas",
    ],
    ctaLabel: "Get My Patio Estimate",
    faqs: [
      {
        q: "Will sealing stop weeds and ants in my paver joints?",
        a: "A joint-stabilizing sealer locks the sand in place and closes off the gaps insects and weed seeds use to get established, which dramatically cuts down on both — though we always recommend a quick yearly touch-up along the edges for the best results.",
      },
      {
        q: "What's the difference between a wet-look and natural finish?",
        a: "Wet-look sealers deepen paver color and add a glossy sheen, popular on pool decks and patios. Natural, low-sheen sealers protect the same way without changing the look of the stone much at all. We'll show you samples before we start.",
      },
      {
        q: "Can you seal pavers around a pool?",
        a: "Yes — pool decks are one of our most common paver jobs. We use a sealer rated for splash and chlorine exposure so the finish holds up around the water.",
      },
    ],
  },
  {
    slug: "brushed-broomed-concrete-sealing",
    name: "Brushed / Broomed Concrete Sealing",
    shortName: "Broomed Concrete Sealing",
    tagline: "Textured, Slip-Resistant Surfaces",
    cardCopy:
      "Breathable penetrating sealers built for broom-finish concrete, so you keep the grip without trapping moisture.",
    heroImage:
      "https://images.unsplash.com/photo-1518709414768-a88981a4515d?auto=format&fit=crop&w=1600&q=80",
    icon: "waves",
    intro: [
      "Broom-finish concrete is everywhere for a reason — that light texture gives you traction on driveways, walkways and pool decks. But sealing a broomed surface takes a different approach than sealing smooth concrete: a heavy topical coating can fill in the texture and leave the surface slick when wet, which defeats the purpose of the finish in the first place.",
      "We use breathable, penetrating sealers formulated to soak into broomed and brushed concrete rather than sit on top of it, preserving the texture and grip while still blocking water, oil and salt from getting in.",
    ],
    checklist: [
      "Texture-safe cleaning that clears grooves without eroding them",
      "Breathable penetrating sealer that preserves slip resistance",
      "Even, streak-free application across broom lines",
    ],
    signs: [
      "Texture looking flattened, dirty or gray",
      "Water pooling instead of draining off the surface",
      "Salt or mineral staining along broom lines",
      "First-time sealing on a newer broom-finish pour",
    ],
    ctaLabel: "Get My Broomed Concrete Estimate",
    faqs: [
      {
        q: "Will sealing my broom-finish concrete make it slippery?",
        a: "Not with the penetrating sealers we use. They soak into the surface instead of coating over it, so the broom texture — and the grip it provides — stays intact.",
      },
      {
        q: "Is broomed concrete sealed differently than smooth concrete?",
        a: "Yes. Topical sealers that work well on smooth concrete can pool in the grooves of a broom finish and create slick spots. We use breathable penetrating sealers specifically because they don't change the surface texture.",
      },
      {
        q: "How often does broom-finish concrete need to be resealed?",
        a: "Typically every 3-5 years for a penetrating sealer, though pool decks and high-traffic walkways may benefit from a check-up sooner. We'll give you a straight answer at your free inspection.",
      },
    ],
  },
  {
    slug: "exposed-aggregate-sealing",
    name: "Exposed Aggregate Sealing",
    shortName: "Aggregate Sealing",
    tagline: "Brown, Gray, Clear & Custom Finishes",
    cardCopy:
      "Enhance and protect exposed aggregate in brown, gray, clear or custom finishes with a sealer built for stone.",
    heroImage:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
    icon: "gem",
    intro: [
      "Exposed aggregate brings texture and natural stone color to driveways, patios and pool surrounds — but that same exposed stone is more vulnerable to staining, pitting and fading than a standard concrete finish. Unsealed aggregate lets water and freeze-thaw cycles work directly on the individual stones, which loosens them over time.",
      "We seal brown, gray, clear and custom aggregate finishes with products designed to enhance stone color and saturation while locking the surface against water intrusion, salt and UV fading — so the look you paid for lasts.",
    ],
    checklist: [
      "Deep clean to lift embedded dirt from every stone and groove",
      "Color-enhancing or clear sealer matched to your aggregate finish",
      "UV-stable formula to resist sun fading and chalking",
    ],
    signs: [
      "Stones looking dull, chalky or washed out",
      "Individual aggregate pieces coming loose",
      "Staining that clings to the exposed stone texture",
      "It's been more than a few years since the last seal coat",
    ],
    ctaLabel: "Get My Aggregate Estimate",
    faqs: [
      {
        q: "Do you seal both brown and gray exposed aggregate?",
        a: "Yes — we work with brown, gray, clear and custom aggregate blends, and match the sealer chemistry and sheen to your specific stone so the color reads the way it's supposed to.",
      },
      {
        q: "Will sealing darken or change the color of my aggregate?",
        a: "It depends on the product. Color-enhancing sealers deepen and saturate the stone's natural tones, while clear, natural-finish sealers protect without changing the color much at all. We'll walk you through both options.",
      },
      {
        q: "Can sealing stop loose aggregate stones?",
        a: "Sealing helps bind and protect the surface and slows further loosening, but stones that are already loose or missing usually need a patch repair first. We'll flag that during your free inspection.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
