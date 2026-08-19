import { FAQ, LINKS, SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        givenName: "Jesse",
        familyName: "Steckley",
        additionalName: SITE.indigenousName,
        alternateName: ["Aubdauban", "Jesse Steckley Aubdauban"],
        jobTitle: SITE.shortTitle,
        description: SITE.description,
        url: SITE.url,
        email: SITE.email,
        image: SITE.portrait,
        nationality: "Canadian",
        knowsLanguage: ["en-CA"],
        homeLocation: {
          "@type": "Place",
          name: "Winnipeg, Treaty 1 Territory",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Winnipeg",
            addressRegion: "MB",
            addressCountry: "CA",
          },
        },
        affiliation: {
          "@type": "Organization",
          name: "Wasauksing First Nation",
        },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Georgian College" },
          { "@type": "CollegeOrUniversity", name: "Trent University" },
        ],
        award: "CBC Manitoba Future 40 (2025)",
        sameAs: [SITE.twitter, SITE.linkedin, SITE.github, LINKS.cbc],
        worksFor: { "@id": `${SITE.url}/#org` },
        founder: { "@id": `${SITE.url}/#org` },
        hasOccupation: {
          "@type": "Occupation",
          name: SITE.shortTitle,
          occupationLocation: {
            "@type": "AdministrativeArea",
            name: "Canada",
          },
        },
        knowsAbout: [
          "Economic reconciliation",
          "Indigenous economic development",
          "Indigenous communities and allies",
          "Workforce development",
          "Indigenous procurement",
          "Indigenomics",
          "Community economic strategy",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#org`,
        name: "Waaseyak",
        alternateName: "Waaseyak Corp",
        founder: { "@id": `${SITE.url}/#person` },
        url: SITE.url,
        email: SITE.email,
        image: SITE.image,
        areaServed: [
          { "@type": "Country", name: "Canada" },
          { "@type": "AdministrativeArea", name: "Manitoba" },
        ],
        serviceType: [
          "Economic reconciliation strategy",
          "Indigenous community economic development",
          "Ally and institutional partnership strategy",
        ],
        description:
          "Economic reconciliation strategy for Indigenous communities, First Nations, Métis, and Inuit — and Canada with them.",
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Economic reconciliation strategy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Community and ally partnership support",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Practical systems, tools, and implementation",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-CA",
        publisher: { "@id": `${SITE.url}/#person` },
        dateModified: SITE.lastUpdated,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: SITE.url,
        name: SITE.title,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#person` },
        inLanguage: "en-CA",
        dateModified: SITE.lastUpdated,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE.portrait,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "#about"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE.url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
