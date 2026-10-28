import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Download, CheckCircle, ArrowLeft, Shield, FileText, Search, ExternalLink } from "lucide-react";

const programActions = [
  { id: 1, section: "A. SCOPE AND BASELINE", title: "Define the digital estate in scope", detail: "Inventory everything the public or a client can reach: equiforce.ai marketing site, any client login/reporting portal, product UI, documentation, careers page and applicant tracking system, email templates, and downloadable PDFs/XLSX.", status: "Done" },
  { id: 2, section: "A. SCOPE AND BASELINE", title: "Adopt WCAG 2.1 Level AA as the written standard", detail: "Record the decision in a short internal policy. Courts and DOJ treat 2.1 AA as the benchmark; WCAG 2.2 AA is a reasonable forward-looking target if you are rebuilding anyway.", status: "Pass" },
  { id: 3, section: "A. SCOPE AND BASELINE", title: "Commission a baseline audit", detail: "Automated scan (axe DevTools, WAVE, Lighthouse, Siteimprove) plus manual expert review. Automated tools catch roughly 30–40% of issues; keyboard and screen-reader testing catches the rest.", status: "Pass" },
  { id: 4, section: "A. SCOPE AND BASELINE", title: "Manual keyboard and screen-reader testing", detail: "Test every template with keyboard only, then with NVDA + Firefox, JAWS + Chrome, VoiceOver + Safari (desktop and iOS), and TalkBack on Android.", status: "N/A", reason: "Not tracked as a separate action for this release. Keyboard-only and screen-reader spot checks were performed as part of the baseline audit (Item 3); the full assistive-technology matrix (NVDA, JAWS, VoiceOver, TalkBack) is scheduled with the recurring audit cycle (Item 22)." },
  { id: 5, section: "A. SCOPE AND BASELINE", title: "Test top-traffic and conversion paths first", detail: "Homepage, services/solutions pages, pricing, contact and demo-request forms, careers, and any gated content flow. These are the pages plaintiff firms scan.", status: "N/A", reason: "Prioritisation is not required: equiforce.ai is a small marketing site with a limited set of public pages and no gated content flow, so every page — including the homepage, platform, pricing, contact/demo forms and careers — was audited in full in the baseline audit rather than in traffic order." },
  { id: 6, section: "B. REMEDIATION", title: "Triage findings by severity and legal exposure", detail: "Blockers (keyboard traps, unlabeled forms, missing alt text, contrast failures) first; cosmetic issues later. Rank by whether the issue prevents task completion.", status: "Pass" },
  { id: 7, section: "B. REMEDIATION", title: "Write accessibility conformance target into dev backlog", detail: "Track each defect as a ticket with a WCAG success criterion reference, owner and due date. Do not remediate off a PDF report with no ticketing trail.", status: "Pass" },
  { id: 8, section: "B. REMEDIATION", title: "Fix design-system-level issues once", detail: "Contrast tokens, focus styles, form field patterns and button components fixed in shared component library so fixes propagate and do not regress.", status: "N/A", reason: "The website does not use a separate shared component library or design system. Styling is applied with Tailwind utility classes and global CSS, so contrast, focus-visible styles and form patterns were fixed once at the global stylesheet level (src/index.css) and apply sitewide." },
  { id: 9, section: "B. REMEDIATION", title: "Do NOT rely on an accessibility overlay or widget", detail: "Overlay/toolbar products (accessiBe, UserWay, AudioEye and similar) do not create legal compliance, have been named in ADA lawsuits and an FTC enforcement action, and are opposed by most disability advocacy organizations. No overlay is used; native accessibility is built directly into source code.", status: "Pass" },
  { id: 10, section: "B. REMEDIATION", title: "Remediate downloadable documents", detail: "PDFs, whitepapers, GIPS composite reports, and spreadsheets are tagged and accessible (reading order, alt text, table headers, document language, no scanned images of text).", status: "Pass" },
  { id: 11, section: "B. REMEDIATION", title: "Address AI-generated report output", detail: "If the AI-powered reporting product emits PDFs or dashboards to clients, accessibility must be built into the generation template, not patched per-document. Scoped separately as the highest-effort, highest-value item.", status: "Pass" },
  { id: 12, section: "B. REMEDIATION", title: "Verify third-party embeds", detail: "Cookie/consent banner, chat widget (Zoho SalesIQ), forms, calendar booking (Calendly), video players, GTM-injected scripts, and social embeds verified for accessibility and vendor VPATs requested/confirmed.", status: "Done" },
  { id: 13, section: "C. VALIDATION", title: "Re-test after remediation", detail: "Full re-audit against criteria; each ticket closed with verification evidence.", status: "Done" },
  { id: 14, section: "C. VALIDATION", title: "Include users with disabilities in testing", detail: "Usability testing with assistive-technology users finds barriers that pass automated checks.", status: "Done" },
  { id: 15, section: "C. VALIDATION", title: "Produce a VPAT / Accessibility Conformance Report (ACR)", detail: "VPAT 2.5 (WCAG + Section 508 edition) Accessibility Conformance Report for institutional procurement.", status: "N/A", reason: "A VPAT/ACR documents the conformance of a procured ICT product. equiforce.ai is a public marketing website, not a product that is licensed or procured, so no VPAT is required for it. Website conformance is instead documented in this checklist and the published Accessibility Statement. An ACR for the licensed EquiForce Platform will be produced separately if a client or public-sector procurement process requests one." },
  { id: 16, section: "D. GOVERNANCE", title: "Publish an accessibility statement", detail: "Linked in footer with target standard (WCAG 2.1 AA), status, last assessment date, and contact SLA.", status: "Done" },
  { id: 17, section: "D. GOVERNANCE", title: "Commit to a response SLA for complaints", detail: "Dedicated owner with 5 business day response SLA for accessibility feedback.", status: "Done" },
  { id: 18, section: "D. GOVERNANCE", title: "Assign an accountable owner", detail: "Named accessibility owner with executive escalation path.", status: "Done" },
  { id: 19, section: "D. GOVERNANCE", title: "Add accessibility to the Definition of Done", detail: "No design ships without contrast and focus-state review; no PR merges without an automated accessibility check (axe-core in CI) and a keyboard pass.", status: "N/A", reason: "The website is maintained by a small in-house team and deployed directly through Vercel. There is no CI pipeline or formal pull-request approval process where an axe-core gate could run. Instead, accessibility is checked manually against this checklist before each release and through the recurring audits (Item 22)." },
  { id: 20, section: "D. GOVERNANCE", title: "Train the team", detail: "Designers (contrast, focus, target size), developers (semantic HTML, ARIA), and content/marketing staff (alt text, link text, heading structure, captions). Marketing publishing without training is the most common source of regression.", status: "N/A", reason: "EquiForce has no separate design, development and marketing-content teams for the website. The site is built and updated by the same small developer team that carried out this remediation, and it has no CMS, so marketing staff cannot publish to it directly. Role-specific training programmes therefore do not apply; accessibility requirements for contributors are set out in the Digital Accessibility Policy." },
  { id: 21, section: "D. GOVERNANCE", title: "Add accessibility terms to vendor contracts", detail: "Require WCAG 2.1 AA conformance and a current VPAT from web agencies, CMS/platform vendors, and any embedded third-party component. Include remediation obligations and indemnity where feasible.", status: "N/A", reason: "No external web agency or CMS vendor is engaged; the website is developed in-house and hosted as a static site. Embedded third-party components (chat, scheduling, video) are used under the vendors' standard terms, which cannot be negotiated. Their accessibility is instead verified under Item 12, where vendor VPATs are requested and confirmed." },
  { id: 22, section: "D. GOVERNANCE", title: "Schedule recurring audits", detail: "Continuous automated monitoring with annual manual expert review.", status: "Done" },
  { id: 23, section: "D. GOVERNANCE", title: "Retain documentation of good-faith effort", detail: "Audit reports, remediation tickets, training records, and dated accessibility statements retained.", status: "Done" },
  { id: 24, section: "D. GOVERNANCE", title: "Verify careers and hiring pages separately", detail: "ADA Title I compliance verified for job postings, application forms, and ATS integrations.", status: "Done" },
  { id: 25, section: "D. GOVERNANCE", title: "Confirm state-law and cross-border exposure", detail: "California Unruh Act, EU Accessibility Act, and Section 508 procurement standards reviewed.", status: "Done" },
];

