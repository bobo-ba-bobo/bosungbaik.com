# Writings (`/writings`)

## 에세이 목록

1. Moat in GPT-N Era
2. Trillion Dollar Korean Startup
3. NASDAQ vs. KOSPI
4. VC vs. PE
5. Infrastructure
6. Value-driven Investing

## Moat in GPT-N Era

```
In May 2023, an internal memo from a Google researcher leaked with a title that people in tech still quote: "We have no moat, and neither does OpenAI." The argument itself was narrow. Open-source models were catching up with the big labs faster than anyone expected. But the line stuck because it named a fear that now applies to almost every company, not just the labs. Every time a new model ships, some group of products turns into a feature overnight. I've started calling this the GPT-N question. Whatever you're building, assume GPT-N+1 comes out next year. Does your business get stronger, or does it disappear? I ask some version of this about almost every company I look at, and I've realized the answer depends less on the product and more on what kind of moat the company is standing on.
```

```
A moat is simply the reason a competitor with more money can't take your customers. The framework I find most useful is Hamilton Helmer's 7 Powers: scale economies, network economies, counter-positioning, switching costs, branding, cornered resources, and process power. Every durable business has at least one. What AI does is change the price of the inputs behind each of them. Some moats were really a wall made of expensive skilled labor, and AI makes that labor cheap. Others are made of things AI can't produce: other people, permission, physical assets, and legitimacy. Those don't just survive. They get stronger, because everything around them gets cheaper.
```

```
Start with what's gone. The first moat to fall is the one founders used to be proudest of: "it's hard to build." For most of software history, a complex product needed dozens of engineers and years of work, and that cost alone kept competitors out. That wall is mostly gone. A small team with coding agents can reach feature parity with a mid-sized SaaS product in months, sometimes weeks. I see it in the deals that come to us: two or three founders arrive with a working product that would have needed a Series A-sized team five years ago. When everyone can build, being first to build buys you a few months at most. The same goes for headcount. Having 200 engineers used to signal strength. Now it can be a cost structure that a ten-person team undercuts on price.
```

```
The second moat to fall is packaged knowledge: information that used to be locked inside experts or scattered across the internet, organized and sold. Chegg is the clearest case. Its business was answers to homework questions, built on a large library of expert-written solutions. In May 2023, its CEO said on an earnings call that ChatGPT was starting to hurt new customer growth, and the stock fell 48% in a single day. It never recovered. Stack Overflow watched the number of new questions fall sharply as developers asked models instead. Translation agencies, basic legal research, entry-level market reports, and much of content marketing all sold the same thing: public information, organized by trained people. Once a model has read everything that is public, organizing public information stops being scarce.
```

```
The third moat to weaken is one I didn't expect: switching costs. Classic SaaS lock-in came from the pain of moving. Your data sits in one format, your team knows one interface, your workflows are built around one tool, and migrating means a consulting project. Agents are very good at exactly that kind of work: reading one schema, mapping it to another, rewriting the integrations. And when an agent is the one using the software, nobody needs to be retrained, because the user no longer cares about the interface. The interface was a big part of the lock-in. This is also why seat-based pricing is under pressure. If one agent does the work of ten people, a company that buys seats ends up buying fewer of them. On February 3, 2026, Anthropic released a legal plugin for its Claude Cowork agent that handles contract review, NDA triage, and compliance tracking. That day, Thomson Reuters fell 16%, Wolters Kluwer 13%, and RELX 14%, its steepest one-day drop since 1988. You can argue the market overreacted, and many in legal tech did. But what it was pricing is real: when the work moves to agents, the software the work used to happen in becomes easier to replace.
```

```
The fourth is brand as a shortcut. A lot of consumer brands are really a way for a busy person to skip comparing options. You buy the name you recognize because researching twelve alternatives isn't worth your evening. When an agent does the shopping, comparing twelve options costs nothing. It reads the specs, the reviews, the prices, and the return policies, and it doesn't feel familiarity. Brands that stood for "good enough, and I don't have to think" will lose ground. Brands that mean something to the person who owns the product, the kind people wear, show, or identify with, won't. An agent can't make you feel anything about a bag.
```

```
So what's left? The moats that remain share one feature: they rest on something a model can't produce by getting smarter. I count five.
```

```
The first is exclusive data, with an important correction. "Data moat" has been overused for a decade, and most of what people called a data moat was never one. Anything scraped, public, or easily licensed is already in the training set of every frontier model, or will be soon. Public data now even has a going rate: Reddit reportedly licenses its content to Google for about $60 million a year. Data on the open web is not a moat. It's a commodity with a price. The data that still matters is data that exists only because someone was allowed to collect it. Healthcare is the obvious case. Epic, the largest electronic health record company in the US, pools de-identified records on more than 300 million patients in its Cosmos dataset. No lab can scrape that. It is protected by law and by contracts with hospitals, and it grows every time a patient visits a clinic that runs Epic. Finance works the same way. Korea's MyData system, which launched in financial services in 2022, lets individuals move their data between institutions, but only with their consent and only through licensed operators. The moat here is not the data itself. It is the permission to hold and use it. Consent has to be earned from people one at a time, and a better model does nothing to speed that up.
```

