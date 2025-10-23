// src/pages/media.js
import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import blogBreadcrumb from "../assets/images/blog-img-2.png";

// ✅ import your thumbnail image file:
import pressThumb1 from "../assets/images/news-1.png";

// ---------- Inline data ----------
const newsroomItems = [
  {
    id: "trl-launch-rwa-2024-08-07",
    title:
      "TRL launches Malaysia’s first real-estate RWA platform; tokenizing US$23M in residential assets",
    dateISO: "2024-08-07",
    location: "Kuala Lumpur, Malaysia",
    source: "Press release",
    image: pressThumb1, // ← use the imported image here
    fullUrl:
      "https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties",
    highlights: [
      "Tokenizing ~US$23M residential properties; invest from as little as US$50.",
      "Asset-backed token ($TRLX) aims for ‘liquid-on-demand’ utility.",
      "Monthly yield returns and simplified access to local/global real estate.",
      "World’s first home-subscription service leveraging tokenized properties.",
      "Near-term rollout: 8 Dubai properties (incl. EMAAR), then Malaysia & Bali.",
    ],
    quote: {
      text:
        "As Malaysia’s pioneering real estate RWA platform, TRL bridges crypto-native investors and traditional real estate opportunities.",
      author: "Adrian Gaffor",
      role: "Co-founder & CEO, TRL",
    },
  },
];

// ---------- Inline UI components ----------
function NewsCard({ item }) {
  const date = new Date(item.dateISO);
  const dateLabel = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article
      className="group rounded-2xl border border-zinc-200/70 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      {item.image && (
        <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            itemProp="image"
          />
        </div>
      )}

      <div className="p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <time dateTime={item.dateISO} itemProp="datePublished">
            {dateLabel}
          </time>
          <span>•</span>
          <span className="truncate">{item.location}</span>
          {item.source && (
            <>
              <span>•</span>
              <span>{item.source}</span>
            </>
          )}
        </div>

        <h3
          className="mt-2 text-xl md:text-2xl font-semibold leading-snug text-zinc-900"
          itemProp="headline"
        >
          {item.title}
        </h3>

        <ul className="mt-3 space-y-2 text-zinc-700">
          {item.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {item.quote && (
          <blockquote className="mt-4 border-l-4 border-zinc-200 pl-4 text-zinc-700 italic">
            “{item.quote.text}”
            <footer className="mt-1 not-italic text-sm text-zinc-500">
              — {item.quote.author}
              {item.quote.role ? `, ${item.quote.role}` : ""}
            </footer>
          </blockquote>
        )}

        <div className="mt-5 flex items-center justify-between">
          <a
            href={item.fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            itemProp="mainEntityOfPage"
          >
            Read full press release
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>

          <span className="text-xs text-zinc-400">External link</span>
        </div>
      </div>
    </article>
  );
}

function NewsSection({ items, title = "Latest News", description }) {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8 py-8 md:py-12">
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">{title}</h2>
        {description && <p className="mt-2 text-zinc-600">{description}</p>}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {items.map((it) => (
          <NewsCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}

// ---------- Page ----------
export default function Media() {
  return (
    <div>
      <Topbar />
      <Header />

      <div className="w-full">
        <HeroSection
          breadCrumUrl={blogBreadcrumb}
          title="Newsroom"
          description="Find company news, announcements, and press resources."
        />
      </div>

      <NewsSection
        items={newsroomItems}
        description="Curated highlights. Open the full release for complete details."
      />

      <Footer />
    </div>
  );
}
