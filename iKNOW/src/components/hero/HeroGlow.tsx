/**
 * The inner-page hero surface: dark ground, abstract blue light forms.
 *
 * Home's hero is the user's own photograph. Inner pages are not staging a
 * second copy of it — this is drawn, not photographed: three soft blurred
 * light shapes plus a pair of thin curved rim strokes, all CSS/SVG. It
 * echoes the same warm-on-cool-navy language the home hero and its rim
 * light already use, without asking one photo to serve every crop.
 */
export function HeroGlow() {
  return (
    <div className="hero-glow" aria-hidden="true">
      <span className="hero-glow__shape hero-glow__shape--sweep" />
      <span className="hero-glow__shape hero-glow__shape--band" />
      <span className="hero-glow__shape hero-glow__shape--pool" />
      <svg
        className="hero-glow__lines"
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMaxYMid slice"
        focusable="false"
      >
        <path
          className="hero-glow__stroke hero-glow__stroke--soft"
          d="M1620 -80 C 1240 40 980 160 860 340 C 780 460 760 560 800 700"
        />
        <path
          className="hero-glow__stroke hero-glow__stroke--core"
          d="M1660 -40 C 1280 90 1020 210 900 380 C 830 480 810 570 840 700"
        />
      </svg>
    </div>
  )
}
