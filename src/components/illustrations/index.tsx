import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const ink = "currentColor";
const gold = "var(--gold)";
const goldSoft = "var(--gold-soft)";
const cream = "var(--cream)";
const primary = "var(--primary)";
const leaf = "var(--leaf)";
const marigold = "var(--marigold)";

/* ---------- Hero ---------- */
export function HeroIllustration(props: P) {
  return (
    <svg viewBox="0 0 400 320" fill="none" {...props}>
      <ellipse cx="200" cy="280" rx="170" ry="14" fill={ink} opacity="0.06" />
      {/* banana leaf */}
      <path
        d="M60 230 C90 150, 200 110, 350 130 C320 200, 230 250, 90 260 Z"
        fill={leaf}
        opacity="0.18"
      />
      <path
        d="M60 230 C90 150, 200 110, 350 130 C320 200, 230 250, 90 260 Z"
        stroke={leaf}
        strokeWidth="2"
        fill="none"
      />
      <path d="M80 245 C160 200, 260 165, 340 145" stroke={leaf} strokeWidth="1.5" opacity="0.5" />
      {/* brass lamp */}
      <path
        d="M180 200 Q200 180 220 200 L215 220 L185 220 Z"
        fill={gold}
      />
      <rect x="194" y="220" width="12" height="6" fill={gold} />
      <ellipse cx="200" cy="232" rx="22" ry="5" fill={gold} opacity="0.6" />
      <path
        d="M200 180 Q198 168 200 158 Q202 168 200 180"
        fill={marigold}
      />
      <circle cx="200" cy="160" r="3" fill={marigold} />
      {/* jasmine */}
      <g opacity="0.85">
        <circle cx="110" cy="200" r="6" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="125" cy="208" r="5" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="140" cy="200" r="6" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="155" cy="208" r="5" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="170" cy="200" r="6" fill="white" stroke={ink} strokeOpacity="0.15" />
      </g>
      <g opacity="0.85">
        <circle cx="240" cy="205" r="6" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="255" cy="212" r="5" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="270" cy="205" r="6" fill="white" stroke={ink} strokeOpacity="0.15" />
        <circle cx="285" cy="212" r="5" fill="white" stroke={ink} strokeOpacity="0.15" />
      </g>
      {/* marigolds */}
      <g>
        <circle cx="100" cy="100" r="10" fill={marigold} opacity="0.85" />
        <circle cx="100" cy="100" r="4" fill={gold} />
        <circle cx="320" cy="90" r="8" fill={marigold} opacity="0.85" />
        <circle cx="320" cy="90" r="3" fill={gold} />
        <circle cx="60" cy="160" r="6" fill={marigold} opacity="0.7" />
      </g>
    </svg>
  );
}

/* ---------- Occasions ---------- */
const Frame = ({ children, ...p }: P & { children: React.ReactNode }) => (
  <svg viewBox="0 0 120 120" fill="none" {...p}>
    {children}
  </svg>
);

export const WeddingIcon = (p: P) => (
  <Frame {...p}>
    <path d="M30 80 L30 50 L60 30 L90 50 L90 80" stroke={ink} strokeWidth="2" fill={cream} />
    <path d="M30 50 Q60 38 90 50" stroke={gold} strokeWidth="2" fill="none" />
    <circle cx="60" cy="38" r="4" fill={marigold} />
    <rect x="50" y="62" width="20" height="18" fill={primary} opacity="0.15" />
    <path d="M50 80 L70 80" stroke={ink} strokeWidth="1.5" />
    <circle cx="40" cy="55" r="3" fill={marigold} opacity="0.7" />
    <circle cx="80" cy="55" r="3" fill={marigold} opacity="0.7" />
  </Frame>
);

