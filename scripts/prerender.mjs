import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { readFile, writeFile } from 'node:fs/promises'

// Render the same React tree at build time; no runtime server is required.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const content = renderToString(createElement(App))
  const schema = {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'ATTIVO',
    '@id': 'https://attivotech.com.br/#organization',
    url: 'https://attivotech.com.br/',
    logo: 'https://attivotech.com.br/brand/attivo.png',
    description: 'Desenvolvimento de tecnologia em Caxias do Sul, RS. Produtos eletrônicos, sistemas embarcados, software, automação e inteligência artificial para empresas.',
    telephone: '+55-54-99950-1902',
    address: { '@type': 'PostalAddress', addressLocality: 'Caxias do Sul', addressRegion: 'RS', addressCountry: 'BR' },
    knowsAbout: ['Hardware', 'Firmware', 'Software embarcado', 'Desenvolvimento de software', 'Automação', 'Inteligência artificial'],
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', telephone: '+55-54-99950-1902', url: 'https://wa.me/5554999501902', availableLanguage: 'pt-BR' },
  }
  const template = await readFile('dist/index.html', 'utf8')
  const html = template.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    .replace('</head>', `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script></head>`)
  if (!html.includes('5554999501902') || !html.includes('faq-title') || !html.includes('<h1')) throw new Error('Prerender validation failed')
  await writeFile('dist/index.html', html)
  console.log('Prerender verified: visible content, FAQ, contact and Organization schema in static HTML.')
} finally {
  await server.close()
}
