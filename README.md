# ATTIVO — site institucional

Base local em React, Vite, TypeScript, Tailwind CSS e GSAP/ScrollTrigger. Primeira etapa: estrutura da landing page e hero; demais seções são uma base editorial para evolução.

## Desenvolvimento

Node.js 22 (22.15 ou superior). Execute `npm ci` e `npm run dev`. Para verificar tipos: `npm run typecheck`. `npm run build` verifica TypeScript e gera `dist/`. `npm run preview` serve o build localmente.

## Organização

- `src/App.tsx`: navegação, hero e seções semânticas.
- `src/styles.css`: identidade visual, composição tipográfica, responsividade e preferências de movimento.
- `index.html`: idioma, título, descrição e metadados sociais iniciais.
- `public/_headers`: cabeçalhos de segurança e cache para assets com hash.

## Cloudflare Pages (preparação; sem publicação)

Configuração a usar quando a publicação for autorizada:

- Framework: Vite.
- Diretório raiz: raiz deste repositório.
- Comando de build: `npm run build`.
- Diretório de saída: `dist`.
- Variável do ambiente de build: `NODE_VERSION=22.15.1` (ou versão 22 mais recente compatível).
- Nenhum backend, segredo ou variável de runtime é necessário nesta etapa.

Não foram criados projeto remoto, domínio ou registros DNS. O arquivo `_headers` é copiado pelo Vite para a saída. Não há roteamento client-side: os links são âncoras da página.

## Conteúdo a fornecer antes do lançamento

- Versão vetorial da marca para otimização; a logo original enviada já está aplicada no cabeçalho e rodapé.
- Portfólio: seção removida até haver projetos reais para apresentar.
- Metodologia aprovada: entender o problema, definir o caminho, desenvolver e validar, integrar à operação.
- História, equipe e e-mail oficial. WhatsApp de Samuel Bruing aplicado conforme cartão enviado: +55 (54) 99950-1902. Os links abrem uma conversa com texto sugerido, sem enviar automaticamente.
- URL pública para canonical, `og:url`, sitemap e imagem social definitiva.

O hero usa composição tipográfica. Os clientes Airpro, Marcopolo e Bemfatto foram informados pelo usuário; os logos originais estão em `public/clients/` e são apresentados em monocromia via CSS. Não há métricas ou depoimentos fictícios.

## Acessibilidade e desempenho

Links semânticos, link para pular ao conteúdo, menu com estado expandido e fechamento por Escape, foco visível, um único H1 e hierarquia de títulos. `prefers-reduced-motion` desativa animações GSAP e rolagem suave. As animações usam contexto com limpeza ao desmontar e reagir à preferência do sistema. Não há vídeo, fontes externas ou imagens pesadas. A rolagem permanece nativa.

O build pré-renderiza a mesma árvore React em HTML estático, incluindo serviços, FAQ e contato, e hidrata no navegador. Inclui Organization/ContactPoint em JSON-LD e robots.txt permissivo. Auditoria formal de acessibilidade, validação visual em múltiplos dispositivos e métricas de campo ainda não foram realizadas.

Referências técnicas: [Tailwind + Vite](https://tailwindcss.com/docs/installation/using-vite), [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/), [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/).

## Descoberta por buscadores e agentes

O conteúdo público funciona no HTML de produção sem JavaScript. `scripts/prerender.mjs` valida a presença de título, FAQ e WhatsApp no build. Dados estruturados descrevem somente informações fornecidas; não garantem citações ou posição em recomendações.

Após autorização para publicar, confirmar o domínio canônico, adicionar canonical/og:url/sitemap com esse endereço e verificar indexação e acesso dos crawlers na hospedagem. Nada foi publicado nesta etapa. A base usa breakpoints para celular, tablet e desktop, mas isso não equivale a certificação para todo dispositivo. Verificar navegação por teclado, zoom de 200%, menu móvel e larguras 320, 375, 768, 1024 e 1440 antes do lançamento.

## Domínio oficial

Endereço confirmado: https://attivotech.com.br/. Canonical, og:url, imagem social, Organization e sitemap configurados. Na publicação, direcionar variantes (www e HTTP) para esse endereço e verificar indexação. Nenhum DNS ou deploy foi alterado.