```
There's a second kind of exclusive data that I find even more interesting: data that only exists because your product is being used. Every time a user accepts, edits, or rejects an AI output inside your product, you learn something about the task that nobody outside can see. Cursor, the AI code editor, started as what many people dismissed as a wrapper on other companies' models. But it collects a constant stream of signals about which suggestions developers actually keep, and it used that to train its own models for tasks like autocomplete. It crossed $1 billion in annualized revenue in November 2025, roughly three years after it started, and reportedly doubled that within a few months. The model underneath was borrowed. The feedback loop was not. This is the version of the data moat I look for now: not a pile you already own, but a loop that gets better the more you're used and is hard to see from outside.
```

```
The second remaining moat is the network effect, and AI makes the good ones stronger. Meta is the best example. More than three billion people use at least one of its apps every day. AI makes it trivial to clone Instagram's features. It does nothing to move your friends. If anything, generative AI has made Meta's ad business better, because cheaper creative and sharper targeting raise the return on an audience it already owns. KakaoTalk in Korea is the same story. A competitor could copy every feature in a weekend, and nobody would switch, because everyone they need to message is already there. The caveat is that not every network is equally safe. Marketplaces whose network existed mainly to help people find each other, such as some freelance and matching platforms, are more exposed, because an agent can search and match across many platforms at once. A network holds when the value is the other people themselves, not the search through them.
```

```
The third is regulation and politics, which I think is the most underrated moat of this era. When anyone can build software, what decides who sells is often not the product but who is allowed to sell. Palantir spent years earning US government security accreditations up to the levels needed to handle classified data. No startup gets those in a quarter, however good its model is. In Korea, the cloud security certification for the public sector, CSAP, kept global cloud providers out of most government work for years and gave Naver Cloud, KT, and NHN a protected market. Korean financial institutions have long been required to keep their internal networks separated from the internet, which effectively kept out most SaaS and generative AI tools. In August 2024, the Financial Services Commission published a roadmap to ease those rules, starting with sandbox exemptions for generative AI and a wider list of allowed SaaS. Each step of that easing changes who can compete for a bank's business.
```

```
The same logic now applies to AI models themselves. Governments increasingly want sovereign AI: models and data centers under domestic control. In August 2025, Korea selected five teams to build national foundation models: LG AI Research, SK Telecom, Upstage, Naver Cloud, and NC AI. In January 2026, the government cut Naver Cloud and NC AI after the first evaluation. Naver scored well with users and experts but failed the originality test, because parts of its model relied on components it hadn't trained itself. That detail says everything about this kind of moat. The winner is judged not only on capability but on independence, which is a political criterion, not a technical one. A public agency may end up required, or strongly encouraged, to use the survivors whether or not they beat the global frontier. Regulatory moats come with one warning, though: they are rented, not owned. The government that grants one can take it back, and the gradual loosening of CSAP and network separation shows that it does. I treat these moats as real, but with an expiry date I can't see.
```

```
The fourth is the physical world. AI gets cheaper at the speed of software; atoms don't. SK Hynix's lead in HBM and TSMC's yields come from decades of process knowledge embedded in fabs, equipment, and people who have seen every failure mode. Energy, logistics, robotics, and clinical trials all require building things, getting permits, and waiting. Here AI mostly helps the incumbent. It makes an existing factory more efficient, but it doesn't hand a competitor a factory. Even at the top of the model stack, the moat is shifting from algorithms to capital and power. When OpenAI, SoftBank, and Oracle announced the Stargate project in January 2025, the headline number was up to $500 billion of AI infrastructure. Ideas spread between labs within months. Gigawatts of power don't.
```

```
The fifth is trust and accountability. When anyone can generate an answer, the scarce thing is someone who will stand behind it. A doctor signs the diagnosis. An auditor signs the financial statements. A law firm carries malpractice liability. Anthropic's own legal plugin comes with the note that its output must be reviewed by a licensed attorney. A model can draft all of it, but it can't be sued, lose a license, or go to jail, and customers in high-stakes fields pay precisely for someone who can. This is why I think the most defensible AI companies in regulated industries will look less like software vendors and more like firms that take responsibility for outcomes, using AI internally to do the work at a fraction of the old cost.
```

