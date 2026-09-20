import React from "react";

const sparkle = (x, y, s = 7) =>
  `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;

const svgProps = { "aria-hidden": "true", focusable: "false" };

/* ------------------------------------------------------------------ */
/* Arch plate: the frame every project drawing sits in                  */
/* ------------------------------------------------------------------ */
const ARCH = "M30 470V210A180 180 0 0 1 390 210V470Z";

function Plate({ fills, children }) {
  return (
    <svg viewBox="0 0 420 480" className="art block w-full h-auto" {...svgProps}>
      <g className="riso-fill">
        <path className="tint" d={ARCH} />
        {fills}
      </g>
      <path className="ink" d="M30 470V210A180 180 0 0 1 390 210V470" />
      <path className="ink" d="M8 470H412" />
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Portrait frame: the photo is layered over this in Portfolio.jsx      */
/* ------------------------------------------------------------------ */
export function HeroPlate() {
  const arch = "M30 590V220A180 180 0 0 1 390 220V590Z";
  return (
    <svg viewBox="0 0 420 600" className="art block w-full h-full" {...svgProps}>
      <g className="riso-fill">
        <path className="tint" d={arch} />
        <circle className="sage" cx="335" cy="120" r="34" />
        <circle className="sage" cx="88" cy="470" r="22" />
      </g>
      <path className="ink" d="M30 590V220A180 180 0 0 1 390 220V590" />
      <path className="ink" d="M8 590H412" />
      <path className="ink" d={sparkle(80, 150, 9)} />
      <path className="ink" d={sparkle(360, 300, 7)} />
      <path className="ink" d={sparkle(52, 330, 6)} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Attendance app: phone, QR code, fingerprint, clock                */
/* ------------------------------------------------------------------ */
const QR_MODULES = [
  [198, 142], [208, 150], [198, 158], [214, 142], [210, 166], [232, 182],
  [242, 190], [220, 198], [198, 186], [186, 202], [214, 214], [236, 214],
  [250, 206], [204, 228], [228, 232], [174, 184],
];

export function PhoneScene() {
  const tilt = "rotate(-7 210 255)";
  return (
    <Plate
      fills={
        <>
          <rect className="sage" x="135" y="100" width="150" height="310" rx="26" transform={tilt} />
          <circle className="sage" cx="92" cy="372" r="48" />
          <circle className="sage" cx="338" cy="150" r="28" />
        </>
      }
    >
      <g transform={tilt}>
        <rect className="ink" x="135" y="100" width="150" height="310" rx="26" />
        <rect className="paper" x="147" y="118" width="126" height="274" rx="14" />
        <path className="ink" d="M196 109h28" strokeWidth="4" />
        {/* QR code */}
        <rect className="ink" x="160" y="140" width="30" height="30" />
        <rect className="ink-solid" x="167" y="147" width="16" height="16" />
        <rect className="ink" x="230" y="140" width="30" height="30" />
        <rect className="ink-solid" x="237" y="147" width="16" height="16" />
        <rect className="ink" x="160" y="210" width="30" height="30" />
        <rect className="ink-solid" x="167" y="217" width="16" height="16" />
        {QR_MODULES.map(([x, y]) => (
          <rect key={`${x}-${y}`} className="ink-solid" x={x} y={y} width="7" height="7" />
        ))}
        <path className="ink" d="M150 190h120" strokeDasharray="2 7" />
        {/* fingerprint */}
        <path className="ink" d="M188 332c0-22 10-38 22-38s22 16 22 38" />
        <path className="ink" d="M196 336c-2-20 8-32 14-32s16 12 14 32" />
        <path className="ink" d="M203 338c-1-12 3-20 7-20s8 8 7 20" />
        <path className="ink" d="M210 338v-10" />
        <path className="ink" d="M190 342c2 8 6 14 12 18M230 342c-2 8-6 14-12 18" />
        <path className="ink" d="M190 376h40" strokeWidth="3.5" />
      </g>
      {/* clock */}
      <circle className="ink" cx="92" cy="372" r="48" />
      <path className="ink" d="M92 332v6M92 406v6M52 372h6M126 372h6" />
      <path className="ink" d="M92 372V346M92 372l16 10" strokeWidth="3.5" />
      <circle className="ink-solid" cx="92" cy="372" r="3.5" />
      {/* check badge */}
      <circle className="ink" cx="338" cy="150" r="28" />
      <path className="ink" d="M325 151l9 9 18-20" strokeWidth="4" />
      <path className="ink" d={sparkle(70, 190, 8)} />
      <path className="ink" d={sparkle(356, 262, 6)} />
    </Plate>
  );
}

/* 2. Staycation booking: suite building, key, calendar                 */
const win = (x, y) => `M${x} ${y + 60}V${y + 18}a18 18 0 0 1 36 0V${y + 60}Z`;

export function StayScene() {
  return (
    <Plate
      fills={
        <>
          <rect className="sage" x="118" y="150" width="184" height="320" />
          <circle className="sage" cx="322" cy="96" r="30" />
          <rect className="sage" x="52" y="98" width="96" height="84" rx="8" transform="rotate(-8 100 140)" />
          <circle className="sage" cx="340" cy="222" r="26" />
        </>
      }
    >
      {/* building */}
      <rect className="ink" x="118" y="150" width="184" height="320" />
      <rect className="ink" x="108" y="134" width="204" height="16" />
      {[146, 238].map((x) =>
        [176, 270].map((y) => (
          <React.Fragment key={`${x}-${y}`}>
            <path className="paper" d={win(x, y)} />
            <path className="ink" d={`M${x - 5} ${y + 66}h46`} />
          </React.Fragment>
        ))
      )}
      <path className="paper" d="M186 470V404a24 24 0 0 1 48 0V470Z" />
      <circle className="ink-solid" cx="224" cy="440" r="2.6" />
      <path className="ink" d="M196 372h28" strokeDasharray="1 7" />
      {/* calendar */}
      <g transform="rotate(-8 100 140)">
        <rect className="ink" x="52" y="98" width="96" height="84" rx="8" />
        <path className="ink" d="M52 122h96M76 90v16M124 90v16" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <circle key={`${r}${c}`} className="ink-solid" cx={71 + c * 19} cy={139 + r * 14} r="2.2" />
          ))
        )}
        <circle className="ink" cx="109" cy="153" r="9" />
      </g>
      {/* key */}
      <g transform="rotate(14 340 290)">
        <circle className="ink" cx="340" cy="222" r="26" />
        <circle className="ink" cx="340" cy="222" r="9" />
        <path className="ink" d="M335 248V352h10V248M345 322h14v10h-14M345 342h10v10h-10" />
      </g>
      <path className="ink" d={sparkle(60, 240, 8)} />
      <path className="ink" d={sparkle(360, 410, 6)} />
    </Plate>
  );
}

/* 3. Panitikan flipbook: open book, Bakunawa serpent, moon             */
const SERPENT =
  "M210 350C150 300 300 270 230 215C170 170 120 210 150 150C175 105 250 112 285 92";

export function BookScene() {
  const head = "translate(283 94) rotate(-22) scale(1.45)";
  return (
    <Plate
      fills={
        <>
          <circle className="sage" cx="388" cy="70" r="32" />
          <path className="sage-stroke" d={SERPENT} strokeWidth="30" />
          <path
            className="sage"
            transform={head}
            d="M0 -6C14 -22 44 -22 62 -8C48 -6 36 -2 26 0C40 4 50 8 56 12C40 22 14 20 0 6Z"
          />
          <path className="sage" d="M62 352C112 330 170 332 208 356V440C170 418 112 416 62 438Z" />
          <path className="sage" d="M212 356C250 332 308 330 358 352V438C308 416 250 418 212 440Z" />
        </>
      }
    >
      {/* moon */}
      <circle className="ink" cx="388" cy="70" r="32" />
      <path className="ink" d="M400 52a5 5 0 1 0 0.1 0M404 84a7 7 0 1 0 0.1 0M376 88a4 4 0 1 0 0.1 0" strokeWidth="2" />
      {/* serpent */}
      <path className="ticks" d={SERPENT} />
      <path className="ink" d={SERPENT} strokeWidth="3.5" />
      <g transform={head} strokeWidth="2">
        <path className="ink" d="M0 -6C14 -22 44 -22 62 -8C48 -6 36 -2 26 0" />
        <path className="ink" d="M0 6C14 20 40 22 56 12C44 8 34 4 26 0" />
        <path className="ink" d="M36 -13l3 8 4-9M47 -13l3 7 4-8M33 14l4-8 3 9" strokeWidth="2" />
        <circle className="ink-solid" cx="14" cy="-9" r="3.4" />
        <path className="ink" d="M6 -14C0 -32 -14 -40 -30 -38M15 -18C13 -34 5 -44 -8 -48M8 10C2 28 -12 36 -26 34" />
      </g>
      {/* book */}
      <path className="ink" d="M62 352C112 330 170 332 208 356V440C170 418 112 416 62 438Z" />
      <path className="ink" d="M212 356C250 332 308 330 358 352V438C308 416 250 418 212 440Z" />
      <path className="ink" d="M62 438v10C112 426 170 428 210 450C250 428 308 426 358 448v-10" />
      <path className="ink" d="M84 368C118 356 154 358 186 374M84 386C118 374 154 376 186 392M84 404C118 392 154 394 186 410" />
      <path className="ink" d="M234 374C266 358 302 356 336 368M234 392C266 376 302 374 336 386M234 410C266 394 302 392 336 404" />
      <path className="ink" d={sparkle(72, 120, 9)} />
      <path className="ink" d={sparkle(120, 62, 6)} />
      <path className="ink" d={sparkle(56, 250, 6)} />
    </Plate>
  );
}

/* Desk scene for the About section                                     */
export function DeskScene() {
  return (
    <svg viewBox="0 0 480 300" className="art block w-full h-auto" {...svgProps}>
      <g className="riso-fill">
        <rect className="sage" x="120" y="60" width="240" height="150" rx="10" />
        <path className="sage" d="M96 210H384L400 236Q400 244 392 244H88Q80 244 80 236Z" />
        <path className="sage" d="M78 206C60 170 62 140 84 120C96 150 94 180 78 206Z" />
        <path className="sage" d="M78 206C96 176 118 166 132 168C130 190 106 204 78 206Z" />
        <rect className="sage" x="404" y="196" width="44" height="50" rx="8" />
      </g>
      {/* laptop */}
      <rect className="ink" x="120" y="60" width="240" height="150" rx="10" />
      <rect className="paper" x="132" y="72" width="216" height="126" rx="4" />
      <path className="ink" d="M150 96h70M164 112h50M164 128h84M150 144h44M164 160h60" strokeWidth="3.5" />
      <path className="ink" d="M296 114l-18 16 18 16M330 114l18 16-18 16M320 108l-12 44" />
      <path className="ink" d="M96 210H384L400 236Q400 244 392 244H88Q80 244 80 236Z" />
      <path className="ink" d="M212 219h56" />
      {/* mug */}
      <rect className="ink" x="404" y="196" width="44" height="50" rx="8" />
      <path className="ink" d="M448 208c16 0 16 26 0 26" />
      <path className="ink" d="M418 186c-6-10 6-14 0-26M434 186c-6-10 6-14 0-26" />
      {/* plant */}
      <path className="ink" d="M78 206C60 170 62 140 84 120C96 150 94 180 78 206Z" />
      <path className="ink" d="M78 206C96 176 118 166 132 168C130 190 106 204 78 206Z" />
      <path className="ink" d="M78 206V170" />
      <path className="paper" d="M46 246l6-40h52l6 40Z" />
      <path className="ink" d="M20 246H460" />
      <path className="ink" d={sparkle(440, 96, 8)} />
      <path className="ink" d={sparkle(30, 90, 6)} />
    </svg>
  );
}

/* Inline glyphs used inside the hero headline (they draw themselves in) */
export function GlyphPhone({ delay = "0.6s" }) {
  const t = "rotate(-8 33 32)";
  return (
    <svg viewBox="0 0 64 64" className="art glyph draw" style={{ "--d": delay }} {...svgProps}>
      <g className="riso-fill">
        <rect className="sage" x="18" y="6" width="30" height="52" rx="7" transform={t} />
      </g>
      <g transform={t}>
        <rect className="ink pl" pathLength="1" x="18" y="6" width="30" height="52" rx="7" strokeWidth="3" />
        <path className="ink pl" pathLength="1" d="M28 12h10" strokeWidth="3" />
        <path className="ink pl" pathLength="1" d="M26 35l5 5 10-12" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function GlyphKey({ delay = "0.8s" }) {
  const t = "rotate(-38 32 32)";
  return (
    <svg viewBox="0 0 64 64" className="art glyph draw" style={{ "--d": delay }} {...svgProps}>
      <g className="riso-fill">
        <circle className="sage" cx="16" cy="32" r="11" transform={t} />
      </g>
      <g transform={t}>
        <circle className="ink pl" pathLength="1" cx="16" cy="32" r="11" strokeWidth="3" />
        <circle className="ink pl" pathLength="1" cx="16" cy="32" r="3.5" strokeWidth="3" />
        <path className="ink pl" pathLength="1" d="M27 32H58" strokeWidth="3" />
        <path className="ink pl" pathLength="1" d="M47 32v10M54 32v8" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function GlyphBook({ delay = "1s" }) {
  return (
    <svg viewBox="0 0 64 64" className="art glyph draw" style={{ "--d": delay }} {...svgProps}>
      <g className="riso-fill">
        <circle className="sage" cx="32" cy="12" r="9" />
      </g>
      <path className="ink pl" pathLength="1" d="M8 26C18 22 26 24 32 30V54C26 48 18 46 8 50Z" strokeWidth="3" />
      <path className="ink pl" pathLength="1" d="M56 26C46 22 38 24 32 30V54C38 48 46 46 56 50Z" strokeWidth="3" />
      <path className="ink pl" pathLength="1" d="M32 4A9 9 0 0 1 32 21A6 9 0 0 0 32 4Z" strokeWidth="3" />
    </svg>
  );
}

/* Hand-drawn arrow for the "open to work" note                          */
export function ScribbleArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 120 90" className={`art ${className}`} {...svgProps}>
      <path className="ink" d="M8 12C48 2 92 24 100 68M86 54l14 16 10-20" />
    </svg>
  );
}

/* Postmark for the contact section                                     */
export function Postmark({ className = "" }) {
  return (
    <svg viewBox="0 0 220 140" className={`art ${className}`} {...svgProps}>
      <g className="riso-fill">
        <circle className="sage" cx="70" cy="70" r="40" />
      </g>
      <circle className="ink" cx="70" cy="70" r="62" />
      <circle className="ink" cx="70" cy="70" r="42" strokeWidth="1.5" />
      <defs>
        <path id="pm-top" d="M23 70A47 47 0 0 1 117 70" />
        <path id="pm-bot" d="M16 70A54 54 0 0 0 124 70" />
      </defs>
      <text fontSize="12" fontStyle="italic" letterSpacing="1">
        <textPath href="#pm-top" startOffset="50%" textAnchor="middle">Kurt Tolentino</textPath>
      </text>
      <text fontSize="12" fontStyle="italic" letterSpacing="1">
        <textPath href="#pm-bot" startOffset="50%" textAnchor="middle">Philippines</textPath>
      </text>
      <text x="70" y="79" fontSize="26" textAnchor="middle">2026</text>
      <path className="ink" d="M140 48q10-9 20 0t20 0t20 0M140 70q10-9 20 0t20 0t20 0M140 92q10-9 20 0t20 0t20 0" />
    </svg>
  );
}
