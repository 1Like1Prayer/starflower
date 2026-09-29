/**
 * Design tokens for StarFlowers. Every visual constant lives here and is
 * exposed to CSS as a custom property (see cssVariables.ts), so component
 * stylesheets never hard-code colours, fonts, easings or breakpoints.
 */

const palette = {
  forest: '#1B1E19',
  forestRaised: '#23271F',
  sand: '#DCCFC4',
  cream: '#F0EADF',
  white: '#FFFFFF',
  ink: '#3A322D',
  inkMuted: '#5A4F48',
  sage: '#818873',
  mist: '#D9D4C9',
  stone: '#A9A69B',
  haze: '#C9C5BA',
  placeholder: '#7D7068',
} as const

export const tokens = {
  color: palette,

  line: {
    ink: 'rgba(58, 50, 45, 0.35)',
    inkStrong: 'rgba(58, 50, 45, 0.45)',
    creamFaint: 'rgba(240, 234, 223, 0.12)',
    cream: 'rgba(240, 234, 223, 0.2)',
    creamStrong: 'rgba(240, 234, 223, 0.4)',
  },

  overlay: {
    scrim: 'rgba(20, 22, 18, 0.72)',
    veilFrom: 'rgba(20, 22, 18, 0.92)',
    veilTo: 'rgba(20, 22, 18, 0)',
  },

  gradient: {
    toneForest: `radial-gradient(ellipse at 42% 36%, #3A4036 0%, ${palette.forest} 78%)`,
    toneSage: 'radial-gradient(ellipse at 42% 36%, #9BA18B 0%, #5E6553 80%)',
    toneEspresso: 'radial-gradient(ellipse at 42% 36%, #554941 0%, #231E1B 80%)',
    toneMoss: 'radial-gradient(ellipse at 42% 36%, #555C4B 0%, #262A23 80%)',
    hero: `radial-gradient(ellipse 1100px 800px at 70% 55%, #2C3128 0%, ${palette.forest} 70%)`,
  },

  font: {
    body: "'Raleway', 'Avenir Next', sans-serif",
    accent: "'Cormorant Garamond', Garamond, serif",
  },

  weight: {
    thin: '200',
    light: '300',
    regular: '400',
  },

  size: {
    micro: '11px',
    xs: '13px',
    sm: '14px',
    base: '15px',
    md: '16px',
    lg: '17px',
    xl: '20px',
    h4: '24px',
    h3: 'clamp(22px, 2vw, 26px)',
    cardTitle: 'clamp(26px, 2.4vw, 34px)',
    columnTitle: 'clamp(28px, 2.7vw, 38px)',
    stepNumber: 'clamp(40px, 3.9vw, 56px)',
    quote: 'clamp(30px, 4.2vw, 60px)',
    quoteSm: 'clamp(28px, 3.5vw, 50px)',
    sectionTitleSm: 'clamp(38px, 4.5vw, 64px)',
    sectionTitle: 'clamp(42px, 5.2vw, 76px)',
    displayPage: 'clamp(52px, 7.6vw, 112px)',
    displayHero: 'clamp(56px, 8.6vw, 124px)',
  },

  tracking: {
    tight: '-0.02em',
    snug: '-0.01em',
    normal: '0',
    button: '0.02em',
    wide: '0.04em',
    caption: '0.24em',
    label: '0.3em',
  },

  space: {
    gutter: 'clamp(20px, 5.6vw, 80px)',
    section: 'clamp(64px, 8vw, 120px)',
    headerTop: '44px',
  },

  radius: {
    pill: '999px',
    round: '50%',
  },

  motion: {
    easeOut: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.77, 0, 0.18, 1)',
    easeSmooth: 'cubic-bezier(0.65, 0, 0.25, 1)',
    easeDraw: 'cubic-bezier(0.6, 0, 0.2, 1)',
    fast: '0.3s',
    base: '0.5s',
    slow: '0.9s',
    reveal: '1.2s',
  },

  z: {
    header: '5',
    overlay: '30',
    curtain: '60',
  },
} as const

export type Theme = typeof tokens

/** Photo-placeholder colour ways. Each maps to `--gradient-tone-<name>`. */
export const TONES = ['forest', 'sage', 'espresso', 'moss'] as const
export type Tone = (typeof TONES)[number]
