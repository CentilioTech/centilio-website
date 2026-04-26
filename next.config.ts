import type { NextConfig } from "next";

// ----------------------------------------------------------------------------
// Security headers
// ----------------------------------------------------------------------------
// Applied to every response. These are the "low-risk, high-value" headers
// recommended by OWASP and securityheaders.com — none of them break Next.js
// behaviour or the embedded GTM script.
//
// CSP is intentionally NOT set here yet. CSP needs to be rolled out in
// report-only mode first, observed for breakage, then enforced. See the
// Phase 2 followups in centilio-audit/ANALYSIS_AND_PLAN.md.
//
// HSTS includes `preload` but the domain is not yet on the HSTS preload list
// — submitting at https://hstspreload.org is a separate manual step.
//
// IMPORTANT: headers() and redirects() are IGNORED when output: 'export' is
// set, because static export produces plain HTML files with no request
// handling. To actually serve these headers and redirects, the deployment
// has to happen on a Node runtime (DigitalOcean App Platform supports both
// modes — confirm with the team which mode the deployment uses). Headers
// can also be configured at the CDN/edge layer (Cloudflare Page Rules /
// Transform Rules) as an alternative — see ANALYSIS_AND_PLAN.md.
// ----------------------------------------------------------------------------
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    // Disable browser features the marketing site doesn't use. Add to this
    // list only if a feature is genuinely needed by a page.
    value: "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  // ====== PRESERVED FROM PREVIOUS CONFIG ======
  // Static-export build (DigitalOcean App Platform deploys the exported
  // out/ directory). With output: 'export', headers() and redirects() are
  // ignored at runtime — they're listed here for when (or if) the site
  // moves off static export, AND can be applied at the CDN edge in the
  // meantime. See header comment above.
  output: 'export',

  // Trailing-slash kept TRUE to match the existing build (changing this
  // would invalidate every existing internal link in components/* and any
  // SEO equity already accrued to /blog/, /about/, etc. URLs). Trailing-
  // slash drift in the rendered HTML is a separate concern and gets
  // resolved by making links consistent in the source rather than via
  // trailingSlash flip.
  trailingSlash: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    unoptimized: true, // required when output: 'export'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.centilio.com',
        pathname: '/blog/attachment**',
      },
      {
        protocol: 'https',
        hostname: 'seobot.centilio.com',
        pathname: '/**',
      },
    ],
  },

  // ====== ADDED IN PHASE 2 ======
  // headers() and redirects() are no-ops with output: 'export' (see above).
  // Kept in source so they activate automatically if the site moves to a
  // Node runtime, and so they document the intended security posture for
  // the team to mirror at the CDN edge.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // /home is an accidental duplicate of / — both render the same Home
      // component. Permanent redirect so search engines consolidate signal
      // on /.
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // Note: /contact vs /contactpage canonicalization is intentionally
      // NOT redirected here — that's a Phase 2 followup pending the
      // user's decision on which URL becomes canonical and how to wire
      // the form backend.
    ];
  },
};

export default nextConfig;