export const BirthdayIcon = (p: P) => (
  <Frame {...p}>
    <rect x="30" y="60" width="60" height="30" rx="4" fill={cream} stroke={ink} strokeWidth="2" />
    <path d="M30 70 Q45 78 60 70 Q75 78 90 70" stroke={gold} strokeWidth="2" fill="none" />
    <rect x="58" y="40" width="4" height="20" fill={gold} />
    <path d="M60 40 Q58 32 60 28 Q62 32 60 40" fill={marigold} />
    <circle cx="60" cy="30" r="2" fill={marigold} />
  </Frame>
);

export const HousewarmingIcon = (p: P) => (
  <Frame {...p}>
    <path d="M30 85 L60 50 L90 85 Z" fill={cream} stroke={ink} strokeWidth="2" />
    <rect x="52" y="68" width="16" height="17" fill={primary} opacity="0.2" stroke={ink} strokeWidth="1.5" />
    <ellipse cx="60" cy="92" rx="14" ry="3" fill={gold} />
    <path d="M55 88 Q60 80 65 88 Z" fill={gold} />
    <circle cx="60" cy="82" r="2" fill={marigold} />
  </Frame>
);

export const ReligiousIcon = (p: P) => (
  <Frame {...p}>
    <path d="M40 85 L40 60 L60 35 L80 60 L80 85 Z" fill={cream} stroke={ink} strokeWidth="2" />
    <path d="M45 60 L75 60" stroke={gold} strokeWidth="2" />
    <path d="M48 70 L72 70" stroke={gold} strokeWidth="1.5" />
    <rect x="55" y="75" width="10" height="10" fill={primary} opacity="0.2" />
    <circle cx="60" cy="42" r="3" fill={marigold} />
  </Frame>
);

export const CorporateIcon = (p: P) => (
  <Frame {...p}>
    <rect x="30" y="50" width="60" height="35" fill={cream} stroke={ink} strokeWidth="2" />
    <rect x="38" y="58" width="10" height="8" fill={primary} opacity="0.25" />
    <rect x="55" y="58" width="10" height="8" fill={primary} opacity="0.25" />
    <rect x="72" y="58" width="10" height="8" fill={primary} opacity="0.25" />
    <rect x="38" y="72" width="44" height="3" fill={gold} />
    <path d="M30 50 L60 35 L90 50" stroke={ink} strokeWidth="2" fill={goldSoft} />
  </Frame>
);

export const OtherIcon = (p: P) => (
  <Frame {...p}>
    <circle cx="60" cy="60" r="28" fill={cream} stroke={ink} strokeWidth="2" />
    <path d="M50 55 Q60 45 70 55" stroke={ink} strokeWidth="2" fill="none" />
    <circle cx="52" cy="65" r="2" fill={ink} />
    <circle cx="68" cy="65" r="2" fill={ink} />
    <path d="M52 75 Q60 80 68 75" stroke={ink} strokeWidth="2" fill="none" />
    <circle cx="40" cy="40" r="3" fill={marigold} />
    <circle cx="82" cy="42" r="3" fill={marigold} />
  </Frame>
);

/* ---------- Dishes ---------- */
const DishFrame = ({ children, ...p }: P & { children: React.ReactNode }) => (
  <svg viewBox="0 0 100 100" fill="none" {...p}>
    <circle cx="50" cy="55" r="38" fill={cream} stroke={ink} strokeWidth="1.5" />
    <ellipse cx="50" cy="55" rx="30" ry="28" fill="white" opacity="0.6" />
    {children}
  </svg>
);

export const IdliIcon = (p: P) => (
  <DishFrame {...p}>
    <ellipse cx="38" cy="55" rx="12" ry="8" fill="white" stroke={ink} strokeWidth="1.2" />
    <ellipse cx="62" cy="55" rx="12" ry="8" fill="white" stroke={ink} strokeWidth="1.2" />
    <ellipse cx="50" cy="68" rx="12" ry="8" fill="white" stroke={ink} strokeWidth="1.2" />
  </DishFrame>
);

