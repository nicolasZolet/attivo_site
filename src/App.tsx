import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [['atuacao', 'Atuação'], ['metodologia', 'Metodologia'], ['sobre', 'Sobre']] as const
const whatsappUrl = 'https://wa.me/5554999501902?text=' + encodeURIComponent('Olá, ATTIVO! Vim pelo site da ATTIVO e gostaria de conversar sobre um projeto.')

function Brand() {
  return <span className="brand-image"><img src="/brand/attivo.png" alt="ATTIVO — Tecnologia para o mundo real" width="1254" height="1254" /></span>
}

const areas = [
  ['01', 'Hardware', 'Engenharia que ganha forma.', 'Desenvolvimento de produtos eletrônicos, com hardware pensado para a aplicação e integrado ao software.'],
  ['02', 'Firmware', 'Inteligência embarcada.', 'Desenvolvimento de firmware para sistemas embarcados: o software que controla o funcionamento do equipamento.'],
  ['03', 'Software', 'Tecnologia que conecta.', 'Desenvolvimento de software para empresas, conectando aplicações, equipamentos e processos.'],
  ['04', 'Automação', 'Sistemas em movimento.', 'Automação de processos empresariais, integrando equipamentos e software às necessidades da operação.'],
  ['05', 'Inteligência artificial', 'IA aplicada.', 'Inteligência artificial aplicada a empresas, integrada ao software para apoiar a análise de informações e automatizar tarefas.'],
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  const menu = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeMobileMenu = () => {
      if (desktop.matches && menu.current) menu.current.open = false
    }
    desktop.addEventListener('change', closeMobileMenu)
    return () => desktop.removeEventListener('change', closeMobileMenu)
  }, [])

  useEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-hero]', { y: 24, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out', clearProps: 'all' })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
        gsap.from(element, { y: 24, opacity: 0, duration: 0.75, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 92%', once: true } })
      })
    }, root)
    return () => media.revert()
  }, [])

  return <div ref={root}>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header flex items-center justify-between">
      <a className="wordmark" href="#inicio" aria-label="ATTIVO — início"><Brand /></a>
      <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
        {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <a className="header-contact hidden md:flex items-center gap-6" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da ATTIVO (abre em nova aba)">WhatsApp <Arrow diagonal /></a>
      <details ref={menu} className="mobile-menu md:hidden" onKeyDown={event => {
        if (event.key === 'Escape' && menu.current?.open) {
          menu.current.open = false
          menu.current.querySelector('summary')?.focus()
        }
      }}>
        <summary className="menu-button">Menu</summary>
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel">
          {[...links, ['contato', 'Contato']].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => {
            if (menu.current) menu.current.open = false
            document.getElementById(id)?.focus({ preventScroll: true })
          }}>{label}<Arrow diagonal /></a>)}
        </nav>
      </details>
    </header>

    <main id="conteudo" tabIndex={-1}>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 data-hero id="hero-title">Da eletrônica<br />ao software.<br /><em>O projeto inteiro.</em></h1>
          <p data-hero className="hero-description">Desenvolvemos produtos eletrônicos e soluções de tecnologia para empresas. Da integração de hardware e software à automação e inteligência artificial, conectamos as partes do seu projeto.</p>
          <div data-hero className="hero-actions flex flex-wrap items-center gap-7">
            <a className="primary-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Vamos conversar no WhatsApp (abre em nova aba)">Vamos conversar no WhatsApp <Arrow diagonal /></a>
            <a className="text-link" href="#atuacao">Conheça nossa atuação <Arrow /></a>
          </div>
        </div>
        <p className="hero-margin-note">Tecnologia para<br />o mundo real.</p>
      </section>

      <section className="clients-section" aria-labelledby="clients-title">
        <h2 id="clients-title">Empresas com quem trabalhamos</h2>
        <ul className="client-logos" aria-label="Clientes ATTIVO">
          <li><div className="client-logo airpro"><img src="/clients/airpro.png" alt="Airpro" width="1080" height="1080" /></div></li>
          <li><div className="client-logo marcopolo"><img src="/clients/marcopolo.png" alt="Marcopolo" width="945" height="534" /></div></li>
          <li><div className="client-logo bemfatto"><img src="/clients/bemfatto.png" alt="Bemfatto" width="273" height="185" /></div></li>
        </ul>
      </section>

      <section tabIndex={-1} id="atuacao" className="section section-light" aria-labelledby="areas-title">
        <div data-reveal className="section-heading"><p className="eyebrow">Áreas de atuação</p><h2 id="areas-title">As partes precisam<br /><span>funcionar juntas.</span></h2></div>
        <div className="areas-grid">{areas.map(([, title, , description]) => <article data-reveal className="area" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section tabIndex={-1} id="metodologia" className="section" aria-labelledby="method-title">
        <div data-reveal className="section-heading"><p className="eyebrow">Nossa abordagem</p><h2 id="method-title">Antes de desenvolver,<br />entender.</h2></div>
        <ol className="method-list">{[
          ['Entender o problema', 'Conhecer a operação, as necessidades e as restrições do projeto.'],
          ['Definir o caminho', 'Avaliar alternativas e alinhar escopo, viabilidade e prioridades.'],
          ['Desenvolver e validar', 'Prototipar, testar e ajustar a solução ao longo do desenvolvimento.'],
          ['Integrar à operação', 'Colocar as partes para funcionar juntas e verificar a aplicação real.'],
        ].map(([title, description], index) => <li data-reveal key={title}><span className="method-number">0{index + 1}</span><div className="method-content"><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section tabIndex={-1} id="sobre" className="section section-light about-section" aria-labelledby="about-title">
        <div data-reveal className="about-brand"><img src="/brand/attivo.png" alt="ATTIVO — Tecnologia para o mundo real" width="1254" height="1254" loading="lazy" /></div>
        <div data-reveal><h2 id="about-title">Sobre a ATTIVO</h2><p className="about-copy">A ATTIVO é uma empresa de desenvolvimento de tecnologia em Caxias do Sul, no Rio Grande do Sul. Atuamos em engenharia de produtos eletrônicos, sistemas embarcados, software, automação e inteligência artificial.</p><p className="about-copy">Desenvolvemos produtos próprios e soluções B2B, reunindo essas disciplinas em torno das necessidades de cada projeto.</p></div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Antes de conversar</h2>
        <details><summary>Preciso desenvolver um equipamento eletrônico. Como começar?</summary><p>Conte o que o equipamento precisa fazer, onde será utilizado e o que já existe do projeto. A partir desse contexto, podemos conversar sobre o desenvolvimento do hardware, do firmware e do software necessário.</p></details>
        <details><summary>A ATTIVO integra software a equipamentos?</summary><p>Sim. Atuamos na integração de hardware e software, incluindo firmware para sistemas embarcados e aplicações que se conectam aos equipamentos. A solução depende das interfaces disponíveis e dos requisitos do projeto.</p></details>
        <details><summary>Como a inteligência artificial pode fazer parte do projeto?</summary><p>A IA pode apoiar a análise de informações e a automação de tarefas dentro de uma solução de software. Sua aplicação depende do problema, dos dados disponíveis e dos requisitos da operação.</p></details>
        <details><summary>Onde fica a ATTIVO?</summary><p>Estamos em Caxias do Sul, Rio Grande do Sul, Brasil. Fale com a equipe para avaliar as necessidades e o formato de atendimento do seu projeto.</p></details>
        <details><summary>Como solicitar um orçamento de desenvolvimento?</summary><p>Fale com a ATTIVO pelo <a href={whatsappUrl}>WhatsApp +55 (54) 99950-1902</a>. Descreva o que pretende desenvolver, o contexto de uso e, se houver, os requisitos e o prazo desejado. Essas informações ajudam a definir o escopo antes do orçamento.</p></details>
      </section>

      <section tabIndex={-1} id="contato" className="section contact-section" aria-labelledby="contact-title">
        <p data-reveal className="eyebrow">Contato</p><h2 data-reveal id="contact-title">O que você<br /><em>quer desenvolver?</em></h2><p data-reveal className="contact-copy">Conte o que você quer desenvolver. Vamos conversar sobre o escopo e as informações necessárias para preparar um orçamento.</p><div data-reveal className="contact-details"><a className="primary-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre um orçamento no WhatsApp (abre em nova aba)">Conversar sobre um orçamento <Arrow diagonal /></a><p>ATTIVO<span>Comercial e Negócios</span></p><a className="contact-phone" href={whatsappUrl} target="_blank" rel="noopener noreferrer">+55 (54) 99950-1902<span className="sr-only"> — WhatsApp, abre em nova aba</span></a><p className="contact-location">Caxias do Sul, RS</p></div>
      </section>
    </main>
    <footer className="site-footer flex flex-wrap items-center justify-between gap-6"><a className="wordmark" href="#inicio" aria-label="ATTIVO — voltar ao início"><Brand /></a><p>ATTIVO · Engenharia e tecnologia</p><a href="#inicio">Voltar ao topo ↑</a></footer>
  </div>
}