```
One more power deserves a mention, because it is how startups beat incumbents in this cycle: counter-positioning. Helmer defines it as a new business model that the incumbent can't copy without damaging its existing business. A SaaS company that charges per seat can't easily switch to charging per result, because its revenue would shrink along with its customers' headcount. A startup like Sierra, which charges for customer-service conversations its AI agents actually resolve, can start there on day one. The incumbent sees the threat and still can't respond, because responding means shrinking. It's not a permanent moat. It's a window. But windows are exactly what startups need.
```

```
So when I look at a company now, I ask three questions. First, if the next model is twice as good, does this company get better or get replaced? Companies that sell the model's output as their product get replaced. Companies that use the model as a cheaper input to deliver something else get better. Second, what does this company have that can't be bought with more compute: a consent, a license, a network of real people, a physical asset, a signature someone is liable for? Third, does that advantage deepen with every customer, or was it a one-time head start?
```

```
The irony of the GPT-N era is that the smarter the models get, the more value moves to things that have nothing to do with intelligence. When intelligence is cheap, what stays scarce is permission, people, atoms, and accountability. For Korean startups, that is both a warning and an opening. Many of these moats are local by nature: domestic regulation, consent under Korean law, networks of Korean users. A Korean team can own them at home more easily than any global lab can. The harder question is whether we can build the kind that travels. The models will keep getting better. What matters for every founder, and for me as an investor, is what we own that they can't reach.
```

---

## Trillion Dollar Korean Startup

```
In May 2026, something happened that, a year earlier, I would have told you was still a decade away. Samsung Electronics became the first Korean company in history to cross a one-trillion-dollar market capitalization. Three weeks later, SK Hynix did the same. For most of my life, the trillion-dollar club had an almost exclusively American address. Even now, only four countries on earth are home to a company worth a trillion dollars: the United States, which has the overwhelming majority; Saudi Arabia, through Aramco; Taiwan, through TSMC; and Korea, which suddenly has two. No Chinese company sits in that club. No European one does either. By that measure, Korea has more trillion-dollar companies than any nation except the United States. We punch absurdly above our weight. And yet I can't shake the feeling that we arrived the wrong way.
```

```
Because neither Samsung Electronics nor SK Hynix is a startup. Samsung Electronics was founded in 1969. SK Hynix's lineage runs back to the early 1980s. They crossed the trillion-dollar line not by inventing a new industry but by being the last two companies standing in one of the oldest, most brutal commodity businesses in technology: memory. The AI boom needs staggering quantities of high-bandwidth memory, and the two firms that spent thirty years surviving the savage boom-and-bust of the DRAM cycle happened to own the supply. SK Hynix was reportedly providing on the order of 70% of the HBM going into Nvidia's AI accelerators in early 2025; Samsung has been the world's largest memory chipmaker since 1992 to 1993. This is a genuine triumph. But it is a triumph of accumulated manufacturing depth, not of disruption. We didn't build something new. We outlasted everyone in something old.
```

```
That distinction matters because it is the entire story of how Korea got rich. The "Miracle on the Han River" was export-led industrialization, marched up the value chain on purpose: textiles in the 1960s, then steel and ships through the heavy-and-chemical drive that Park Chung-hee declared in 1973, then electronics and automobiles, and finally semiconductors. We are, structurally, a manufacturing economy. Manufacturing is roughly 24% of our GDP, about double the American share, and we sell that output to the world. Exports were around 44% of GDP in 2024, roughly twice the ratio of Japan or China and about four times that of the United States. We make things, and we live off selling them abroad.
```

```
Here is a subtlety worth getting right, because it changes what kind of bet Korea should make next. We are not mainly a maker of finished consumer goods. Roughly two-thirds of our exports, about 68% in 2024, are intermediate goods, the highest share of any major economy. We don't sell the world its phones so much as the memory inside them; not its cars so much as the batteries and displays. In 2025 our exports hit a record of about $710 billion, and semiconductors alone were around $173 billion of that, roughly a quarter of everything we ship and more than double automobiles. Korea is the world's pick-and-shovel store. That is not an insult. Selling picks and shovels during a gold rush is the finest business there is, and it is exactly why the AI gold rush has been so kind to us.
```

```
Which brings me to AI, and to the thing I keep turning over in my head. AI is two things at once. It is infrastructure, the chips and memory and data centers and power that the models physically run on. And it is a tool, the software and applications built on top of all that. Korea is winning, spectacularly, at the infrastructure layer. That is the trillion-dollar story. But we have almost never won at the layer above. We have, with a few exceptions, never built a global software company at scale.
```

```
I want to be fair to the exceptions, because they're instructive. Games are the glaring one. Krafton, maker of PUBG, earns something like 95% of its revenue overseas; Nexon is large enough to be listed in Tokyo. Korean game exports run into the billions and are our single biggest cultural export. But step outside games and the list thins fast. Naver and Kakao dominate at home and almost nowhere else. KakaoTalk has tens of millions of users, and something like 96 to 97% of them are in Korea. Line, the closest thing we ever built to a global consumer-software hit, is now run and controlled through a Japanese holding company. Naver Webtoon listed on Nasdaq in 2024 and has since lost roughly half its value. Even Coupang, our proudest startup, went public on the NYSE in 2021 at around an $84 billion valuation and trades at a fraction of that today. We can build software the world uses. We have rarely built software the world pays a premium for.
```