export const DosaIcon = (p: P) => (
  <DishFrame {...p}>
    <path d="M25 55 Q50 40 75 55 Q70 70 50 70 Q30 70 25 55 Z" fill={gold} opacity="0.7" stroke={ink} strokeWidth="1.2" />
    <circle cx="50" cy="58" r="4" fill={marigold} opacity="0.6" />
  </DishFrame>
);

export const VadaIcon = (p: P) => (
  <DishFrame {...p}>
    <circle cx="50" cy="58" r="14" fill={gold} opacity="0.7" stroke={ink} strokeWidth="1.2" />
    <circle cx="50" cy="58" r="4" fill={cream} stroke={ink} strokeWidth="1.2" />
  </DishFrame>
);

export const PongalIcon = (p: P) => (
  <DishFrame {...p}>
    <ellipse cx="50" cy="62" rx="18" ry="10" fill={goldSoft} stroke={ink} strokeWidth="1.2" />
    <circle cx="44" cy="58" r="2" fill={marigold} />
    <circle cx="54" cy="60" r="2" fill={marigold} />
  </DishFrame>
);

export const PuriIcon = (p: P) => (
  <DishFrame {...p}>
    <circle cx="50" cy="58" r="16" fill={gold} opacity="0.85" stroke={ink} strokeWidth="1.2" />
    <circle cx="46" cy="55" r="3" fill={cream} />
  </DishFrame>
);

export const ThaliIcon = (p: P) => (
  <DishFrame {...p}>
    <circle cx="50" cy="58" r="24" fill="white" stroke={ink} strokeWidth="1.2" />
    <circle cx="38" cy="52" r="5" fill={marigold} />
    <circle cx="62" cy="52" r="5" fill={leaf} />
    <circle cx="38" cy="68" r="5" fill={gold} />
    <circle cx="62" cy="68" r="5" fill={primary} opacity="0.5" />
    <circle cx="50" cy="60" r="4" fill="white" stroke={ink} strokeWidth="1" />
  </DishFrame>
);

export const BiryaniIcon = (p: P) => (
  <DishFrame {...p}>
    <path d="M28 50 Q28 70 36 78 L64 78 Q72 70 72 50 Z" fill={gold} opacity="0.8" stroke={ink} strokeWidth="1.2" />
    <circle cx="42" cy="55" r="2" fill={marigold} />
    <circle cx="55" cy="60" r="2" fill={marigold} />
    <circle cx="48" cy="65" r="2" fill={leaf} />
    <path d="M30 50 L70 50" stroke={ink} strokeWidth="1.2" />
  </DishFrame>
);

export const SamosaIcon = (p: P) => (
  <DishFrame {...p}>
    <path d="M50 38 L72 72 L28 72 Z" fill={gold} opacity="0.85" stroke={ink} strokeWidth="1.2" />
  </DishFrame>
);

export const TeaIcon = (p: P) => (
  <DishFrame {...p}>
    <path d="M34 50 L34 70 Q34 78 50 78 Q66 78 66 70 L66 50 Z" fill={cream} stroke={ink} strokeWidth="1.2" />
    <ellipse cx="50" cy="50" rx="16" ry="3" fill={gold} opacity="0.5" />
    <path d="M66 56 Q74 56 74 62 Q74 68 66 68" stroke={ink} strokeWidth="1.2" fill="none" />
  </DishFrame>
);

export const RotiIcon = (p: P) => (
  <DishFrame {...p}>
    <circle cx="50" cy="58" r="18" fill={goldSoft} stroke={ink} strokeWidth="1.2" />
    <circle cx="45" cy="55" r="2" fill={ink} opacity="0.3" />
    <circle cx="55" cy="60" r="1.5" fill={ink} opacity="0.3" />
  </DishFrame>
);

export const SweetIcon = (p: P) => (
  <DishFrame {...p}>
    <circle cx="40" cy="62" r="9" fill={gold} stroke={ink} strokeWidth="1.2" />
    <circle cx="60" cy="62" r="9" fill={gold} stroke={ink} strokeWidth="1.2" />
    <circle cx="50" cy="52" r="9" fill={marigold} stroke={ink} strokeWidth="1.2" />
  </DishFrame>
);

