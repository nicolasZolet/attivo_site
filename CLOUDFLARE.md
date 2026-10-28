# Cloudflare Pages

Repositório: https://github.com/nicolasZolet/attivo_site

Ao importar o repositório no Cloudflare Pages:

- Production branch: `main`
- Framework: React (Vite)
- Root directory: raiz do repositório (deixar em branco)
- Build command: `npm run build`
- Build output directory: `dist`
- Build environment variable: `NODE_VERSION=22.15.1`

O build gera HTML estático completo com hidratação React; não requer servidor Node em produção, banco de dados ou segredos.

Domínio canônico preparado: https://attivotech.com.br/

Depois de testar o endereço pages.dev, conectar o domínio pelo painel Pages e conferir os registros DNS existentes antes de qualquer mudança. Configurar redirecionamento de www para o domínio canônico. Nenhum domínio ou DNS foi configurado pelo envio ao GitHub.

Pendências de validação visual e desempenho estão em VALIDACAO.md. O envio ao GitHub não representa publicação nem aprovação de todos os dispositivos.
