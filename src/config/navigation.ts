import type { LucideIcon } from "lucide-react";
import { Home, Briefcase, LineChart, Mail } from "lucide-react";

export const navigationLinks = [
  { icon: Home, text: "Home" },
  { icon: Briefcase, text: "Portfolio" },
  { icon: LineChart, text: "Recommendations" },
  { icon: Mail, text: "Contact" },
] satisfies Array<{ icon: LucideIcon; text: string }>;