export const GenericDishIcon = (p: P) => (
  <DishFrame {...p}>
    <circle cx="50" cy="58" r="14" fill={goldSoft} stroke={ink} strokeWidth="1.2" />
  </DishFrame>
);

/* ---------- Venues ---------- */
export const HallIcon = (p: P) => (
  <Frame {...p}>
    <rect x="20" y="55" width="80" height="35" fill={cream} stroke={ink} strokeWidth="2" />
    <path d="M20 55 L60 30 L100 55" stroke={ink} strokeWidth="2" fill={goldSoft} />
    <rect x="55" y="70" width="10" height="20" fill={primary} opacity="0.25" />
    <rect x="30" y="65" width="8" height="8" fill={primary} opacity="0.2" />
    <rect x="82" y="65" width="8" height="8" fill={primary} opacity="0.2" />
  </Frame>
);

export const HomeIcon = (p: P) => (
  <Frame {...p}>
    <path d="M30 85 L30 55 L60 35 L90 55 L90 85 Z" fill={cream} stroke={ink} strokeWidth="2" />
    <rect x="52" y="65" width="16" height="20" fill={primary} opacity="0.2" stroke={ink} strokeWidth="1.5" />
    <rect x="38" y="63" width="8" height="8" fill={gold} opacity="0.5" />
  </Frame>
);

export const OutdoorIcon = (p: P) => (
  <Frame {...p}>
    <path d="M20 60 L60 35 L100 60" stroke={ink} strokeWidth="2" fill={marigold} opacity="0.4" />
    <line x1="30" y1="60" x2="30" y2="90" stroke={ink} strokeWidth="2" />
    <line x1="90" y1="60" x2="90" y2="90" stroke={ink} strokeWidth="2" />
    <circle cx="40" cy="50" r="3" fill={marigold} />
    <circle cx="60" cy="42" r="3" fill={marigold} />
    <circle cx="80" cy="50" r="3" fill={marigold} />
  </Frame>
);

export const TempleIcon = (p: P) => (
  <Frame {...p}>
    <path d="M30 85 L35 50 L60 30 L85 50 L90 85 Z" fill={cream} stroke={ink} strokeWidth="2" />
    <line x1="35" y1="60" x2="85" y2="60" stroke={gold} strokeWidth="1.5" />
    <line x1="38" y1="70" x2="82" y2="70" stroke={gold} strokeWidth="1.5" />
    <rect x="53" y="72" width="14" height="13" fill={primary} opacity="0.25" />
    <circle cx="60" cy="36" r="3" fill={marigold} />
  </Frame>
);

/* ---------- Notebook marks ---------- */
export const JasmineSprig = (p: P) => (
  <svg viewBox="0 0 80 30" fill="none" {...p}>
    <path d="M5 15 Q40 5 75 15" stroke={leaf} strokeWidth="1.2" fill="none" />
    <circle cx="20" cy="14" r="3" fill="white" stroke={ink} strokeOpacity="0.2" />
    <circle cx="35" cy="11" r="3" fill="white" stroke={ink} strokeOpacity="0.2" />
    <circle cx="50" cy="13" r="3" fill="white" stroke={ink} strokeOpacity="0.2" />
    <circle cx="65" cy="15" r="3" fill="white" stroke={ink} strokeOpacity="0.2" />
  </svg>
);

export const Underline = (p: P) => (
  <svg viewBox="0 0 120 8" fill="none" {...p}>
    <path d="M2 4 Q60 0 118 4" stroke={gold} strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const MarigoldDot = (p: P) => (
  <svg viewBox="0 0 16 16" fill="none" {...p}>
    <circle cx="8" cy="8" r="6" fill={marigold} opacity="0.85" />
    <circle cx="8" cy="8" r="2" fill={gold} />
  </svg>
);
