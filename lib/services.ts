export type Service = {
  slug: string
  title: string
  tagline: string
  body: string
  highlight: string
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
    body: "We find high-quality freight across DAT, Truckstop.com, and direct broker relationships — keeping your truck consistently loaded with profitable runs.",
    highlight: "Consistent load availability",
    meta: {
      title: "Load Sourcing & Booking — Traacker Dispatch",
      description:
        "Traacker sources high-paying freight from DAT, Truckstop.com, and direct broker relationships. Your truck stays loaded — every week.",
    },
    longDescription:
      "Finding quality freight is a full-time job. Between monitoring load boards, chasing brokers, and sifting through low-rate offers, drivers lose hours every week — and those hours aren't paid. Traacker's dispatchers work load boards 24/7 so you don't have to. We focus on loads that fit your lanes, equipment, and rate expectations.",
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
        description: "Every load is checked for rate, broker reliability, accessorials, and delivery window before we ever bring it to you.",
      },
      {
        title: "Backhaul Planning",
        description: "We don't just find the outbound — we plan return freight to minimize deadhead and maximize your weekly gross.",
      },
      {
        title: "Spot + Contract Mix",
        description: "We balance spot market opportunities with recurring contract lanes to stabilize your weekly income.",
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
    meta: {
      title: "Rate Negotiation — Traacker Dispatch",
      description:
        "Traacker negotiates every load rate directly with brokers. We push back on lowball offers and secure the best per-mile rate for your truck.",
    },
    longDescription:
      "The rate you accept on day one sets the standard brokers use for every load after. Most drivers — understandably — accept the first number to get moving. Traacker dispatchers negotiate from a position of knowledge: current market rates, lane averages, and load-to-truck ratios. We push back so you don't have to.",
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
    meta: {
      title: "Route Optimization — Traacker Dispatch",
      description:
        "Traacker plans routes that minimize deadhead miles, maximize loaded miles, and keep your HOS in check. Every mile should earn.",
    },
    longDescription:
      "An unloaded mile is a mile you paid for — fuel, wear, time — with nothing coming back. Most drivers accept high deadhead as unavoidable. It isn't. Smart lane chaining, backhaul planning, and fuel corridor awareness can dramatically cut your cost-per-mile. Traacker builds your route around your earnings, not just your destination.",
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
        title: "HOS-Aware Scheduling",
        description: "Every route is planned with Hours of Service in mind. No forced violations, no rushed deliveries that put you at risk.",
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
    meta: {
      title: "Paperwork & Back Office Support — Traacker Dispatch",
      description:
        "Traacker handles BOL, POD, invoicing, and broker documentation so you spend zero time on admin. Get paid faster, stay moving.",
    },
    longDescription:
      "The paperwork never stops. Bills of lading, proof of delivery, rate confirmations, TONU claims, detention requests, invoicing — it's a second job. Most owner-operators lose hours every week on admin that doesn't pay. Traacker handles the back-office so you can do what actually earns: drive.",
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
    meta: {
      title: "Dedicated Dispatcher — Traacker Dispatch",
      description:
        "One dispatcher, dedicated to your truck. They know your lanes, preferences, and goals — and they're available 24/7.",
    },
    longDescription:
      "A dispatcher who doesn't know you is just a phone rep reading from a screen. At Traacker, you get one dedicated dispatcher who learns your operation: your preferred lanes, your rate expectations, your home time requirements, your equipment quirks. Over time, they become an extension of your business — not just a service you subscribed to.",
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
        title: "Business Learning",
        description: "Your dispatcher tracks your preferences, learns your lanes, and gets better at finding the right freight for you over time.",
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
        title: "Weekly Check-Ins",
        description: "Regular performance reviews: what ran well, what to adjust, what lanes to target next. A real working relationship.",
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
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug)
}