```
So when people ask whether Korea betting everything on AI is wise, my honest answer is: it depends which half of AI they mean. Doubling down on the infrastructure layer, on HBM and advanced packaging and the memory and power that AI literally runs on, is not really a gamble. It's the same picks-and-shovels logic that built Samsung and SK Hynix, pointed at the largest demand wave in the history of computing. We should press that advantage without apology. The riskier and, to me, more interesting bet is the other half: that AI as a tool might finally collapse the cost of building global software far enough that a small Korean team can do what no large Korean company ever managed. The thing that always strangled Korean software abroad was the cost of building and localizing for markets we didn't understand. If AI tooling makes a five-person team in Seoul as productive as a hundred-person one used to be, the curse that kept our software at home might break for the first time.
```

```
But I don't think our real problem was ever a shortage of beginnings. This is where I'd push back on the usual complaint. Korea has maybe 13 unicorns, perhaps 18 by a looser count, against more than 700 in the United States and over 150 in China. People see that gap and conclude we need more startups. I think that's the wrong diagnosis. We are actually fine at birth. Seed funding has grown, and TIPS, the government's flagship program, has backed something like 4,400 companies since 2013. What we are genuinely bad at is the middle. Korea minted ten new unicorns in 2022 and zero in 2023. Late-stage funding collapsed by around 82% in 2024, from roughly $2.8 billion to $0.5 billion, even as seed funding rose. In early 2026 the KDI found that Korea's loss of business dynamism is steepest not in the founding years but in the scale-up years, roughly ages eight to nineteen. We start companies and then strand them.
```

```
Government support, in my view, has quietly reinforced exactly this shape. The instinct has been to spread small subsidies as widely as possible. By 2023 there were over 1,600 separate SME-support programs spread across eighteen ministries, a sprawl the OECD politely told us to consolidate. It is support optimized for the photograph of a ribbon-cutting, not the grind of scaling. The K-Unicorn Project set out in 2020 to manufacture twenty unicorns and counts eight, while the national total has barely moved. We are very good at helping a company be born and nearly indifferent to whether it grows up.
```

```
And growth is precisely where the KOSPI gives us away. Samsung Electronics alone is around 22% of the entire index; the top five chaebol groups are more than half of it. The newest genuine entrants to the top tier, companies like Celltrion and, before them, Naver and Kakao, are the rare exceptions that prove how sealed the top usually is. Our market trades at a structural discount, the famous "Korea discount." In early 2025 the KOSPI was valued at roughly nine times earnings, against about thirteen for emerging markets and twenty-one for developed ones, in no small part because investors don't trust that value created inside a chaebol actually reaches ordinary shareholders. And after listing, around 79% of recent Kosdaq IPOs missed even their own first-year forecasts. The market doesn't believe our companies will scale, and too often it is proven right.
```

```
So here is what I'd actually argue. If we want a trillion-dollar Korean startup, and not simply a trillion-dollar Korean chaebol division, which we now have two of, we have to stop fixating on the number of startups and fix the three things that kill them in the middle. First, concentrate capital where it actually runs out. Redirect money from the fragmented spray of seed subsidies toward serious scale-up vehicles that can write the large, patient checks our late-stage cliff currently can't. Second, own the infrastructure layer of AI and use the tool layer to finally break the software curse: treat HBM, advanced packaging, and power as the durable moat they are, and treat games and content not as a fluke but as the working template for how a Korean software product reaches the world. Third, open the top of the market. Real governance reform to close the Korea discount, so that a company that flourishes is rewarded for flourishing, and a newcomer can credibly aim at the top of the index instead of accepting that the top is permanently spoken for.
```

```
The semiconductor era handed Korea its first two trillion-dollar companies, and they are monuments to everything we do best: patience, manufacturing depth, the willingness to survive a cycle that breaks everyone else. But they are monuments to the past as much as the present. The trillion-dollar Korean startup, the one that doesn't exist yet, the one that builds a new industry rather than dominating an old one, is the company I'm actually looking for. We've now proven the ceiling is real and that a Korean company can reach it. The only question left is whether the next one to get there will be a name we already know, or one we haven't heard yet. I'm betting my career on the latter.
```

## NASDAQ vs. KOSPI

```
A few months ago, I was doing routine research at the office when I found myself staring at two lists side by side: the largest companies by market capitalization on the NASDAQ in 2010, and the same list today. Then I pulled up the KOSPI equivalent. Something clicked that I hadn't been able to articulate before, a feeling I'd had about Korean economic growth, about why I ended up in venture capital, about what the next twenty years might look like.
```

