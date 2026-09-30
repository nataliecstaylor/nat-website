import { Hanken_Grotesk, Newsreader } from "next/font/google";
import PillNav from "./_pill-nav";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

export default function DesignBoldLayout({ children }: LayoutProps<"/concepts/design-bold">) {
  return (
    <div
      className={`${display.variable} ${serif.variable} relative min-h-screen bg-[#F2F0EA]`}
      style={{ fontFamily: "var(--font-serif)" }}
    >
      {children}
      <div className="h-24" />
      <PillNav />
    </div>
  );
}
