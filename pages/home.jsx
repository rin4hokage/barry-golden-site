function HomePage() {
  const { navigate } = useRouter();
  return (
    <div className="bg-page">
      <Nav />

      {/* Hero */}
      <section className="bg-hero-fullbleed">
        <div className="bg-hero-img-slot">
          <img src="hero.png" alt="BG Barry Golden and the Velocity Band performing live" />
        </div>
        <div className="bg-hero-overlay-left" />
        <div className="bg-hero-overlay-bottom" />
        <div className="bg-hero-content">
          <div className="bg-hero-content-inner">
            <div style={{ marginBottom: 28 }}><Eyebrow>Est. Velocity Sound</Eyebrow></div>
            <h1 className="bg-hero-name">
              <span className="line-1">Barry</span>
              <span className="line-2">Golden</span>
              <span className="line-3">&amp; The Velocity Band</span>
            </h1>
            <div className="bg-hero-ctas">
              <a href="#" className="bg-btn solid" onClick={e => { e.preventDefault(); navigate('booking'); }}>Book the Band</a>
              <a href="#" className="bg-btn" onClick={e => { e.preventDefault(); navigate('press'); }}>View Press Kit</a>
            </div>
          </div>
        </div>
        <div className="bg-hero-ticker">
          <span>Soul · Funk · R&amp;B</span>
          <span className="ticker-dot">·</span>
          <span>Est. Velocity Sound</span>
          <span className="ticker-dot">·</span>
          <span>Available for Private Events &amp; Festivals</span>
          <span className="ticker-dot">·</span>
          <span>Booking Open · 2026</span>
        </div>
      </section>

      <Marquee />

      <GoldDivider />

      {/* About teaser */}
      <section className="bg-section reveal">
        <div className="bg-two-col narrow-left">
          <Portrait label="[ BARRY · PORTRAIT 01 ]" glyph="BG" />
          <div className="bg-bio-copy">
            <div><Eyebrow>The Man Behind the Sound</Eyebrow></div>
            <h2 style={{ marginTop: 14 }}>Header 1</h2>
            <p style={{ marginTop: 20 }}>
              <span className="bg-placeholder">[ BIO PARAGRAPH 1 ]</span>.
            </p>
            <p>
              <span className="bg-placeholder">[ BIO PARAGRAPH 2 ]</span>
            </p>
            <a href="#" className="bg-btn small" style={{ marginTop: 14 }} onClick={e => { e.preventDefault(); navigate('bio'); }}>Read Full Bio</a>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Tour dates */}
      <section className="bg-section narrow reveal">
        <SectionHead eyebrow="On The Road" title="Upcoming Dates" />
        <div className="bg-tour-list">
          {[
            { mo: 'May', dy: '17', wd: 'Sat', venue: '[ VENUE NAME ]', city: '' },
            { mo: 'Jun', dy: '04', wd: 'Wed', venue: '[ VENUE NAME ]', city: '' },
            { mo: 'Jun', dy: '21', wd: 'Sat', venue: '[ PRIVATE EVENT ]', city: '' },
            { mo: 'Jul', dy: '12', wd: 'Sat', venue: '[ FESTIVAL MAIN STAGE ]', city: '' },
          ].map((r, i) => (
            <div key={i} className="bg-tour-row">
              <div className="bg-tour-date">
                <span className="day">{r.wd}</span>
                <em>{r.mo}</em> {r.dy}
              </div>
              <div>
                <div className="bg-tour-venue">{r.venue}</div>
                {r.city && <div className="bg-tour-city">{r.city}</div>}
              </div>
              <a href="#" className="bg-btn small">Tickets</a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="#" className="bg-btn">View Full Calendar</a>
        </div>
      </section>

      <GoldDivider />

      {/* Latest release */}
      <section className="bg-section narrow reveal">
        <SectionHead eyebrow="New From The Studio" title="Latest Release" />
        <div className="bg-two-col">
          <div style={{ maxWidth: 440 }}>
            <div className="bg-album">
              <div className="al-title">[ ALBUM TITLE ]</div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 12 }}><Eyebrow>Single · Released [ MONTH YEAR ]</Eyebrow></div>
            <h2 style={{ fontSize: 48, color: 'var(--ivory)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.05, marginBottom: 20 }}>
              [ Track Title ]
            </h2>
            <p style={{ color: 'var(--ivory-muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 10 }}>
              {"\n"}
            </p>
            <div className="bg-stream-row">
              <a href="#" className="bg-stream"><span className="dot"></span> Spotify</a>
              <a href="#" className="bg-stream"><span className="dot"></span> Apple Music</a>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />
      <FinalCTA />
      <Footer />
    </div>
  );
}
Object.assign(window, { HomePage });