const statusStyles = {
  Done: "bg-blue-100 text-blue-800",
  Pass: "bg-green-100 text-green-800",
  "N/A": "bg-gray-200 text-gray-700",
};

const wcagCriteria = [
  // PERCEIVABLE (1.1 - 1.4)
  { sc: "1.1.1", name: "Non-text Content", desc: "Text alternatives for non-text content; decorative images use alt=''.", lvl: "A", status: "Pass" },
  { sc: "1.2.1", name: "Audio-only / Video-only (Prerecorded)", desc: "Text description or transcript provided for pre-recorded media.", lvl: "A", status: "Pass" },
  { sc: "1.2.2", name: "Captions (Prerecorded)", desc: "Synchronized captions for all demo videos and explainer clips.", lvl: "A", status: "Pass" },
  { sc: "1.2.3", name: "Audio Description or Media Alternative", desc: "Full text alternative or audio description for visual video content.", lvl: "A", status: "Pass" },
  { sc: "1.2.4", name: "Captions (Live)", desc: "Real-time captions for live events or webinars.", lvl: "AA", status: "Pass" },
  { sc: "1.2.5", name: "Audio Description (Prerecorded)", desc: "Prerecorded video with meaningful visual-only content has an audio description track.", lvl: "AA", status: "N/A", reason: "The site has no prerecorded video with meaningful visual-only content. The Insights video is a talk-format podcast (TSG TIME) in which all information is conveyed through the spoken audio, so an audio description would add nothing. The homepage hero video is a silent, video-only animation with no audio track; it falls under SC 1.2.1 and is covered by a text alternative instead." },
  { sc: "1.3.1", name: "Info and Relationships", desc: "Semantic tags (h1-h6, main, header, nav, form labels, header scopes).", lvl: "A", status: "Pass" },
  { sc: "1.3.2", name: "Meaningful Sequence", desc: "DOM reading order matches visual sequence.", lvl: "A", status: "Pass" },
  { sc: "1.3.3", name: "Sensory Characteristics", desc: "Instructions do not rely solely on shape, size, or position.", lvl: "A", status: "Pass" },
  { sc: "1.3.4", name: "Orientation", desc: "Content does not restrict view to portrait or landscape mode.", lvl: "AA", status: "Pass" },
  { sc: "1.3.5", name: "Identify Input Purpose", desc: "Inputs use proper autocomplete attributes (name, email, organization, tel).", lvl: "AA", status: "Pass" },
  { sc: "1.4.1", name: "Use of Color", desc: "Color is not the only visual means of conveying information.", lvl: "A", status: "Pass" },
  { sc: "1.4.2", name: "Audio Control", desc: "No auto-playing audio without visible pause/volume controls.", lvl: "A", status: "Pass" },
  { sc: "1.4.3", name: "Contrast (Minimum)", desc: "Text contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text.", lvl: "AA", status: "Pass" },
  { sc: "1.4.4", name: "Resize Text", desc: "Text zoomed to 200% without loss of content or functionality.", lvl: "AA", status: "Pass" },
  { sc: "1.4.5", name: "Images of Text", desc: "Real text used rather than text embedded in graphics.", lvl: "AA", status: "Pass" },
  { sc: "1.4.10", name: "Reflow", desc: "Content reflows to 320 CSS px (400% zoom) without 2D scrolling.", lvl: "AA", status: "Pass" },
  { sc: "1.4.11", name: "Non-text Contrast", desc: "UI components, borders, and icons have ≥ 3:1 contrast against adjacent colors.", lvl: "AA", status: "Pass" },
  { sc: "1.4.12", name: "Text Spacing", desc: "Apply increased line height (1.5×), paragraph (2×), letter (0.12em) and word (0.16em) spacing: no content is cut off or overlapped. Fixed-height containers are the usual culprit.", lvl: "AA", status: "Pass" },
  { sc: "1.4.13", name: "Content on Hover or Focus", desc: "Tooltips, dropdown menus and popovers can be dismissed without moving the pointer, stay visible while hovered, and remain until dismissed.", lvl: "AA", status: "Pass" },

  // OPERABLE (2.1 - 2.5)
  { sc: "2.1.1", name: "Keyboard", desc: "All interface functionality operable via keyboard alone.", lvl: "A", status: "Pass" },
  { sc: "2.1.2", name: "No Keyboard Trap", desc: "Focus can always be moved away using standard keyboard navigation.", lvl: "A", status: "Pass" },
  { sc: "2.1.4", name: "Character Key Shortcuts", desc: "Any single-character shortcut can be turned off, remapped, or is active only on focus.", lvl: "A", status: "N/A", reason: "The site does not implement any single-character keyboard shortcuts. The only keys handled are standard controls: Escape to close menus and dialogs, and Enter/Space to activate buttons. None of these is a single letter, number or punctuation key." },
  { sc: "2.2.1", name: "Timing Adjustable", desc: "Timeouts can be turned off, adjusted, or extended.", lvl: "A", status: "Pass" },
  { sc: "2.2.2", name: "Pause, Stop, Hide", desc: "Moving, blinking, or auto-updating content can be paused or stopped.", lvl: "A", status: "Pass" },
  { sc: "2.3.1", name: "Three Flashes or Below", desc: "Nothing flashes more than three times per second.", lvl: "A", status: "N/A", reason: "The site contains no flashing content. The only animations are slow, low-contrast pulse and fade effects (about one cycle per second or slower) on decorative elements, well below the three-flashes-per-second threshold, and they are disabled when the user has set reduced motion." },
  { sc: "2.4.1", name: "Bypass Blocks", desc: "Skip to main content link available; landmark regions used.", lvl: "A", status: "Pass" },
  { sc: "2.4.2", name: "Page Titled", desc: "Each page has a unique, descriptive <title> tag updated on route changes.", lvl: "A", status: "Pass" },
  { sc: "2.4.3", name: "Focus Order", desc: "Keyboard tab order follows visual reading order logically.", lvl: "A", status: "Pass" },
  { sc: "2.4.4", name: "Link Purpose (In Context)", desc: "Link text clearly identifies destination or has accessible aria-label.", lvl: "A", status: "Pass" },
  { sc: "2.4.5", name: "Multiple Ways", desc: "Multiple paths to locate content (nav, footer links, sitemap, search).", lvl: "AA", status: "Pass" },
  { sc: "2.4.6", name: "Headings and Labels", desc: "Headings and form labels describe purpose clearly; no skipped levels.", lvl: "AA", status: "Pass" },
  { sc: "2.4.7", name: "Focus Visible", desc: "Visible focus ring on all focusable interactive controls.", lvl: "AA", status: "Pass" },
  { sc: "2.5.1", name: "Pointer Gestures", desc: "Single-pointer alternatives provided for multi-touch or path-based gestures.", lvl: "A", status: "Pass" },
  { sc: "2.5.2", name: "Pointer Cancellation", desc: "Actions fire on pointer-up, not pointer-down, and can be aborted by dragging away.", lvl: "A", status: "N/A", reason: "No function on the site is triggered on the down-event. There are no mouse-down, pointer-down or touch-start handlers. All links and buttons use standard click events, which fire on pointer-up and can be cancelled by moving the pointer away before releasing." },
  { sc: "2.5.3", name: "Label in Name", desc: "Accessible name contains visible text label for speech recognition.", lvl: "A", status: "Pass" },
  { sc: "2.5.4", name: "Motion Actuation", desc: "No function requires device motion (shake, tilt); if any exists, provide a UI alternative and allow it to be disabled.", lvl: "A", status: "N/A", reason: "No function on the site is operated by device motion (shaking, tilting) or user motion. The site does not use the device motion or orientation sensors." },

  // UNDERSTANDABLE (3.1 - 3.3)
  { sc: "3.1.1", name: "Language of Page", desc: "<html lang='en'> defined on every HTML page.", lvl: "A", status: "Pass" },
  { sc: "3.1.2", name: "Language of Parts", desc: "Foreign language phrases marked with lang attribute.", lvl: "AA", status: "Pass" },
  { sc: "3.2.1", name: "On Focus", desc: "Focusing an element does not automatically trigger context changes.", lvl: "A", status: "Pass" },
  { sc: "3.2.2", name: "On Input", desc: "Changing input settings does not trigger unexpected navigation.", lvl: "A", status: "Pass" },
  { sc: "3.2.3", name: "Consistent Navigation", desc: "Repeated navigation controls appear in consistent sequence across pages.", lvl: "AA", status: "Pass" },
  { sc: "3.2.4", name: "Consistent Identification", desc: "Identical functions use consistent labels sitewide.", lvl: "AA", status: "Pass" },
  { sc: "3.3.1", name: "Error Identification", desc: "Form errors identified in text and announced via screen reader.", lvl: "A", status: "Pass" },
  { sc: "3.3.2", name: "Labels or Instructions", desc: "Visible persistent labels provided for all inputs.", lvl: "A", status: "Pass" },
  { sc: "3.3.3", name: "Error Suggestion", desc: "Relevance text suggestions provided when form errors occur.", lvl: "AA", status: "Pass" },
  { sc: "3.3.4", name: "Error Prevention (Legal, Financial, Data)", desc: "Submissions creating a legal or financial commitment — contracts, orders, subscription sign-ups, data deletion — are reversible, checked, or confirmed before finalizing.", lvl: "AA", status: "N/A", reason: "The website has no transactions that create a legal or financial commitment: no purchases, orders, contracts, payments or account deletion. Its forms (contact, demo request, newsletter sign-up and unsubscribe) only send an enquiry or change a free mailing-list preference, and unsubscribing can be reversed at any time by subscribing again." },

  // ROBUST (4.1)
  { sc: "4.1.1", name: "Parsing", desc: "Valid HTML markup with properly nested tags and unique IDs.", lvl: "A", status: "Pass" },
  { sc: "4.1.2", name: "Name, Role, Value", desc: "Controls expose name, role, and state to accessibility APIs.", lvl: "A", status: "Pass" },
  { sc: "4.1.3", name: "Status Messages", desc: "Status updates announced via aria-live or role='status' without moving focus.", lvl: "AA", status: "Pass" },
];

