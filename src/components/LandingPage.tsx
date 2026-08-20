import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Repeat,
  Heart,
  MessageSquareOff,
  BatteryLow,
  Clock,
  Brain,
  ShieldCheck,
  Zap,
  Users,
  Star,
  Check,
} from "lucide-react";

import coverMilczenie from "@/assets/covers/cover-milczenie.webp";
import coverTrudna from "@/assets/covers/cover-trudna.webp";
import coverGranice from "@/assets/covers/cover-granice.webp";
import coverPraca from "@/assets/covers/cover-praca.webp";
import coverDziecko from "@/assets/covers/cover-dziecko.webp";

const BUNDLE_URL = "https://www.naffy.io/brakklotni/zestaw-ebookow-41-gratis-4rn";

const ebooks = [
  {
    cover: coverMilczenie,
    title: "Od Milczenia do Bliskości",
    subtitle: "Jak Rozmawiać z Partnerem, Żeby Was Zbliżało, a Nie Dzieliło",
    desc: "Dla par, które czują dystans i nie wiedzą, jak wrócić do prawdziwej rozmowy. Krok po kroku od milczenia do bliskości.",
    url: "https://www.naffy.io/brakklotni/od-milczenia-do-bliskosci-jak-rozmawiac-z-partnerem-zeby-was-zblizalo-a-nie-dzielilo-s37",
  },
  {
    cover: coverTrudna,
    title: "Trudna Rozmowa Bez Dramatu",
    subtitle: "7 Kroków, Które Zamieniają Konflikt w Porozumienie",
    desc: "Uniwersalny przewodnik po każdej trudnej rozmowie — 7 kroków, które prowadzą od konfliktu do porozumienia.",
    url: "https://www.naffy.io/brakklotni/trudna-rozmowa-bez-dramatu-7-krokow-ktore-zamieniaja-konflikt-w-porozumienie-9wd",
  },
  {
    cover: coverGranice,
    title: "Zdrowe Granice, Zdrowe Relacje",
    subtitle: "Jak Mówić „Nie” Bez Poczucia Winy",
    desc: "Dla osób, które zawsze mówią „tak” i czują się przez to wykorzystywane. Granice bez wyrzutów sumienia.",
    url: "https://www.naffy.io/brakklotni/zdrowe-granice-zdrowe-relacje-jak-mowic-nie-bez-poczucia-winy-kij",
  },
  {
    cover: coverPraca,
    title: "Mów Tak, Żeby Cię Słuchali",
    subtitle: "Jak Prowadzić Trudne Rozmowy w Pracy Bez Napięcia",
    desc: "Do rozmów zawodowych — z szefem, zespołem i klientem — bez napięcia, bez niedopowiedzeń i bez stresu.",
    url: "https://www.naffy.io/brakklotni/mow-tak-zeby-cie-sluchali-jak-prowadzic-trudne-rozmowy-w-pracy-bez-napiecia-jqp",
  },
  {
    cover: coverDziecko,
    title: "Słyszę Cię",
    subtitle: "Jak Rozmawiać z Dzieckiem, Żeby Naprawdę Was Rozumiało",
    desc: "Dla rodziców, którzy chcą, żeby dziecko naprawdę się im zwierzało — i żeby rozmowa nie kończyła się trzaśnięciem drzwiami.",
    url: "https://www.naffy.io/brakklotni/slysze-cie-jak-rozmawiac-z-dzieckiem-zeby-naprawde-was-rozumialo-zt1",
  },
];

