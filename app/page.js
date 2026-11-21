import Effects from './Effects';

// ---- Edit content here ----------------------------------------------------
const CONTACT = {
  email: 'techyard.asia@gmail.com',
  phone: '01759809769',
  phoneHref: 'tel:+8801759809769',
  facebook: 'https://www.facebook.com/techyard.asia',
  linkedin: 'https://www.linkedin.com/company/techyard-asia/',
};

const PRODUCTS = [
  {
    id: 'dropdoor',
    name: 'DropDoor',
    icon: '/dropdoor.png',
    kind: 'Reselling app for business owners',
    text: 'Sell products without holding stock. DropDoor gives business owners and resellers the products, so they can focus on selling.',
    status: 'On Google Play',
    color: 'green',
    links: [
      { label: 'Get it on Google Play', href: 'https://play.google.com/store/apps/details?id=dropdoor.app', primary: true },
      { label: 'Facebook page', href: 'https://www.facebook.com/app.dropdoor' },
    ],
  },
  {
    id: 'hullor',
    name: 'hullor',
    serif: true,
    kind: 'Ecommerce store',
    text: 'An online store where almost every kind of product is available at retail. Order on the web, on Android or through Facebook.',
    status: 'Live',
    color: 'gold',
    links: [
      { label: 'Visit tryhullor.com', href: 'https://tryhullor.com', primary: true },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.hullor.app' },
      { label: 'Facebook page', href: 'https://www.facebook.com/hullor.shopbd/' },
    ],
  },
  {
    id: 'outreach',
    name: 'OutReach',
    icon: '/outreach.png',
    kind: 'Digital technology agency',
    text: 'We help businesses get seen, get customers and save time.',
    tags: ['Meta ad promotion', 'Video making and editing', 'App and website building', 'Messenger and WhatsApp AI automation'],
    status: 'Taking clients',
    color: 'blue',
    links: [
      { label: 'Talk to us', href: '#contact', primary: true },
      { label: 'Facebook page', href: 'https://www.facebook.com/outreachtechbd' },
    ],
  },
];

const ABOUT =
  'TechYard is the parent company. Each product has its own brand, its own customers and its own focus, while sharing tools, know-how and one standard of work.';

const PRINCIPLES = [
  { t: 'Start small', d: 'We launch the simplest useful version first.' },
  { t: 'Ship fast', d: 'Real users see real work in weeks, not quarters.' },
  { t: 'Listen and improve', d: 'What people tell us decides what we build next.' },
];

const MARQUEE = ['Reselling', 'Ecommerce', 'Meta ads', 'Video editing', 'Websites', 'Mobile apps', 'AI automation', 'Messenger and WhatsApp'];
// ----------------------------------------------------------------------------

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const isExternal = (href) => href.startsWith('http');

export default function Home() {
  const lines = [['We', 'build'], ['digital', 'businesses.']];
  let wi = 0;

  return (
    <>
      <Effects />
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <a className="mark" href="#top" aria-label="TechYard home">
          <img src="/techyard.png" alt="" width="30" height="30" />
          TechYard
        </a>
        <nav aria-label="Main">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="aurora" aria-hidden="true"><span className="o1" /><span className="o2" /><span className="o3" /></div>
          <div className="grid-bg" aria-hidden="true" />
          <div className="hero-in">
            <h1 aria-label="We build digital businesses.">
              {lines.map((line, li) => (
                <span className="line" key={li} aria-hidden="true">
                  {line.map((w) => (
                    <span className="mask" key={w}>
                      <span className="word" style={{ '--i': wi++ }}>{w}</span>{' '}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="lede">
              TechYard is a Bangladesh company that builds and runs digital businesses: a reselling app
              for business owners, an ecommerce store and a digital technology agency.
            </p>
            <div className="actions">
              <a className="btn solid" href="#products">See our products <Arrow /></a>
              <a className="btn ghost" href="#contact">Contact us</a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[0, 1].map((k) => (
              <ul key={k}>
                {MARQUEE.map((m) => <li key={m + k}>{m}</li>)}
              </ul>
            ))}
          </div>
        </div>

        <section id="products" className="products" aria-labelledby="products-h">
          <h2 id="products-h" className="section-title" data-reveal>What we run</h2>
          <div className="stack">
            {PRODUCTS.map((p) => (
              <article key={p.id} id={p.id} className={`card ${p.color}`} data-spot data-reveal>
                <div className="glow" aria-hidden="true" />
                <div className="card-in">
                  <div className="card-head">
                    {p.icon && <img className="ico" src={p.icon} alt="" width="56" height="56" />}
                    <p className="kind">{p.kind}</p>
                    <h3 className={p.serif ? 'serif' : undefined}>{p.name}</h3>
                  </div>
                  <div className="card-body">
                    <p className="text">{p.text}</p>
                    {p.tags && <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
                    <p className="status"><span className="pulse" aria-hidden="true" />{p.status}</p>
                    <div className="links">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          className={`pill${l.primary ? ' primary' : ''}`}
                          href={l.href}
                          {...(isExternal(l.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {l.label} {l.primary && <Arrow />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about" aria-labelledby="about-h">
          <h2 id="about-h" className="section-title" data-reveal>How TechYard works</h2>
          <p className="statement" data-lit>
            {ABOUT.split(' ').map((w, i) => (<span key={i}><span className="w">{w}</span>{' '}</span>))}
          </p>
          <ul className="principles">
            {PRINCIPLES.map((p, i) => (
              <li key={p.t} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-h">
          <div className="contact-glow" aria-hidden="true" />
          <h2 id="contact-h" className="big" data-reveal>Let’s build<br />something.</h2>
          <p className="contact-sub" data-reveal>
            Want to work with us, sell through DropDoor or get ads, a website, an app or AI automation from OutReach? Write or call.
          </p>
          <a className="mail" href={`mailto:${CONTACT.email}`} data-reveal>{CONTACT.email}</a>
          <div className="contact-row" data-reveal>
            <a className="pill primary" href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
            <a className="pill" href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="pill" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} TechYard. Bangladesh.</span>
        <span className="foot-links">
          <a href="#dropdoor">DropDoor</a>
          <a href="https://tryhullor.com" target="_blank" rel="noopener noreferrer">Hullor</a>
          <a href="#outreach">OutReach</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </footer>
    </>
  );
}