```
The most fundamental economic argument I can make is this: when a new company builds an entirely new industry, it doesn't merely redistribute existing wealth; it creates new wealth. When Amazon built cloud computing at scale, it monetized infrastructure in a way that had never existed before. When Google built the search and advertising layer of the internet, it turned attention into a commodity. These weren't just big companies getting bigger. They were new economic activities that hadn't contributed to GDP before, and suddenly did: hundreds of thousands of new jobs, new tax receipts, new adjacent industries. The simplest way I know to understand why some countries get richer faster than others is to ask: are new companies building new industries within their borders?
```

```
The NASDAQ's top five companies in 2010 were Apple, Microsoft, Google, Oracle, and Intel. Good companies, all of them. Apple was riding the early iPhone wave. Microsoft was still the operating system of the world. Google had already become an essential utility. Oracle and Intel had defined the infrastructure of the enterprise internet era.
```

```
Look at 2025, though. Apple and Microsoft are still there. But Nvidia, a company worth roughly $8 to $10 billion in 2010, is now worth over $4 trillion, making it one of the most valuable companies in the history of public markets. Meta didn't even exist as a public company in 2010; it went public in 2012 and has since grown past $1.5 trillion. Amazon climbed from around $80 billion to nearly $2 trillion. Oracle and Intel, once pillars of the era, have largely receded from the top tier. The NASDAQ doesn't just grow. It replaces. The companies at the top in 2025 represent industries (AI infrastructure, social media, cloud computing) that either barely existed or didn't exist at all in 2010.
```

```
This isn't a coincidence. US GDP per capita was around $48,000 in 2010. By 2024, it had grown to over $85,000, nearly doubling in fifteen years. That's not just productivity gains from existing industries squeezing out more efficiency. A meaningful portion of that growth is entirely new economic activity: AI chips, cloud services, digital advertising ecosystems, streaming platforms. Whole new pools of GDP that didn't exist before. I'm not claiming the NASDAQ alone explains American prosperity. But I think the conditions that allow a company like Nvidia to go from gaming graphics cards to the backbone of global AI infrastructure, in one company's lifetime, are the same conditions that allow economies to grow faster.
```

```
South Korea's GDP per capita in 2010 was around $22,000. By 2024, it had grown to around $36,000, about a 63% increase over a period when the US grew nearly 80%. Korea has grown, meaningfully. But the growth is becoming harder. The industries driving Korea's wealth (semiconductors, automotive, petrochemicals, heavy manufacturing) are industries the country has already spent fifty years optimizing. The chaebols do these things exceptionally well. But optimizing mature industries incrementally is not the same as creating entirely new ones, and the two translate very differently into per capita growth over time.
```

```
I think the pattern is clear enough to be worth saying plainly: economies where new companies can rise to the very top tend to grow faster. Not because stock rankings directly equal GDP, but because the conditions that make it possible for a GPU startup to become the world's most valuable company (accessible capital, tolerance for failure, market openness) are the same conditions that allow entirely new industries to form. The NASDAQ's dynamism is both evidence of and a contributor to America's continued economic growth. Korea's KOSPI looks the way it does because the structural conditions (concentrated capital in established conglomerates, cultural attitudes toward failure, limited access to early-stage funding) make it harder for new companies to reach the top.
```

```
I'm 25, and I work in Korean venture capital. When I think about what Korea's economy looks like in twenty years, I keep coming back to this question: can new companies eventually challenge the chaebol dominance? I don't mean that Samsung and Hyundai are somehow the villains here. They've built real, important things for this country. But an economy where the same families occupy the same positions at the top for fifty consecutive years is an economy that is structuring itself around the past. The next surge in Korean GDP won't come from Samsung becoming marginally more profitable. It'll come from companies we haven't heard of yet building industries that don't yet exist.
```

```
That's ultimately why I'm in venture investing. When I back an early-stage Korean startup, I'm placing a small bet on the possibility that the KOSPI's top ten can look genuinely different in twenty years. Maybe that's a naive framing for what is, at the end of the day, a portfolio management job. But I don't think it's wrong. If the lesson from the NASDAQ is that new companies from new industries are how nations build new wealth, then the people who fund those companies at the earliest stages are doing something that matters beyond the fund's IRR. Korea needs its version of Nvidia, a company that seems niche today and becomes structurally indispensable to the global economy in ways we can barely articulate yet. I'd like to be the kind of investor who recognizes it early enough to matter.
```

```
The KOSPI and the NASDAQ are both just lists of public companies ranked by market value. But the way those lists do or don't change over time tells you something about an economy's relationship with the future. Right now, the NASDAQ changes dramatically; the KOSPI mostly doesn't. I hope that changes. And I think venture capital, done well, early, and with conviction, is part of how it does.
```

