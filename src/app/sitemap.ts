import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { business } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/service-areas", "/contact"].map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${business.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const areaRoutes = areas.map((area) => ({
    url: `${business.siteUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
