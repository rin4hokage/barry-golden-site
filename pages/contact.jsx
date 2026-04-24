function ContactPage() {
  const socials = [
    { name: 'Instagram', handle: '@barrygoldenmusic' },
    { name: 'YouTube', handle: '/barrygolden' },
    { name: 'Spotify', handle: 'Barry Golden' },
    { name: 'Facebook', handle: '/bgvelocityband' },
  ];

  return (
    <div className="bg-page">
      <Nav />
      <PageHeader
        eyebrow="Get In Touch"
        title={<em>Contact</em>}
        lede="Press, promoters, and the curious. Drop us a line."
      />

      <section className="bg-section narrow" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}><Eyebrow>Email</Eyebrow></div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 5vw, 56px)',
          color: 'var(--gold)',
          fontWeight: 400,
          marginBottom: 24,
        }}>
          hello@barrygolden.com
        </h2>
        <a href="mailto:hello@barrygolden.com" className="bg-btn solid">Send an Email</a>
      </section>

      <GoldDivider />

      <section className="bg-section narrow">
        <SectionHead eyebrow="Follow Along" title="Between the sets." />
        <div className="bg-socials-grid">
          {socials.map((s, i) => (
            <a key={i} href="#" className="bg-social-card">
              <div className="name"><em>{s.name}</em></div>
              <div className="handle">{s.handle}</div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
Object.assign(window, { ContactPage });