---

## VC vs. PE

```
Right after finishing my military service, I hadn't yet seriously considered my career path. One day, almost by accident, I joined a business club (SBA) and had a chance to meet a senior who had just finished his six-year journey at BCG. When he asked me what career I hoped for, I boldly answered, "I don't know yet." He paused for a moment, looked closely at me, and said, "You have the face of a VC." I had no idea what that meant, but intrigued, I started researching it thoroughly. That's how I first got fascinated by venture capital, wondering how I might find a way to work in this appealing field.
```

```
The venture capital scene in the United States, arguably the birthplace of VC investing, has clear, standardized paths. Roughly half are former Wall Street professionals, and the other half are founders-turned-investors. Given my non-technical, humanities-based background, starting a company seemed out of reach. Thus, I chose finance as my route into VC, landing my first internship at a private equity-like firm, Equis Development. Naturally, I became deeply interested in private equity as well, frequently visiting financial news sites like The Bell. However, I soon realized that the skill set required for effective venture investing is quite distinct from what makes an effective investment analyst in IB or PE. After all, forecasting financial statements doesn't exactly align with what early-stage startups need.
```

```
Private equity typically invests in companies already generating profits, using valuation discounts, leveraged buyouts, and operational improvements post-investment. PE investments are fundamentally driven by current financial performance and stability, making them essentially value-based.
```

```
In contrast, venture capital bets on future potential. The startup might currently have zero customers, zero revenue, or perhaps even no fully formed team. However, if there's a clearly defined problem, a fresh approach to solving it, and a deeply committed founder, a VC can still invest. To me, the essence of venture capital lies precisely in transforming something previously seen as unprofitable into something valuable. It's not simply about risk-taking; it's about finding meaning in the vision and logic that justify that risk.
```

```
But lately, I feel that the VC industry is becoming increasingly similar to private equity.
```

```
In recent venture markets, VCs are increasingly emphasizing returns, proven business models, and predictable follow-on financing. Several factors contribute to this trend, but I mainly see three:
```

```
First, the inflation of fund size (AUM inflation). Just ten years ago, a 10 billion won fund (~$10 million) was considered large. Today, venture funds commonly manage hundreds of billions or even over a trillion won. With larger funds, ticket sizes inevitably grow, pushing VCs toward investing in more proven, later-stage companies with clearer follow-on funding prospects. Fund size inflation doesn't merely shift investment targets; it transforms how VC firms operate entirely. Larger funds require greater liquidity and more predictable exit strategies, prompting firms like Lightspeed Venture Partners to register as RIAs (Registered Investment Advisers), adopting secondary investments, continuation funds, and roll-up strategies. These methods are more characteristic of PE than traditional venture capital.
```

```
Second, there's a trend of deal sourcing becoming increasingly financialized. As professionals from IB and PE backgrounds enter VC, investment analysis and data-driven evaluations intensify. While this trend has positives, excessive reliance on quantitative analysis can sideline fundamental aspects like founder insights or unique problem-solving approaches. With RIA registration enabling investments across a wider spectrum, including secondary market transactions and structured asset deals, narrative-driven early-stage investments inevitably diminish.
```

```
Lastly, there's increased active management toward exit strategies. Many VCs now follow a clear path from equity investment to operational involvement, then guiding subsequent financing rounds toward IPO or acquisition. Though VCs might not explicitly take control, they are increasingly influencing founders' decisions and shaping exit strategies, sometimes directly intervening in operations. For instance, General Catalyst, a prominent U.S. VC, recently acquired Ohio-based hospital chain Summa Health, actively restructuring its operational model. Though termed "mission-driven investing," this resembles PE's hands-on management approach.
```

```
I believe venture capitalists should be among the first responders to problems the world throws into the open. Yet, as the market grows, VCs are increasingly using automatic filters based on revenue, total addressable market (TAM), or daily active users (DAU). Consequently, startups must now speak the language of PE to attract investment, diluting VC's original purpose. While adopting PE strategies like Lightspeed or General Catalyst might enhance exit opportunities and strategic flexibility, it simultaneously reduces investment in teams that haven't yet begun, founders without products, and fundamentally important but seemingly irrational ideas. Yet, I believe VC should always play the role of first supporter for such seemingly irrational market opportunities.
```

```
PE identifies and refines "already good businesses." VC, however, discovers businesses before they even become businesses. VC doesn't analyze whether something is already successful; it imagines, constructs, and nurtures future potential. In that sense, VC isn't just a supplier of capital—it's a rare mechanism capable of pointing toward a market direction before it even emerges. This is why I'm concerned about venture funds gradually adopting PE characteristics. Although I understand the pressure for stable returns, I worry this trend dilutes VC's unique role. Thus, I wish for VC to remain authentically itself in three key areas:
```

