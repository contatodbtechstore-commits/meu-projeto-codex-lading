import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion, useScroll } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Flower2,
  Gift,
  Heart,
  Layers3,
  Menu,
  Sparkles,
  X,
  Instagram,
  Mail,
  Pause,
  Play,
} from "lucide-react";
import { useMotionPreference } from "./hooks/useMotionPreference";
import { Brand, Bloom } from "./components/Brand";
import { Reveal } from "./components/Reveal";
import { KitCollection } from "./components/KitCollection";
import { RitualKits } from "./components/RitualKits";
import { KitDialog } from "./components/KitDialog";
import { brand, catalog, faqs, kits, visuals, type Kit } from "./content";
import { getPublishedKits, photoStyle } from "./utils/commerce";
const navigation = [
  ["#inicio", "Início"],
  ["#kits", "Nossa Linha"],
  ["#beneficios", "Benefícios"],
  ["#sobre", "Sobre"],
];
interface AppProps {
  scope?: Document | ShadowRoot;
  products?: Kit[];
  questions?: typeof faqs;
  storeHomeUrl?: string;
}
function App({ scope = document, products = kits, questions = faqs, storeHomeUrl }: AppProps = {}) {
  const publishedKits = getPublishedKits(products);
  const MainTag = scope === document ? "main" : "div";
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [selected, setSelected] = useState<Kit | null>(null);
  const [active, setActive] = useState("inicio");
  const menuButton = useRef<HTMLButtonElement>(null);
  const reduced = useMotionPreference();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    ["inicio", "kits", "beneficios", "sobre"].forEach((id) => {
      const el = scope.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [scope]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 641px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <MotionConfig reducedMotion={reduced ? "always" : "never"}>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div className="announcement">
        <span>Beleza real.</span> Conheça seu novo ritual de
        beleza <Sparkles size={12} />
      </div>
      <header className="header">
        <motion.div
          className="reading-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
        <div className="container header-inner">
          <a
            href="#inicio"
            aria-label={`${brand.fullName} — início`}
            onClick={() => setMenuOpen(false)}
          >
            <Brand />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map(([href, label]) => (
              <a
                key={href}
                href={href}
                aria-current={active === href.slice(1) ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#kits" className="button button-header">
            Conhecer a Linha <ArrowUpRight size={16} />
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Navegação mobile"
          >
            {navigation.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <MainTag id="conteudo">
        <section id="inicio" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduced ? 0 : 0.7 }}
                className="eyebrow"
              >
                <span className="little-line" /> BELEZA REAL. CUIDADO CONSCIENTE.
              </motion.div>
              <h1>
                <motion.span
                  initial={reduced ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.7 }}
                >
                  Beleza real.
                </motion.span>
                <motion.span
                  initial={reduced ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.7,
                    delay: reduced ? 0 : 0.12,
                  }}
                >
                  Liberdade
                </motion.span>
                <motion.em
                  initial={reduced ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.7,
                    delay: reduced ? 0 : 0.24,
                  }}
                >
                  de ser.
                </motion.em>
              </h1>
              <p className="hero-description">
                Cosméticos que respeitam sua pele e sua verdade. Conheça a linha
                Grand Amour e encontre o seu ritual de autocuidado.
              </p>
              <div className="hero-actions">
                <a href="#kits" className="button button-primary">
                  Explorar Nossa Linha <ArrowUpRight size={18} />
                </a>
                <a href="#sobre" className="text-button">
                  Descubra a Marca <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-footnote">
                <span className="footnote-icon">
                  <Flower2 size={24} strokeWidth={1} />
                </span>
                <span>
                  Um cuidado com você.
                  <br />
                  <strong>Um carinho na sua rotina.</strong>
                </span>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-arch" aria-hidden="true" />
              <svg
                className="hero-ribbon"
                viewBox="0 0 700 700"
                fill="none"
                aria-hidden="true"
              >
                <path d="M-40 550C170 770 730 510 607 199C522-13 265 24 245 177C225 330 487 379 714 185" />
                <path d="M-40 565C170 785 745 510 622 199C537-28 250 9 230 177C210 345 487 394 714 200" />
              </svg>
              <span className="hero-backdrop-word" aria-hidden="true">
                {brand.signature}
              </span>
              <motion.img
                className={`hero-products${visuals.hero.imageMode === "photo" ? " hero-photo" : ""}`}
                src={visuals.hero.image}
                alt={visuals.hero.imageAlt}
                style={photoStyle(visuals.hero)}
                width="900"
                height="900"
                fetchPriority="high"
                animate={reduced || motionPaused ? { y: 0 } : { y: [0, -9, 0] }}
                transition={
                  reduced || motionPaused
                    ? { duration: reduced ? 0 : 0.3 }
                    : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }
              />
              <div className="round-seal" aria-hidden="true">
                <span>FEITO PARA</span>
                <Bloom />
                <span>SEU MOMENTO</span>
              </div>
              <div className="floating-note">
                <Sparkles size={20} strokeWidth={1.2} />
                <span>
                  Pequenos rituais.
                  <br />
                  <em>Grandes momentos.</em>
                </span>
              </div>
              <span className="art-caption">UMA NOVA FORMA DE FLORESCER</span>
              <span className="hero-spark spark-one" aria-hidden="true">
                ✧
              </span>
              <span className="hero-spark spark-two" aria-hidden="true">
                ✧
              </span>
            </div>
            <a href="#kits" className="scroll-cue">
              <ArrowDown size={15} /> UM UNIVERSO DE CUIDADO ESPERA POR VOCÊ
            </a>
          </div>
        </section>
        <div
          className="marquee"
          data-paused={motionPaused}
          role="region"
          aria-label="Seu momento de autocuidado. Beleza em cada detalhe. Cuidado consciente. Um carinho para sua rotina."
        >
          <div className="marquee-track" aria-hidden="true">
            {[0, 1].map((i) => (
              <div className="marquee-group" key={i}>
                {[
                  "Seu momento de autocuidado",
                  "Beleza em cada detalhe",
                  "Cuidado consciente",
                  "Um carinho para sua rotina",
                ].map((text) => (
                  <span key={text}>
                    {text}
                    <Bloom />
                  </span>
                ))}
              </div>
            ))}
          </div>
          {!reduced && (
            <button
              className="motion-toggle icon-button"
              onClick={() => setMotionPaused((value) => !value)}
              aria-pressed={motionPaused}
              aria-label={
                motionPaused ? "Retomar animações" : "Pausar animações"
              }
              title={motionPaused ? "Retomar animações" : "Pausar animações"}
            >
              {motionPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          )}
        </div>
        <section id="kits" className="section kits-section">
          <div className="container">
            <Reveal className="section-heading">
              <div>
                <span className="eyebrow">ENCONTRE O SEU RITUAL</span>
                <h2>
                  Escolhidos com carinho.
                  <br />
                  <em>Feitos para encantar.</em>
                </h2>
              </div>
              <p>
                Cada momento pede um cuidado.
                <br />
                Conheça os produtos da nossa linha.
              </p>
            </Reveal>
            <div className="collection-rule" aria-hidden="true">
              <span>A COLEÇÃO</span>
              <span>
                {publishedKits.length === 3
                  ? "TRÊS FORMAS DE FLORESCER"
                  : "BELEZA REAL. CUIDADO CONSCIENTE."}
              </span>
              <span>
                {publishedKits.length
                  ? `01 — ${String(publishedKits.length).padStart(2, "0")}`
                  : "EM BREVE"}
              </span>
            </div>
            <KitCollection kits={publishedKits} onSelect={setSelected} />
            <p className="collection-note">
              <Sparkles size={13} />{" "}
              {catalog.demoMode
                ? "Uma prévia do nosso universo. Disponibilidade a confirmar."
                : "Fotos originais Grand Amour. Consulte disponibilidade, valores vigentes e condições com a marca."}
            </p>
          </div>
        </section>
        {scope === document && <RitualKits />}
        <section id="beneficios" className="section benefits-section">
          <div className="container">
            <Reveal className="center-heading">
              <span className="eyebrow">O CUIDADO MORA NOS DETALHES</span>
              <h2>
                Mais leveza para a rotina.
                <br />
                <em>Mais espaço para você.</em>
              </h2>
            </Reveal>
            <div className="benefits-grid">
              {[
                {
                  Icon: Flower2,
                  title: "Seu momento de pausa",
                  text: "Um convite para desacelerar e transformar o cuidado em uma parte especial do dia.",
                },
                {
                  Icon: Sparkles,
                  title: "Para cada versão sua",
                  text: "Diferentes inspirações para acompanhar seus momentos, seu ritmo e sua essência.",
                },
                {
                  Icon: Layers3,
                  title: "Cuidado que se encontra",
                  text: "Produtos para diferentes etapas do seu ritual, da limpeza à hidratação.",
                },
                {
                  Icon: Gift,
                  title: "Um gesto de amor próprio",
                  text: "Uma ideia delicada para celebrar alguém especial. Inclusive você.",
                },
              ].map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.08} className="benefit">
                  <span className="benefit-icon">
                    <Icon size={28} strokeWidth={1.15} />
                    <span className="benefit-number" aria-hidden="true">
                      0{i + 1}
                    </span>
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="sobre" className="editorial">
          <div className="container editorial-layout">
            <Reveal className="editorial-art">
              <div className="editorial-orbit" aria-hidden="true" />
              <span className="editorial-topline">A ARTE DE CUIDAR DE SI</span>
              <div className="editorial-image-frame">
                <img
                  src={visuals.editorial.image}
                  alt={visuals.editorial.imageAlt}
                  className={
                    visuals.editorial.imageMode === "photo"
                      ? "editorial-photo"
                      : undefined
                  }
                  style={photoStyle(visuals.editorial)}
                  decoding="async"
                  width="900"
                  height="900"
                  loading="lazy"
                />
              </div>
              <div className="editorial-label">
                <Bloom />
                <span>
                  Floresça no
                  <br />
                  <em>seu tempo.</em>
                </span>
              </div>
              <span className="editorial-number">
                01 — UM ENCONTRO COM VOCÊ
              </span>
            </Reveal>
            <Reveal className="editorial-copy">
              <span className="eyebrow">
                O UNIVERSO {brand.name.toUpperCase()}
              </span>
              <h2>
                Mais do que
                <br />
                cosméticos.
                <br />
                <em>
                  Um momento
                  <br />
                  só seu.
                </em>
              </h2>
              <p>
                A Grand Amour nasceu do encontro entre amor e liberdade. Amor pela
                beleza real e liberdade para cada mulher cuidar de si, do seu jeito.
              </p>
              <p>
                Acreditamos que o autocuidado é um gesto de respeito com quem você é.
                Nosso cuidado valoriza a verdade da sua pele, com qualidade e transparência.
              </p>
              <a href="#como-escolher" className="text-button">
                Encontre seu momento <ArrowUpRight size={17} />
              </a>
              <span className="editorial-signature">
                Com carinho, {brand.name}.
              </span>
            </Reveal>
          </div>
        </section>
        <section id="como-escolher" className="section steps-section">
          <div className="container">
            <Reveal className="center-heading">
              <span className="eyebrow">UM RITUAL COMEÇA COM UMA ESCOLHA</span>
              <h2>
                O seu próximo momento,
                <br />
                <em>em três pequenos passos.</em>
              </h2>
            </Reveal>
            <div className="steps-grid">
              {[
                {
                  title: "Explore a linha",
                  text: "Passeie pela nossa coleção e descubra diferentes formas de se cuidar.",
                },
                {
                  title: "Encontre seu favorito",
                  text: "Escolha a inspiração que faz sentido para você ou para quem deseja presentear.",
                },
                {
                  title: "Prepare sua conversa",
                  text: "Guarde sua escolha e consulte a marca sobre os detalhes antes de comprar.",
                },
              ].map((step, i) => (
                <Reveal key={step.title} delay={i * 0.12} className="step">
                  <div className="step-top">
                    <span>0{i + 1}</span>
                    {i < 2 ? (
                      <ArrowRight size={20} strokeWidth={1} />
                    ) : (
                      <Heart size={20} strokeWidth={1} />
                    )}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="perguntas" className="section faq-section">
          <div className="container faq-layout">
            <Reveal className="faq-intro">
              <span className="eyebrow">PODEMOS AJUDAR?</span>
              <h2>
                Um pouquinho
                <br />
                mais de <em>clareza.</em>
              </h2>
              <p>
                Para você escolher com calma
                <br />e aproveitar cada detalhe.
              </p>
              <Bloom className="faq-flower" />
            </Reveal>
            <div className="faq-list">
              {questions.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.04}>
                  <details className="faq-item">
                    <summary>
                      <span>
                        <small>0{i + 1}</small>
                        {faq.question}
                      </span>
                      <ChevronDown size={19} />
                    </summary>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="final-section">
          <Reveal className="container final-banner">
            <Bloom className="final-flower flower-left" />
            <Bloom className="final-flower flower-right" />
            <span className="eyebrow">SE PERMITA ESSE CARINHO</span>
            <h2>
              Seu próximo ritual de beleza
              <br />
              <em>começa aqui.</em>
            </h2>
            <p>Uma pausa. Uma escolha. Um momento inteiramente seu.</p>
            <a href="#kits" className="button button-light">
              Encontrar Meu Produto <ArrowUpRight size={18} />
            </a>
            <span className="final-small">
              FLORESÇA NA SUA PRÓPRIA ESSÊNCIA
            </span>
          </Reveal>
        </section>
      </MainTag>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a href="#inicio" aria-label="Voltar ao início">
                <Brand />
              </a>
              <p>
                Pequenos rituais.
                <br />
                Uma beleza que vem de você.
              </p>
            </div>
            <div className="footer-nav">
              <span>EXPLORE</span>
              <a href="#kits">Nossa Linha</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#sobre">Sobre a marca</a>
              <a href="#perguntas">Perguntas frequentes</a>
            </div>
            <div className="footer-contact">
              <span>VAMOS FLORESCER JUNTAS</span>
              <p>
                Um universo de cuidado,
                <br />
                feito para o seu momento.
              </p>
              {storeHomeUrl && (
                <a href={storeHomeUrl}>Voltar à MKC Magazine <ArrowUpRight size={16} /></a>
              )}
              {brand.email && (
                <a href={`mailto:${brand.email}`}>
                  <Mail size={16} /> {brand.email}
                </a>
              )}
              {/^https:\/\//.test(brand.instagram) && (
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} /> Instagram
                </a>
              )}
              {!storeHomeUrl && !brand.email && !brand.instagram && (
                <span className="contact-soon">
                  Canais de contato em breve.
                </span>
              )}
            </div>
            <a className="back-top" href="#inicio" aria-label="Voltar ao topo">
              <ArrowUpRight size={22} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {brand.fullName}. Todos os direitos
              reservados.
            </span>
            <span>
              Feito para florescer <Bloom />
            </span>
          </div>
        </div>
      </footer>
      <KitDialog kit={selected} onClose={() => setSelected(null)} />
    </MotionConfig>
  );
}
export default App;
