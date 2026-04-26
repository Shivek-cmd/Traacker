export type Service = {
  slug: string
  title: string
  tagline: string
  body: string
  highlight: string
  category: string
  image: string
  meta: {
    title: string
    description: string
  }
  longDescription: string
  features: { title: string; description: string }[]
  process: { step: string; title: string; body: string }[]
  outcomes: string[]
}

export const services: Service[] = [
  {
    slug: "load-sourcing",
    title: "Load Sourcing & Booking",
    tagline: "Your truck should never sit idle.",
    body: "We find top-paying freight across DAT, Truckstop.com, and our trusted broker network — keeping your truck consistently loaded with the most profitable runs available.",
    highlight: "Consistent load availability",
    category: "DISPATCH",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "Load Sourcing & Booking — Tracckar Dispatch",
      description:
        "Tracckar sources high-paying freight from DAT, Truckstop.com, and direct broker relationships. Your truck stays loaded — every week.",
    },
    longDescription:
      "Finding quality freight is a full-time job. Between monitoring load boards, chasing brokers, and sifting through low-rate offers, drivers lose hours every week — and those hours aren't paid. Tracckar's dispatchers work load boards 24/7 so you don't have to. We focus on loads that fit your lanes, equipment, and rate expectations.",
    features: [
      {
        title: "Multi-Board Coverage",
        description: "We monitor DAT, Truckstop.com, 123Loadboard, and direct broker networks simultaneously — not just one platform.",
      },
      {
        title: "Preferred Lane Matching",
        description: "We learn your lanes and home base. Over time we build relationships with brokers who run consistent freight in your corridors.",
      },
      {
        title: "Pre-Screened Loads Only",
        description: "Every load is checked for rate, broker credit score, payment track record, accessorials, and delivery window. We only book with brokers who have a verified history of paying on time.",
      },
      {
        title: "Trusted Broker Network",
        description: "Years of active dispatching have built us a curated network of high-paying brokers with strong credit ratings. You get priority access to freight that never hits the open load board.",
      },
      {
        title: "Backhaul Planning",
        description: "We don't just find the outbound — we plan return freight to minimize deadhead and maximize your weekly gross.",
      },
      {
        title: "Spot + Contract Mix",
        description: "We balance spot market opportunities with recurring contract lanes to stabilize your weekly income and protect against rate volatility.",
      },
      {
        title: "24/7 Availability",
        description: "Loads don't wait for business hours. Our team is available around the clock to catch urgent freight opportunities.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Share Your Preferences",
        body: "Tell us your home base, preferred lanes, equipment type, and target rate per mile. We build your load profile.",
      },
      {
        step: "02",
        title: "We Search Daily",
        body: "Your dispatcher monitors load boards and broker networks every day — actively hunting for freight that matches your profile.",
      },
      {
        step: "03",
        title: "We Present Options",
        body: "You get a shortlist of qualified loads with rate, lane, broker, and pickup/delivery details. You pick or we proceed on your standing instructions.",
      },
      {
        step: "04",
        title: "We Confirm the Load",
        body: "We handle all communication with the broker: confirmation, paperwork, and dispatch instructions. You just show up and drive.",
      },
    ],
    outcomes: [
      "Fewer empty days per week",
      "More consistent weekly gross revenue",
      "Less time on load boards yourself",
      "Better broker relationships over time",
      "Freight matched to your actual lanes and schedule",
    ],
  },
  {
    slug: "rate-negotiation",
    title: "Rate Negotiation",
    tagline: "We don't settle for average.",
    body: "We negotiate directly with brokers on every single load. Better rates per mile, better weekly earnings — no guessing, no accepting lowball offers.",
    highlight: "Max per-mile earnings",
    category: "RATES",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "Rate Negotiation — Tracckar Dispatch",
      description:
        "Tracckar negotiates every load rate directly with brokers. We push back on lowball offers and secure the best per-mile rate for your truck.",
    },
    longDescription:
      "The rate you accept on day one sets the standard brokers use for every load after. Most drivers — understandably — accept the first number to get moving. Tracckar dispatchers negotiate from a position of knowledge: current market rates, lane averages, and load-to-truck ratios. We push back so you don't have to.",
    features: [
      {
        title: "Real-Time Market Intelligence",
        description: "We use current DAT rate data and lane averages to benchmark every offer before countering. We know what the market will bear.",
      },
      {
        title: "Counter-Offer Strategy",
        description: "We don't just ask for more — we know when to push hard, when to trade rate for terms, and when to walk away.",
      },
      {
        title: "Accessorial Recovery",
        description: "Detention, layover, TONU — we track and recover every dollar you're owed beyond the base rate.",
      },
      {
        title: "Broker Relationship Building",
        description: "The same brokers book us again because we make their job easy. Repeat business means better rates on the back end.",
      },
      {
        title: "No Lowball Acceptance",
        description: "We have a hard floor on rates. We will not book your truck on a load that doesn't hit minimum thresholds for your lane.",
      },
      {
        title: "Weekly Rate Reporting",
        description: "We report your average rate per mile weekly so you can see the trend and hold us accountable.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Set Your Floor",
        body: "We agree on a minimum acceptable rate per mile for your equipment and lanes. Nothing below that gets booked without your approval.",
      },
      {
        step: "02",
        title: "We Benchmark the Load",
        body: "Before any counter-offer, we pull current lane rates from DAT and market data to know the real value of the load.",
      },
      {
        step: "03",
        title: "We Negotiate",
        body: "We counter, push back, and use market data to justify our position. Most brokers move when they know we know the numbers.",
      },
      {
        step: "04",
        title: "You Approve or We Move On",
        body: "If the broker won't meet your floor, we move to the next opportunity. Your time is not wasted on bad freight.",
      },
    ],
    outcomes: [
      "Higher average rate per mile",
      "Accessorial charges actually collected",
      "No more accepting the first offer",
      "Rate trends tracked and reported weekly",
      "Brokers who know you mean business",
    ],
  },
  {
    slug: "route-optimization",
    title: "Route Optimization",
    tagline: "More loaded miles. Less wasted fuel.",
    body: "We reduce deadhead miles, plan fuel-efficient corridors, and keep your schedule aligned with HOS regulations so you stay productive and compliant.",
    highlight: "Reduced empty miles",
    category: "ROUTING",
    image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "Route Optimization — Tracckar Dispatch",
      description:
        "Tracckar plans routes that minimize deadhead miles, maximize loaded miles, and keep your HOS in check. Every mile should earn.",
    },
    longDescription:
      "An unloaded mile is a mile you paid for — fuel, wear, time — with nothing coming back. Most drivers accept high deadhead as unavoidable. It isn't. Smart lane chaining, backhaul planning, and fuel corridor awareness can dramatically cut your cost-per-mile. Tracckar builds your route around your earnings, not just your destination.",
    features: [
      {
        title: "Deadhead Minimization",
        description: "We chain loads to reduce empty repositioning. The goal: loaded miles in both directions whenever possible.",
      },
      {
        title: "Fuel Corridor Planning",
        description: "We factor in major truck stop corridors and fuel price zones when building your route to cut your fuel spend per trip.",
      },
      {
        title: "HOS & ELD Compliance",
        description: "Every route is planned around your Hours of Service and ELD logs. No forced violations, no rushed deliveries that put your operating authority at risk.",
      },
      {
        title: "Weather & Traffic Routing",
        description: "We monitor conditions and flag potential delays before they impact your delivery window or force costly re-routes.",
      },
      {
        title: "Multi-Stop Coordination",
        description: "For LTL and multi-stop loads, we coordinate pickup/delivery sequencing to minimize driving time between locations.",
      },
      {
        title: "Lane Efficiency Scoring",
        description: "We track your lanes over time and identify which corridors consistently produce the best loaded/deadhead ratio.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Map Your Operating Region",
        body: "We establish your preferred region, home base radius, and lanes you want to avoid. This is the backbone of route planning.",
      },
      {
        step: "02",
        title: "Build the Load Chain",
        body: "Before booking any single load, we think about the next one. Where will this delivery position you for your next pickup?",
      },
      {
        step: "03",
        title: "Optimize the Route",
        body: "We select stops, fuel points, and rest breaks that maximize drive time within HOS and minimize fuel expenditure.",
      },
      {
        step: "04",
        title: "Monitor & Adjust",
        body: "Real-time updates if delays, weather, or shipper changes require route adjustment. You're never flying blind.",
      },
    ],
    outcomes: [
      "Lower deadhead percentage",
      "Reduced fuel cost per loaded mile",
      "Full HOS compliance on every run",
      "Better delivery reliability for brokers",
      "Higher net earnings per week",
    ],
  },
  {
    slug: "paperwork-support",
    title: "Paperwork & Back Office",
    tagline: "We handle the paperwork so you stay on the road.",
    body: "BOL and POD handling, documentation, invoicing support — the admin work that slows drivers down is handled for you, completely.",
    highlight: "Full admin coverage",
    category: "ADMIN",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "Paperwork & Back Office Support — Tracckar Dispatch",
      description:
        "Tracckar handles BOL, POD, invoicing, and broker documentation so you spend zero time on admin. Get paid faster, stay moving.",
    },
    longDescription:
      "The paperwork never stops. Bills of lading, proof of delivery, rate confirmations, TONU claims, detention requests, invoicing — it's a second job. Most owner-operators lose hours every week on admin that doesn't pay. Tracckar handles the back-office so you can do what actually earns: drive.",
    features: [
      {
        title: "BOL & POD Management",
        description: "We track, review, and submit Bills of Lading and Proof of Delivery documentation for every load. No missed submissions.",
      },
      {
        title: "Rate Confirmation Review",
        description: "Every rate con is reviewed before you sign. We check for missing accessorials, incorrect mileage, and unfavorable clauses.",
      },
      {
        title: "Detention & Layover Claims",
        description: "We file and follow up on every detention, layover, and TONU claim. Money you earned shouldn't be left on the table.",
      },
      {
        title: "Invoicing Support",
        description: "We help ensure invoices are submitted correctly and on time so your factoring company or direct payments aren't delayed.",
      },
      {
        title: "Broker Communication",
        description: "All back-and-forth with brokers — updates, delays, documentation requests — goes through us. You focus on driving.",
      },
      {
        title: "Document Organization",
        description: "All load documents are organized and accessible. IFTA season, audits, or broker disputes — you're covered.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Load Confirmation",
        body: "We review and confirm all load documents before dispatch. Nothing moves without the right paperwork in place.",
      },
      {
        step: "02",
        title: "In-Transit Tracking",
        body: "We monitor your load status and proactively communicate with brokers on any delays, so you don't have to stop and make calls.",
      },
      {
        step: "03",
        title: "Delivery & POD",
        body: "We coordinate POD submission immediately at delivery to start the payment clock and avoid broker disputes.",
      },
      {
        step: "04",
        title: "Claims & Follow-Up",
        body: "Any outstanding accessorial claims are filed and tracked until they're paid. We don't let it fall through the cracks.",
      },
    ],
    outcomes: [
      "Zero time spent on broker paperwork",
      "Faster payment cycles",
      "All detention and layover claims filed",
      "No missed documentation deadlines",
      "Clean load records for audits and IFTA",
    ],
  },
  {
    slug: "dedicated-dispatcher",
    title: "Dedicated Dispatcher",
    tagline: "A dispatcher who actually knows your business.",
    body: "One point of contact who learns your lanes, preferences, and goals. Real-time updates. 24/7 availability. No rotating agents who don't know you.",
    highlight: "24/7 real-time support",
    category: "SUPPORT",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "Dedicated Dispatcher — Tracckar Dispatch",
      description:
        "One dispatcher, dedicated to your truck. They know your lanes, preferences, and goals — and they're available 24/7.",
    },
    longDescription:
      "A dispatcher who doesn't know you is just a phone rep reading from a screen. At Tracckar, you get one dedicated dispatcher who learns your operation: your preferred lanes, your rate expectations, your home time requirements, your equipment quirks. Over time, they become an extension of your business — not just a service you subscribed to.",
    features: [
      {
        title: "Single Point of Contact",
        description: "One dispatcher. Always. No call centers, no rotating agents, no repeating yourself every time you call.",
      },
      {
        title: "24/7 Availability",
        description: "Loads don't follow a 9-to-5 schedule. Your dispatcher is available around the clock for urgent issues and last-minute freight.",
      },
      {
        title: "Strategic Load Planning",
        description: "Your dispatcher builds a strategic plan around your lanes, earnings goals, and market conditions — thinking weeks ahead, not just the next load.",
      },
      {
        title: "Real-Time Load Updates",
        description: "From pickup confirmation to delivery — you get real-time status updates without having to chase anyone.",
      },
      {
        title: "Proactive Problem Solving",
        description: "Your dispatcher flags issues before they become problems: shipper delays, weather, document gaps — handled proactively.",
      },
      {
        title: "Weekly Reviews & Insurance Support",
        description: "Regular performance reviews: rates, lanes, and adjustments. We also connect you with A+ rated commercial insurance carriers so your coverage stays strong and competitively priced.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Dispatcher Assignment",
        body: "You're matched with a dedicated dispatcher based on your lanes and equipment type. You get their direct contact from day one.",
      },
      {
        step: "02",
        title: "Business Onboarding",
        body: "Your dispatcher learns your operation in detail: preferences, rates, home time, must-avoid lanes, and business goals.",
      },
      {
        step: "03",
        title: "Active Dispatching",
        body: "Your dispatcher goes to work — sourcing, negotiating, booking, and communicating on your behalf every week.",
      },
      {
        step: "04",
        title: "Ongoing Optimization",
        body: "Weekly reviews ensure we're hitting your targets. If something isn't working, we adjust. Your success is how we measure ours.",
      },
    ],
    outcomes: [
      "A dispatcher who knows your business",
      "No more explaining yourself from scratch",
      "Faster response to urgent issues",
      "Consistent freight that matches your preferences",
      "A long-term working relationship that improves over time",
    ],
  },
  {
    slug: "broker-vetting",
    title: "Broker Credit & Vetting",
    tagline: "Never chase a payment again.",
    body: "We run credit checks on every broker before booking a single load. Our vetted broker network means your freight only moves with carriers who have a verified track record of paying on time.",
    highlight: "Zero non-payment risk",
    category: "VETTING",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "Broker Credit & Vetting — Tracckar Dispatch",
      description:
        "Tracckar checks broker credit scores, payment history, and MC authority before booking any load. Your truck only moves for brokers who pay.",
    },
    longDescription:
      "Non-payment is one of the biggest risks owner-operators face — and most dispatchers don't protect you from it. Tracckar runs credit and payment history checks on every broker before your truck ever moves. We cross-reference DAT credit scores, Carrier411 ratings, and our own internal history to ensure you're only dealing with brokers who pay on time, every time.",
    features: [
      {
        title: "DAT Credit Score Checks",
        description: "We verify every broker's DAT credit score before accepting any load. Brokers with poor credit ratings are rejected outright — no exceptions.",
      },
      {
        title: "Carrier411 Verification",
        description: "We cross-reference broker payment performance on Carrier411 to catch bad payers and flag brokers with dispute histories before they cost you.",
      },
      {
        title: "MC Authority Verification",
        description: "Every broker's MC authority and operating status is verified with FMCSA before booking to confirm they're licensed and in good standing.",
      },
      {
        title: "Trusted Broker Network",
        description: "Access to our curated network of brokers with A+ payment history and strong freight volume. These relationships mean better rates and reliable payment.",
      },
      {
        title: "Non-Payment Follow-Up",
        description: "If a broker disputes or delays payment, we handle all follow-up, documentation, and escalation on your behalf until the invoice is resolved.",
      },
      {
        title: "Internal Broker Blacklist",
        description: "We maintain an internal blacklist of brokers with non-payment or dispute histories. Your truck never moves for a broker on this list.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Load Identified",
        body: "We find a load that matches your lanes and rate target. Before presenting it to you, we pull the broker's credit and payment profile.",
      },
      {
        step: "02",
        title: "Credit & Authority Check",
        body: "We verify broker credit score on DAT, cross-check on Carrier411, and confirm their MC authority is active with FMCSA. Takes minutes, not days.",
      },
      {
        step: "03",
        title: "Load Presented to You",
        body: "Only loads from verified, creditworthy brokers reach you. You see the broker name, credit rating, and our internal trust score alongside the load details.",
      },
      {
        step: "04",
        title: "Payment Tracking",
        body: "After delivery, we track payment status and follow up with the broker if payment is delayed. You focus on the road — we chase the invoice.",
      },
    ],
    outcomes: [
      "No loads booked from brokers with poor payment history",
      "Faster payment cycles from vetted, reliable brokers",
      "Full broker credit visibility before every booking",
      "Non-payment disputes handled without your involvement",
      "Peace of mind that every load ends with a paycheck",
    ],
  },
  {
    slug: "eld-compliance",
    title: "ELD & Compliance Support",
    tagline: "Stay legal. Stay moving.",
    body: "We help you navigate FMCSA regulations, manage HOS compliance, and prepare for audits — so a compliance issue never puts your truck out of service or your authority at risk.",
    highlight: "Full FMCSA compliance",
    category: "COMPLIANCE",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=840&q=80&fit=crop",
    meta: {
      title: "ELD & Compliance Support — Tracckar Dispatch",
      description:
        "Tracckar helps owner-operators stay FMCSA compliant — HOS monitoring, ELD guidance, IFTA tracking, and audit preparation so your authority stays clean.",
    },
    longDescription:
      "FMCSA compliance is a moving target — HOS rules, ELD mandates, IFTA filings, MCS-150 updates, driver qualification files. Most owner-operators stay reactive, fixing problems after they've already triggered a violation or audit notice. Tracckar helps you stay ahead of every requirement so compliance never becomes a reason your truck is sidelined.",
    features: [
      {
        title: "HOS Monitoring",
        description: "We track your Hours of Service and flag potential violations before they happen. Routes are planned to keep you compliant without sacrificing loaded miles.",
      },
      {
        title: "ELD Setup & Guidance",
        description: "Guidance on selecting and correctly configuring an ELD device that meets FMCSA mandate requirements for your equipment type and operation.",
      },
      {
        title: "IFTA Mileage Tracking",
        description: "We help track state-by-state mileage for your IFTA quarterly fuel tax filings, reducing errors and minimizing your audit risk.",
      },
      {
        title: "FMCSA Status Reviews",
        description: "Periodic review of your operating authority, insurance filings, and MCS-150 biennial update to keep your DOT status active and your safety score clean.",
      },
      {
        title: "DOT Audit Preparation",
        description: "If you receive a DOT audit or roadside inspection notice, we help organize your logs, review your records, and prepare documentation before the review.",
      },
      {
        title: "Driver Qualification Files",
        description: "Guidance on maintaining proper DQ file documentation — medical certificates, MVR records, and annual reviews — to stay compliant with FMCSA requirements.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Compliance Review",
        body: "We review your current operating authority, ELD setup, insurance filings, and HOS habits to identify any gaps or risks before they become violations.",
      },
      {
        step: "02",
        title: "Setup & Configuration",
        body: "We guide you through any ELD configuration, record-keeping setup, or FMCSA filings needed to bring your operation fully into compliance.",
      },
      {
        step: "03",
        title: "Ongoing Monitoring",
        body: "Your dispatcher monitors HOS patterns across loads, flags upcoming IFTA filing deadlines, and keeps watch on your safety score and authority status.",
      },
      {
        step: "04",
        title: "Audit & Incident Support",
        body: "If a compliance issue arises — roadside inspection, DOT audit, or violation notice — we help you respond quickly with organized documentation and clear communication.",
      },
    ],
    outcomes: [
      "Zero HOS violations on dispatcher-planned routes",
      "ELD device correctly configured and FMCSA compliant",
      "IFTA filings accurate and submitted on time",
      "Clean DOT safety score and active operating authority",
      "Confidence that compliance is never your problem to manage alone",
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug)
}