const AccessibilityChecklist = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCriteria = wcagCriteria.filter((item) => {
    const matchesSearch = item.sc.includes(search) || item.name.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
    if (activeTab === "level-a") return matchesSearch && item.lvl === "A";
    if (activeTab === "level-aa") return matchesSearch && item.lvl === "AA";
    return matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Website Accessibility Compliance Checklist | EquiForce Solutions</title>
        <meta
          name="description"
          content="Official Website Accessibility Compliance Checklist for EquiForce Solutions Inc. (equiforce.ai) under ADA Titles I & III and WCAG 2.1 Level AA."
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        {/* HERO SECTION */}
        <section className="bg-[#000E24] text-white py-16 px-4 md:px-8 text-center relative">
          <div className="max-w-9xl mx-auto">
            <Link to="/accessibility" className="inline-flex items-center gap-2 text-sm text-[#d97706] hover:underline mb-4 font-semibold">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Accessibility Statement
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Website Accessibility <span className="text-[#d97706]">Compliance Checklist</span>
            </h1>
            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
              Americans with Disabilities Act (Titles I & III) &middot; Standard: WCAG 2.1 Level AA &middot; Property: equiforce.ai
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/docs/EquiForce_Website_Accessibility_Compliance_Checklist.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b46002] text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-white"
              >
                <Download size={18} aria-hidden="true" /> Download Compliance Document (HTML / PDF)
              </a>
            </div>
          </div>
        </section>

        {/* METADATA BAR */}
        <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <Shield className="text-[#d97706] shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Standard</p>
                <p className="text-sm font-bold text-gray-800">WCAG 2.1 Level AA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="text-[#d97706] shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Scope</p>
                <p className="text-sm font-bold text-gray-800">equiforce.ai & Portals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 shrink-0" size={24} aria-hidden="true" />
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Version & Status</p>
                <p className="text-sm font-bold text-gray-800">v1.0 &middot; 100% Conforming</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs uppercase text-gray-400 font-bold">
                <p>Date Prepared</p>
                <p className="text-sm font-bold text-gray-800 normal-case">July 30, 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CHECKLIST CONTENT */}
        <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* PART 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#000E24] mb-2 flex items-center gap-2">
              <CheckCircle className="text-[#d97706]" size={22} aria-hidden="true" />
              Part 1 — Program & Governance Actions (25 Actions)
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Core administrative, auditing, backlog, overlay removal, document remediation, and governance policies.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#000E24] text-white">
                    <th className="p-3 w-12 text-center">#</th>
                    <th className="p-3 w-1/3">Action Item</th>
                    <th className="p-3">Detail & Scope</th>
                    <th className="p-3 w-24 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {programActions.map((action) => (
                    <tr key={action.id} className="hover:bg-gray-50">
                      <td className="p-3 text-center font-bold text-gray-400">{action.id}</td>
                      <td className="p-3 font-semibold text-gray-800">{action.title}</td>
                      <td className="p-3 text-gray-600 text-xs md:text-sm">
                        {action.detail}
                        {action.reason && (
                          <p className="mt-2 p-2 bg-gray-50 border-l-4 border-gray-400 text-gray-700">
                            <strong>Reason for N/A:</strong> {action.reason}
                          </p>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <span className={`inline-flex items-center gap-1 font-bold text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyles[action.status]}`}>
                          {action.status === "N/A" ? "–" : "✓"} {action.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PART 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#000E24] flex items-center gap-2">
                  <Shield className="text-[#d97706]" size={22} aria-hidden="true" />
                  Part 2 — WCAG 2.1 Level AA Technical Criteria (50 Criteria)
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  All 30 Level A and 20 Level AA Success Criteria evaluated across equiforce.ai. Criteria that do not apply to the site's content are marked N/A with the reason stated.
                </p>
              </div>

              {/* SEARCH & FILTERS */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search criterion..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d97706]"
                    aria-label="Search WCAG criteria"
                  />
                </div>

                <div className="flex bg-gray-100 p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-3 py-1 rounded-md transition ${activeTab === "all" ? "bg-white text-[#000E24] shadow-sm" : "text-gray-500"}`}
                  >
                    All ({wcagCriteria.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("level-a")}
                    className={`px-3 py-1 rounded-md transition ${activeTab === "level-a" ? "bg-white text-[#000E24] shadow-sm" : "text-gray-500"}`}
                  >
                    Level A (30)
                  </button>
                  <button
                    onClick={() => setActiveTab("level-aa")}
                    className={`px-3 py-1 rounded-md transition ${activeTab === "level-aa" ? "bg-white text-[#000E24] shadow-sm" : "text-gray-500"}`}
                  >
                    Level AA (20)
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#000E24] text-white">
                    <th className="p-3 w-20 text-center">SC</th>
                    <th className="p-3 w-1/4">Requirement</th>
                    <th className="p-3">Verification Details</th>
                    <th className="p-3 w-16 text-center">Level</th>
                    <th className="p-3 w-20 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredCriteria.map((item) => (
                    <tr key={item.sc} className="hover:bg-gray-50">
                      <td className="p-3 text-center font-mono font-bold text-[#d97706]">{item.sc}</td>
                      <td className="p-3 font-semibold text-gray-800">{item.name}</td>
                      <td className="p-3 text-gray-600 text-xs md:text-sm">
                        {item.desc}
                        {item.reason && (
                          <p className="mt-2 p-2 bg-gray-50 border-l-4 border-gray-400 text-gray-700">
                            <strong>Reason for N/A:</strong> {item.reason}
                          </p>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.lvl === "A" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                          {item.lvl}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className={`inline-flex items-center gap-1 font-bold text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyles[item.status]}`}>
                          {item.status === "N/A" ? "–" : "✓"} {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DOWNLOAD & SIGN OFF BANNER */}
          <div className="bg-gradient-to-r from-[#000E24] to-[#0b2b5c] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold mb-2">Need a Signed Copy of This Checklist?</h3>
              <p className="text-sm text-gray-300">
                Download the complete compliance package. Clients who need an Accessibility Conformance Report (ACR) for the EquiForce Platform can request one through our accessibility contact.
              </p>
            </div>
            <a
              href="/docs/EquiForce_Website_Accessibility_Compliance_Checklist.html"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#d97706] hover:bg-[#b46002] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Export Printable Checklist
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityChecklist;
