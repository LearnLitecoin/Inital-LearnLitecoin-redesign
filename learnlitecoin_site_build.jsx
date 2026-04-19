export default function LearnLitecoinSiteBuild() {
  const walletTools = [
    {
      name: 'Nexus Wallet',
      desc: 'Litecoin-focused wallet for buying, storing, sending, receiving, and using Litecoin.',
      cta: 'Set Up Nexus Wallet',
      secondary: 'How to Use Nexus Wallet',
      affiliate: '#nexus-affiliate-link',
    },
    {
      name: 'Cake Wallet',
      desc: 'Mobile wallet with Litecoin support and MWEB-focused functionality.',
      cta: 'Download Cake Wallet',
      secondary: 'Learn About Cake Wallet',
      affiliate: '#cake-affiliate-link',
    },
  ];

  const guides = [
    {
      title: 'How to Set Up a Litecoin Wallet',
      text: 'Learn how to install, secure, and back up a Litecoin wallet using Nexus Wallet or Cake Wallet.',
    },
    {
      title: 'How to Buy Litecoin',
      text: 'Understand the safest ways to buy Litecoin and move it into your wallet.',
    },
    {
      title: 'How to Send & Receive Litecoin',
      text: 'Use wallet addresses, QR codes, and confirmations with confidence.',
    },
    {
      title: 'How to Accept Litecoin for Your Business',
      text: 'Set up business payments, QR checkout, and invoicing with trusted tools.',
    },
  ];

  const merchantBenefits = [
    'Lower transaction fees',
    'Fast payment confirmations',
    'No chargebacks after confirmation',
    'Global customer reach',
  ];

  const tools = [
    {
      section: 'Wallets',
      items: [
        'Nexus Wallet',
        'Cake Wallet',
      ],
    },
    {
      section: 'Spend & Payments',
      items: [
        'BitPay',
        'Litecoin Spend Resources',
      ],
    },
    {
      section: 'Business Tools',
      items: [
        'BitPay for Business',
        'LearnLitecoin Setup Service',
      ],
    },
    {
      section: 'Maps',
      items: [
        'Litecoin ATM Map',
        'Merchants Near You',
        'Spend Litecoin Directory',
      ],
    },
  ];

  const mapCards = [
    {
      title: 'Litecoin ATM Map',
      text: 'Find ATMs that support Litecoin by location, ZIP code, or current location.',
      cta: 'Open ATM Map',
      href: '#atm-map-link',
    },
    {
      title: 'Merchants Near You',
      text: 'Discover local businesses that accept Litecoin directly or through payment processors.',
      cta: 'View Merchant Map',
      href: '#merchant-map-link',
    },
    {
      title: 'Spend Litecoin',
      text: 'Browse online and in-person ways to use Litecoin in the real world.',
      cta: 'View Spend Directory',
      href: '#spend-directory-link',
    },
  ];

  const litecoinIcon = (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-500/10 text-2xl font-black text-sky-300 shadow-lg shadow-sky-500/10">
      Ł
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {litecoinIcon}
            <div>
              <div className="text-xl font-extrabold tracking-tight">
                <span className="text-white">Learn</span>
                <span className="text-sky-400">Litecoin</span>
              </div>
              <div className="text-xs text-slate-400">Merchant onboarding & education</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#why-litecoin" className="transition hover:text-sky-300">Why Litecoin</a>
            <a href="#get-started" className="transition hover:text-sky-300">Get Started</a>
            <a href="#merchant-solutions" className="transition hover:text-sky-300">Merchants</a>
            <a href="#learn" className="transition hover:text-sky-300">Guides</a>
            <a href="#maps" className="transition hover:text-sky-300">Maps</a>
            <a href="#tools" className="transition hover:text-sky-300">Tools</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_left,rgba(148,163,184,0.12),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                {litecoinIcon}
                <span>Built for Litecoin merchants and learners</span>
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                Accept Litecoin. Learn Litecoin. Use Litecoin in the real world.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                LearnLitecoin helps businesses accept Litecoin and helps people understand how to buy, store, send, receive, and use it with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#merchant-solutions" className="rounded-2xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
                  Start Accepting Litecoin
                </a>
                <a href="#learn" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-sky-400/50 hover:text-sky-300">
                  Learn How Litecoin Works
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {['Fast payments', 'Low fees', 'Litecoin-focused education'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[28px] border border-sky-400/20 bg-white/5 p-6 shadow-2xl shadow-sky-950/40">
                <div className="mb-4 flex items-center gap-3">
                  {litecoinIcon}
                  <div>
                    <div className="font-semibold">Litecoin payment flow</div>
                    <div className="text-sm text-slate-400">Customer scans. Merchant gets paid.</div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {['Open Wallet', 'Scan QR Code', 'Payment Sent'].map((step, index) => (
                    <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-sky-300">Step {index + 1}</div>
                      <div className="font-semibold">{step}</div>
                      <div className="mt-2 text-sm text-slate-400">Litecoin-first flow with clean, simple checkout.</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Trusted path</div>
                <div className="mt-2 text-2xl font-bold">Wallets, guides, merchant setup, and maps in one place.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-litecoin" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Why Litecoin</p>
            <h2 className="mt-3 text-4xl font-black">Fast, low-cost, and built for payments.</h2>
            <p className="mt-4 text-lg text-slate-300">Explain Litecoin in a simple, accurate way for both merchants and beginners.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Fast Payments', 'Litecoin is designed for quick confirmations that work well for real-world payments.'],
              ['Low Fees', 'Keep more of every transaction with low network fees.'],
              ['Proven Network', 'A long-running payment network with a strong history and recognizable brand.'],
              ['Global Access', 'Use Litecoin across borders without waiting on bank hours.'],
              ['Optional Privacy', 'MWEB support can be explained clearly in your educational content.'],
              ['Real Utility', 'Wallets, merchants, guides, and maps all support real-world use.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{litecoinIcon}</div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="get-started" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Get Started</p>
              <h2 className="mt-3 text-4xl font-black">Set up your wallet and start using Litecoin.</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {[
                ['1. Create a Wallet', 'Use Nexus Wallet or Cake Wallet to store, send, and receive Litecoin.'],
                ['2. Buy Litecoin', 'Use wallet buying options or exchange routes you explain in your guides.'],
                ['3. Send & Receive', 'Scan a QR code or paste an address to move Litecoin with confidence.'],
                ['4. Accept Litecoin', 'Business owners can start with BitPay or work directly with LearnLitecoin.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                  <div className="mb-4">{litecoinIcon}</div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="merchant-solutions" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Merchant Solutions</p>
              <h2 className="mt-3 text-4xl font-black">Accept Litecoin for your business.</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">Show merchants the money, simplicity, and payment benefits without overloading them with jargon.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {merchantBenefits.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-3">{litecoinIcon}</div>
                    <div className="font-semibold">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-sky-400/20 bg-gradient-to-b from-sky-500/10 to-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-sky-300">Done-for-you setup</div>
              <h3 className="mt-3 text-3xl font-black">Work with LearnLitecoin</h3>
              <p className="mt-4 text-slate-300">Guide businesses through wallet setup, payment processor setup, QR payment flow, and merchant onboarding.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                {['Wallet setup', 'BitPay setup', 'QR payment setup', 'Merchant onboarding'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#bitpay-affiliate-link" className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-slate-950">
                  Start with BitPay
                </a>
                <a href="#contact" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white">
                  Work With LearnLitecoin
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="learn" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Learn</p>
                <h2 className="mt-3 text-4xl font-black">Guides that teach Litecoin step by step.</h2>
                <p className="mt-4 text-lg text-slate-300">Use written tutorials, video embeds, wallet walkthroughs, and merchant setup guides.</p>
              </div>
              <a href="#all-guides" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white">
                View All Guides
              </a>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {guides.map((guide) => (
                <div key={guide.title} className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                  <div className="mb-4">{litecoinIcon}</div>
                  <h3 className="text-xl font-bold">{guide.title}</h3>
                  <p className="mt-3 text-slate-300">{guide.text}</p>
                  <a href="#guide" className="mt-6 inline-flex text-sm font-semibold text-sky-300">
                    Open guide →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="maps" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Maps</p>
            <h2 className="mt-3 text-4xl font-black">Find ATMs, merchants, and places to spend Litecoin.</h2>
            <p className="mt-4 text-lg text-slate-300">Map pages can start with outbound or embedded data sources, then grow into your own verified network.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {mapCards.map((card) => (
              <div key={card.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{litecoinIcon}</div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="mt-3 text-slate-300">{card.text}</p>
                <a href={card.href} className="mt-6 inline-flex rounded-2xl border border-sky-400/25 px-4 py-2 font-semibold text-sky-300">
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Tools</p>
              <h2 className="mt-3 text-4xl font-black">Trusted Litecoin tools, organized clearly.</h2>
              <p className="mt-4 text-lg text-slate-300">Wallets, buying paths, spending options, business tools, and future MWEB-focused guides.</p>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {walletTools.map((tool) => (
                <div key={tool.name} className="rounded-[28px] border border-white/10 bg-slate-950/60 p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {litecoinIcon}
                      <div>
                        <h3 className="text-2xl font-bold">{tool.name}</h3>
                        <div className="text-sm text-slate-400">Wallet tool</div>
                      </div>
                    </div>
                    <div className="rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                      Affiliate Link
                    </div>
                  </div>
                  <p className="text-slate-300">{tool.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={tool.affiliate} className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-slate-950">
                      {tool.cta}
                    </a>
                    <a href="#guide" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white">
                      {tool.secondary}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {tools.map((group) => (
                <div key={group.section} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-4">{litecoinIcon}</div>
                  <h3 className="text-xl font-bold">{group.section}</h3>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="border-b border-white/5 pb-3 last:border-none last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[36px] border border-sky-400/20 bg-gradient-to-r from-sky-500/10 via-slate-900 to-slate-900 p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Ready to build?</p>
              <h2 className="mt-3 text-4xl font-black">Turn LearnLitecoin into the go-to place for Litecoin education and merchant onboarding.</h2>
              <p className="mt-4 text-lg text-slate-300">Replace the placeholder links with your real affiliate URLs, merchant contact flow, and live map integrations.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#nexus-affiliate-link" className="rounded-2xl bg-sky-500 px-6 py-3 font-semibold text-slate-950">
                  Add Affiliate Links
                </a>
                <a href="#merchant-solutions" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white">
                  Launch Merchant Funnel
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