```
First, I hope fund sizes don't grow excessively. Larger funds naturally focus on larger ticket sizes, decreasing their willingness or ability to invest in truly early-stage companies.
```

```
Second, VCs should not pursue control of the companies they invest in. Investors increasingly acquire large stakes or even dominate boards, shifting power away from founders. Prominent VC firms like Founders Fund explicitly avoid managerial interference, acknowledging that the strongest teams don't thrive under such pressures.
```

```
Third, I want to reconsider the reliance on the criterion of predictable follow-on rounds. Excessive emphasis on immediate revenues or assured subsequent funding inevitably filters out genuine early-stage ventures with groundbreaking yet unproven ideas.
```

```
If I ever run my own fund, I hope to become the kind of investor who responds with capital even to untested, unconventional ideas—as long as their possibility genuinely convinces me. My investment philosophy will stand on three core principles:
```

```
1. Courage to invest without existing customers or immediate revenue. Truly early-stage investors should back teams based solely on their problem definition, insight, and commitment.
```

```
2. Reducing obsession with immediate market size predictions. Rather than precise current TAM calculations, I prefer understanding why a market should exist, why existing solutions fail, and why a team's insights matter.
```

```
3. Smaller AUM and higher density. Managing smaller funds allows deeper involvement with each portfolio company, nurturing genuine partnerships rather than mere financial relationships.
```

```
Yes, LPs expect returns. But more critical than simply the size of returns is how those returns are generated—the quality and repeatability of investment success. LPs increasingly seek venture funds for their unique potential for outsized, asymmetric returns. Venture capital inherently offers a "right-tail upside" that PE-style structures typically can't match. Prominent early-stage funds like First Round Capital, Uncork Capital, or Initialized manage relatively small AUMs and consistently deliver exceptional returns. These funds maintain a strong identity as true early-stage investors, and their LPs fully understand and support that vision.
```

```
Startups inherently take risks, and when that risk stems not merely from uncertainty about growth but because "no one has tried this before," I believe those are precisely the risks we must support. True VC shouldn't merely pursue predictable profits but should channel capital toward possibilities that could reshape entire markets.
```

```
VC is one of the few capital forms capable of responding boldly to questions the world hasn't yet answered. I hope VC reclaims its original spirit—as investors who extend a helping hand precisely when founders feel most alone. Our role is to ensure capital flows not only into ventures that clearly promise financial returns but into ideas and solutions that fundamentally need to succeed, even if their profitability initially appears uncertain. I believe that's how VC re-energizes the broader social engine: by enabling courage, promoting truly transformative ideas, and never forgetting that the world still needs genuine ventures.
```

---

## Infrastructure

```
Throughout human history, resources have been used for two main purposes: survival and sustainability. To survive each day, we need bread on our tables, homes to live in, and clothes to keep us warm. These basic needs drove humanity to evolve. For example, hunting turned into livestock breeding, and gathering developed into organized farming. Farms grew larger, reservoirs were constructed, and harvested crops were stored to sustain populations over longer periods. Small communities eventually formed towns, where marketplaces became central hubs for communication and trade. People built roads and railways to transport goods more efficiently. From ancient civilizations to modern societies, we've always invested heavily in infrastructure to create a better and more sustainable life.
```

```
At times, we dismantle old infrastructure to make room for improvements. However, today's infrastructure isn't always built with sustainability as its core goal. When people say third-world countries lack infrastructure, they're not just referring to farms or housing. They're pointing out the absence of hospitals for the sick, schools for education, and reliable transportation systems. When emerging economies announce plans to build new cities, it's often less about merely accommodating citizens and more about attracting businesses, entertainment venues, and sports facilities. Infrastructure today often seems designed to attract capital and economic activity as much as to improve the quality of life.
```

```
But what about global warming, polluted oceans, and the urgent need for clean energy to support our increasingly technology-driven world? There's already a wealth of information outlining the existential threats to human survival and our planet's health. Infrastructure intended solely to improve living standards must come second to securing basic human survival. Ironically, despite universal awareness of these threats, we still see insufficient capital flowing into critical areas like renewable energy, biodegradable materials, or innovative vaccines against new viruses. Instead, we continue investing in and operating systems that exacerbate these very threats. Isn't that ironic?
```

```
Historically, clean energy and welfare-focused infrastructure, such as schools and public transportation, have only gained significant momentum when governments offered substantial subsidies. Without generous subsidies, private companies have often avoided investing in these vital areas. Relying on government subsidies is not necessarily problematic, as public funding is crucial to launching projects that might not initially generate substantial profits.
```

```
However, it's equally important to focus on making necessary infrastructure economically attractive for private investors. Subsidies alone aren't enough to ensure long-term, sustainable development. We must develop clear economic frameworks and business models so projects related to clean energy, healthcare, education, and public transportation become profitable ventures in their own right. When infrastructure is profitable independently, it naturally attracts more private capital, greatly accelerating progress.
```