const pains = [
  {
    icon: MessageSquareOff,
    title: "Brak konkretnych słów w emocjach",
    desc: "Wiesz, co czujesz, ale w środku kłótni nie wiesz, co powiedzieć.",
  },
  {
    icon: Repeat,
    title: "Nawyk milczenia zamiast rozmowy",
    desc: "Łatwiej się wycofać, niż zmierzyć z niewygodnym tematem.",
  },
  {
    icon: BatteryLow,
    title: "Strach przed odmową",
    desc: "Boisz się powiedzieć „nie”, więc gromadzisz żal, który i tak w końcu wybucha.",
  },
  {
    icon: Clock,
    title: "Powtarzalne wzorce z przeszłości",
    desc: "Reagujesz tak, jak nauczyłaś się reagować dawno temu, nie tak, jak chcesz teraz.",
  },
  {
    icon: Brain,
    title: "Niewidzialne schematy w relacji",
    desc: "To rzadko jedna kłótnia. To powtarzający się mechanizm, którego nie widać z bliska.",
  },
];

const benefits = [
  {
    title: "Gotowe zdania na trudne rozmowy",
    desc: "Dokładne sformułowania, których użyjesz zamiast szukać słów w emocjach.",
  },
  {
    title: "Granice bez poczucia winy",
    desc: "Nauczysz się mówić „nie”, nie tłumacząc się i nie przepraszając za siebie.",
  },
  {
    title: "Koniec kłótni, które nic nie zmieniają",
    desc: "Poznasz, jak kończyć konflikt tak, żeby nie wracał następnego dnia.",
  },
  {
    title: "Bliskość zamiast milczenia",
    desc: "Konkretne kroki, jak wrócić do rozmowy po długiej ciszy w związku.",
  },
  {
    title: "System, nie przypadek",
    desc: "Każdy ebook to gotowa struktura pracy nad jedną konkretną relacją — bez zgadywania.",
  },
  {
    title: "Do zastosowania od razu",
    desc: "Konkretne zdania i ćwiczenia, które wdrażasz tego samego wieczoru, nie za miesiąc.",
  },
];

const faq = [
  {
    q: "Jak otrzymam ebooka po zakupie?",
    a: "Od razu po opłaceniu dostajesz e-mail z linkiem do pobrania. Możesz zacząć czytać w kilka minut.",
  },
  {
    q: "W jakim formacie są ebooki?",
    a: "PDF — otworzysz je na telefonie, tablecie, komputerze i większości czytników e-booków.",
  },
  {
    q: "Czy mogę kupić tylko jeden ebook, czy muszę brać cały zestaw?",
    a: "Każdy jest dostępny osobno w promocji za 34,99 zł. Zestaw 5 w 1 za 119,99 zł jest dla tych, którzy chcą komplet i największą oszczędność.",
  },
  {
    q: "Czy płatność jest bezpieczna?",
    a: "Tak. Płatność obsługuje Naffy — bezpieczny, zewnętrzny system płatności dla twórców cyfrowych.",
  },
  {
    q: "Ile czasu zajmuje przeczytanie jednego ebooka?",
    a: "1–2 wieczory. Wszystko jest od razu do zastosowania w praktyce.",
  },
  {
    q: "Czy to działa, jeśli mój partner/rodzina nie czyta razem ze mną?",
    a: "Tak. Zmiana w rozmowie zaczyna się od jednej strony — wystarczy, że Ty zmienisz sposób mówienia i słuchania.",
  },
  {
    q: "Czy mogę podarować ebooka komuś innemu?",
    a: "Tak, po zakupie możesz przesłać PDF osobie, dla której go kupiłaś/eś.",
  },
];

const reviews: { name: string; initial: string; quote: string }[] = [
  {
    name: "Franek",
    initial: "F",
    quote: "„Super ebooki, nie żałuję zakupu.”",
  },
  {
    name: "Alicja",
    initial: "A",
    quote: "„Super, szybko i przyjemnie się czyta i mega dużo wiedzy.”",
  },
  {
    name: "Majka",
    initial: "M",
    quote: "„Przestałam być popychadłem i wszystko dobrze wytłumaczone.”",
  },
];

const navLinks = [
  { href: "#ebooki", label: "Ebooki" },
  { href: "#zestaw", label: "Zestaw" },
  { href: "#opinie", label: "Opinie" },
  { href: "#faq", label: "FAQ" },
];

function BuyLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Brak <span className="text-accent">Kłótni</span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <BuyLink
            href={BUNDLE_URL}
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold tracking-wide text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:text-sm"
          >
            Zestaw 5 w 1
          </BuyLink>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="bg-gradient-hero">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-primary/15 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Promocja −30% na wszystkie ebooki
              </p>
              <h1 className="font-display text-4xl leading-[1.08] font-semibold text-primary sm:text-5xl">
                Naucz się rozmawiać tak, żeby Was to zbliżało, a nie dzieliło
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Trudne rozmowy — z partnerem, w pracy, z dzieckiem, o granicach — można prowadzić
                bez dramatu. Te 5 ebooków pokazuje dokładnie jak, krok po kroku.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#zestaw"
                  className="w-full rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Zobacz zestaw i oszczędź
                </a>
                <a
                  href="#ebooki"
                  className="text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-accent"
                >
                  Zobacz pojedyncze ebooki
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 items-end gap-3 sm:gap-5">
              <img
                src={coverGranice}
                alt="Zdrowe Granice, Zdrowe Relacje — Jak Mówić „Nie” Bez Poczucia Winy"
                className="cover-img mt-8"
                loading="eager"
              />
              <img
                src={coverTrudna}
                alt="Trudna Rozmowa Bez Dramatu — 7 Kroków, Które Zamieniają Konflikt w Porozumienie"
                className="cover-img"
                loading="eager"
              />
              <img
                src={coverMilczenie}
                alt="Od Milczenia do Bliskości — Jak Rozmawiać z Partnerem, Żeby Was Zbliżało, a Nie Dzieliło"
                className="cover-img mt-8"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* BÓL */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
            Dlaczego wciąż wracacie do tej samej kłótni?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground sm:text-lg">
            To rzadko kwestia złej woli. Najczęściej problem leży głębiej.
          </p>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pains.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-lg italic leading-relaxed text-primary">
            Większość par i rodzin próbuje naprawić pojedynczą kłótnię — zamiast
            zmienić wzorzec, który ją wywołuje.
          </p>
        </section>

        {/* CO DA CI TA SERIA */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                ● Twoja zmiana
              </p>
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden="true">😓</span>
                  <span className="font-display text-lg font-semibold text-muted-foreground">
                    Samodzielnie
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-secondary">
                  <div
                    className="h-2 rounded-full bg-muted-foreground/40"
                    style={{ width: "20%" }}
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  Miesiące, może lata
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80">
                  Powtarzasz te same kłótnie, znowu milczysz, znowu się tłumaczysz
                </p>
              </div>
              <hr className="my-6 border-border" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg" aria-hidden="true">👍</span>
                  <span className="font-display text-lg font-semibold text-primary">
                    Z ebookami Brak Kłótni
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-secondary">
                  <div
                    className="h-2 rounded-full bg-accent"
                    style={{ width: "85%" }}
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-primary">
                  Już od pierwszej rozmowy
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  Konkretne słowa → od razu do użycia → widoczna różnica
                </p>
              </div>
              <div className="mt-6 rounded-2xl bg-accent/10 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  Różnica
                </p>
                <p className="mt-2 font-display text-base font-semibold text-primary">
                  Konkretne słowa zamiast domysłów
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  Gotowe zdania i schematy rozmów, które możesz użyć tego samego
                  dnia.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                Co da Ci ta seria ebooków?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To nie kolejna dawka ogólnych porad o »lepszej komunikacji«. To
                pięć konkretnych przewodników, które pokazują dokładnie, co
                powiedzieć i jak to powiedzieć — krok po kroku.
              </p>
              <ul className="mt-7 space-y-5">
                {benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-primary">
                        {b.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EBOOKI */}
        <section id="ebooki" className="scroll-mt-20 bg-muted/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Pojedyncze ebooki
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Każdy poradnik to gotowy scenariusz na jedną trudną rozmowę. PDF, dostęp od razu po
              zakupie.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ebooks.map((book) => (
                <article
                  key={book.title}
                  className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <img
                    src={book.cover}
                    alt={`${book.title} — ${book.subtitle}`}
                    className="cover-img"
                    loading="lazy"
                  />
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-primary">
                      Bestseller
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-accent-foreground">
                      Promocja −30%
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-primary">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{book.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                    {book.desc}
                  </p>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-sm text-muted-foreground line-through">49,99 zł</span>
                    <span className="font-display text-3xl font-semibold text-accent">
                      34,99 zł
                    </span>
                  </div>
                  <BuyLink
                    href={book.url}
                    className="mt-5 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Kup teraz →
                  </BuyLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ZESTAW */}
        <section id="zestaw" className="scroll-mt-20 px-5 py-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-deep p-1 shadow-lift">
            <div className="rounded-[1.85rem] px-6 py-12 text-center sm:px-12">
              <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                Najczęściej wybierane
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Zestaw 4+1 gratis — wszystkie 5 ebooków
              </h2>

              <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-primary-foreground/10 p-5">
                  <p className="text-xs text-primary-foreground/70">5 ebooków osobno</p>
                  <p className="mt-2 text-xl text-primary-foreground/70 line-through">249,95 zł</p>
                </div>
                <div className="rounded-2xl bg-primary-foreground/10 p-5">
                  <p className="text-xs text-primary-foreground/70">Osobno w promocji</p>
                  <p className="mt-2 text-xl font-medium text-primary-foreground">174,95 zł</p>
                </div>
                <div className="rounded-2xl bg-gold p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Cena zestawu
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold text-primary">119,99 zł</p>
                </div>
              </div>

              <p className="mt-7 font-display text-lg text-primary-foreground">
                Taniej niż 5 ebooków kupionych osobno nawet w promocji — oszczędzasz 54,96 zł
              </p>

              <ul className="mx-auto mt-9 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
                {[
                  "Komplet na każdą trudną rozmowę w Twoim życiu",
                  "Jedna inwestycja zamiast pięciu",
                  "Dostęp od razu po zakupie",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm leading-relaxed text-primary-foreground/90"
                  >
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <BuyLink
                href={BUNDLE_URL}
                className="mt-10 inline-block rounded-full bg-gold px-10 py-4 font-display text-lg font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Zgarnij cały zestaw →
              </BuyLink>
            </div>
          </div>
        </section>

        {/* JAK TO DZIAŁA */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center font-display text-3xl font-semibold text-primary">
            Jak to działa
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Wybierz ebook lub zestaw",
              "Zapłać bezpiecznie przez Naffy",
              "Odbierz plik od razu na maila i czytaj gdziekolwiek chcesz",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-foreground/85">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* OPINIE */}
        <section id="opinie" className="scroll-mt-20 bg-muted/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Opinie czytelniczek
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-foreground/85">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-secondary font-display text-base font-semibold text-primary">
                      {r.initial}
                    </span>
                    <span className="text-sm font-medium text-primary">{r.name}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* ZAUFANIE */}
            <div className="mt-14 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Bezpieczna płatność" },
                { icon: Zap, label: "Natychmiastowy dostęp" },
                { icon: Users, label: "Setki zadowolonych czytelniczek" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-center gap-3">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-primary">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-semibold text-primary sm:text-4xl">
              Najczęstsze pytania
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faq.map((item) => (
                <AccordionItem
                  key={item.q}
                  value={item.q}
                  className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-hero px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight font-semibold text-primary sm:text-4xl">
              Wybierz swoją pierwszą trudną rozmowę, którą chcesz zmienić.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BuyLink
                href={BUNDLE_URL}
                className="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Zgarnij cały zestaw →
              </BuyLink>
              <a
                href="#ebooki"
                className="text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                Zobacz pojedyncze ebooki
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="font-display text-lg font-semibold text-primary">Brak Kłótni</p>
          <p className="max-w-xl text-sm text-muted-foreground">
            Ebooki dostępne w formacie PDF, sprzedaż i płatność obsługiwana przez Naffy.io
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-accent">
              Polityka prywatności
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Regulamin
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brak Kłótni. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
