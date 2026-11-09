import {
  Banknote,
  Cog,
  Factory,
  Handshake,
  Layers,
  Store,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Parekh Chamber of Textile",
  shortName: "Parekh Chamber",
  location: "Bengaluru, Karnataka, India",
  since: 2007,
  phone: "6353778329",
  phoneHref: "tel:+916353778329",
  whatsapp: "916353778329",
  helpdeskHours: "10 AM – 6 PM",
  emails: [
    { label: "Trade Enquiry", address: "trade-enquiry@parekhchamber.com" },
    { label: "Customer Care", address: "customer-care@parekhchamber.com" },
    { label: "Services", address: "services@parekhchamber.com" },
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Service = {
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Manufacturing Support to the Textile Manufacturers",
    short: "Manufacturing support",
    description:
      "Practical guidance for mills and units — from production planning to sourcing and quality.",
    icon: Factory,
  },
  {
    title: "Trade Consultation for Textile Machineries and Spares",
    short: "Machinery & spares",
    description:
      "Advice on selecting, sourcing and trading textile machinery, parts and spares.",
    icon: Wrench,
  },
  {
    title: "Trade Support to the Textile Suppliers & Retailers",
    short: "Suppliers & retailers",
    description: "Connecting suppliers and retailers with the right trade partners and buyers.",
    icon: Store,
  },
  {
    title: "Trade Consultation for Textile Raw & Finished Products",
    short: "Raw & finished goods",
    description: "Consultation across the chain — fibre and yarn through to finished fabric.",
    icon: Layers,
  },
  {
    title: "Textile Finance and Investment Support to our valued Members",
    short: "Finance & investment",
    description: "Support for members exploring finance, funding and investment in textiles.",
    icon: Banknote,
  },
  {
    title: "Industrial Consultation for establishment of Textile Industries and Plants",
    short: "Plant establishment",
    description: "Guidance for setting up new textile industries, units and plants.",
    icon: Cog,
  },
  {
    title: "Textile Trade Support to our valued Members",
    short: "Member trade support",
    description: "Everyday trade assistance and enquiries handled by our member helpdesk.",
    icon: Handshake,
  },
];

export const memberTypes = [
  "Textile Trade Members",
  "Textile Manufacturers",
  "Textile Suppliers",
  "Textile Designers",
  "Dyeing Masters",
  "Textile Entrepreneurs",
];
