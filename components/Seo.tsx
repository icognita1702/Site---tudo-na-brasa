import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../site";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const ensureMetaTag = (
  selector: string,
  attribute: "name" | "property",
  value: string,
) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  schema,
}) => {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(location.pathname || "/", SITE_URL).toString();

    document.title = title;
    document.documentElement.lang = "pt-BR";

    ensureMetaTag(
      'meta[name="description"]',
      "name",
      "description",
    ).setAttribute("content", description);
    ensureMetaTag(
      'meta[name="theme-color"]',
      "name",
      "theme-color",
    ).setAttribute("content", "#0a0a0a");
    ensureMetaTag(
      'meta[property="og:type"]',
      "property",
      "og:type",
    ).setAttribute("content", "website");
    ensureMetaTag(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
    ).setAttribute("content", SITE_NAME);
    ensureMetaTag(
      'meta[property="og:title"]',
      "property",
      "og:title",
    ).setAttribute("content", title);
    ensureMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
    ).setAttribute("content", description);
    ensureMetaTag('meta[property="og:url"]', "property", "og:url").setAttribute(
      "content",
      canonicalUrl,
    );
    ensureMetaTag(
      'meta[property="og:image"]',
      "property",
      "og:image",
    ).setAttribute("content", image);
    ensureMetaTag(
      'meta[property="og:locale"]',
      "property",
      "og:locale",
    ).setAttribute("content", "pt_BR");
    ensureMetaTag(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
    ).setAttribute("content", "summary_large_image");
    ensureMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
    ).setAttribute("content", title);
    ensureMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
    ).setAttribute("content", description);
    ensureMetaTag(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
    ).setAttribute("content", image);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const existingSchema = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo-schema="true"]',
    );
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.textContent = JSON.stringify(
        Array.isArray(schema) ? schema : [schema],
      );
      document.head.appendChild(script);
    }
  }, [description, image, location.pathname, schema, title]);

  return null;
};

export default Seo;