```
Traditionally, the financial sector's goal has been to find immediate profit opportunities and exploit them. Banks, investment funds, and private investors have typically focused on efficiency, arbitrage, and short-term returns. However, the financial sector now needs to evolve and take a more active role in shaping society. Financial institutions should aim to structure markets in ways that turn essential sustainable infrastructure into profitable, viable investments. This means banks, private equity, venture capital, and other financial institutions need to rethink their strategies. They should actively build financial environments where investments in sustainability become rewarding both morally and financially.
```

```
So why is sustainable infrastructure development progressing so slowly? Two reasons stand out. First, it's hard for us to recognize the full consequences of environmental damage because the immediate impacts often seem manageable or distant. A slightly hotter summer or more frequent storms feel tolerable in the short term. Oil companies and factories rarely bear the immediate brunt of climate change; instead, the early warning signs appear as sinking islands or threatened wildlife, such as polar bears. By the time the signals become too alarming to ignore, it might already be too late to reverse the damage.
```

```
Second, and perhaps more significantly, our economic systems still heavily favor short-term profits over long-term sustainability. If short-term financial gains remain our primary motivation, infrastructure will naturally prioritize immediate returns over lasting environmental stability. Thus, reshaping our financial incentives to align immediate profitability with long-term sustainability is essential.
```

```
Ultimately, investing in sustainable infrastructure isn't just an ethical choice; it's a necessary financial strategy for humanity's survival and prosperity. The financial sector must shoulder greater responsibility by strategically channeling private capital toward projects that deliver both profitability and planetary sustainability. This holistic approach, where infrastructure projects are profitable, socially beneficial, and environmentally responsible, is the only meaningful way forward.
```

---

## Value-driven Investing

```
It's very difficult to define value. The stock price of AAPL could be seen as its value per share because that's what people are currently willing to pay. But this doesn't capture the entire meaning of value. A more accurate definition might be the actual worth of owning one unit of the company. The tricky part is that we only recognize something as valuable when it translates into gains. When AAPL's price rises, we say owning it was valuable. But if you made a profit while AAPL was trading flat, someone else might've lost money. Was any value truly created, or was it simply moved from one person to another?
```

```
People invest their money to generate returns higher than their initial amount. The choice of investment depends heavily on one's risk tolerance and desired returns. If you prefer safety and predictable returns, treasury bonds may be your best option. However, if you believe strongly that Apple's future growth justifies potential risk, buying its stock could make sense. But there's another question worth considering: Where does the money come from? Is it savings from your monthly wages? Or perhaps you're borrowing money, betting that your returns will surpass your interest payments? These considerations are at the heart of finance.
```

```
As a side note, banks are central to finance. Banks don't directly create value the way a tech firm creates products or a manufacturer builds machinery. Instead, banks primarily transfer value. They take deposits and lend the capital out to individuals and businesses, hoping these borrowers will create tangible value. But for banks, as long as borrowers repay the interest, it doesn't matter much whether the borrowers truly created value. Finance simply operates by transferring capital. Whether something meaningful results from that capital lies in the hands of those who borrow it.
```

```
The dictionary definition of investment is the action or process of investing money for profit or material result. However, I think that definition leaves something important out. Profit typically arises from transactions. You buy AAPL at $180, then sell at $220. You made money, sure, but did you directly contribute to Apple's growth or innovation? Likely not. You merely traded your share with someone else who no longer wanted it, and then again with someone else who did. Apple's primary financial gain from investors occurred when it initially offered its shares to the public (IPO). After that, the company's operations were largely funded by its internal revenue streams.
```

```
The moment your investment truly creates a material result is when a company explicitly states how your money contributed to building infrastructure, launching a new product, creating jobs, or improving lives. I genuinely believe this is how capital should flow. Yes, stock trading can be profitable, but trading alone doesn't create tangible outcomes. The stock market is merely a platform for exchanging ownership, and the share's price is largely determined by collective market belief, not necessarily by measurable impact. Companies aren't overly concerned with who specifically owns their shares day-to-day; they care that someone owns them, eliminating the need to repurchase their stock.
```

```
Everyday trading activity rarely considers the tangible results of investment. Some investors prioritize discounted cash flow valuations, others chase price momentum, and some speculate based on volatility. Yet none of these strategies inherently ensures the company creates genuine welfare or positive societal outcomes. Ultimately, if we fail to address global challenges such as climate change or international conflicts, our short-term profits will hardly matter.
```

```
Therefore, let's strive to be responsible investors. Understand clearly where your money goes and what it accomplishes. Continually ask yourself: Has your capital contributed to creating something valuable, or is it simply changing hands for a quick gain? That's why I urge people to invest in values, not merely in assets.
```
