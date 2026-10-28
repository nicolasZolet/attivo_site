# Validação antes da publicação

## Concluído em 28/10/2026

- TypeScript, build Vite e pré-renderização aprovados.
- HTML estático: um H1, IDs únicos, destinos de todas as âncoras presentes.
- Imagens locais existentes e com texto alternativo.
- Links de WhatsApp apontam para 5554999501902; dados estruturados consistentes.
- Menu móvel convertido para details/summary nativo, disponível sem JavaScript.
- Escape fecha o menu e devolve o foco ao resumo; seleção de seção fecha e transfere foco ao destino.
- Menu com altura limitada e rolagem própria em telas baixas.
- Frase lateral do hero no fluxo normal entre 768 e 1100 pixels.

## Pendente — bloqueio do navegador

O controle do navegador retornou “Local browser use is disabled in Work settings”. Nenhuma validação visual multi-dispositivo foi concluída nesta etapa. Revisão de CSS e build não substituem testes no navegador.

Após habilitar, verificar a versão de produção em 320, 390, 768, 1024 e 1440 pixels; paisagem; zoom 200%; menu por teclado e toque; Escape; FAQ; links internos; ausência de transbordamento e sobreposição; preferência de movimento reduzido; hidratação sem erros. Testes em viewport emulado não equivalem a testes em aparelhos físicos ou todos os motores de navegador.

Não houve publicação nem alteração de DNS. A metodologia foi aprovada e aplicada com descrições; domínio canônico e metadados de publicação continuam pendentes.

## Revisão geral adicional

Build final e pré-renderização aprovados sem avisos de CSS. HTML verificado: IDs únicos, um H1, âncoras válidas, imagens existentes com alt, WhatsApp correto, JSON-LD válido e aviso editorial removido.

Melhorias aplicadas: textos de serviços/metodologia com 15px; logos empilhados abaixo de 540px; títulos e botões ajustados para telas estreitas; seção de contato com largura de leitura limitada; alvos de toque ampliados; nomes acessíveis dos botões correspondem aos textos visíveis; menu fecha ao passar para desktop; destino do link de pular conteúdo aceita foco.

A tentativa de inspeção visual continua bloqueada pelo navegador local desativado no Work. Não considerar a revisão como aprovação visual em dispositivos. A logo PNG fornecida tem cerca de 1,37 MB: substituir por vetor ou versão otimizada é uma melhoria de desempenho ainda pendente. Canonical, sitemap e imagem social com URL absoluta dependem da definição do endereço de publicação.

## Domínio confirmado

Canonical, sitemap, robots.txt, metadados sociais e Organization configurados para https://attivotech.com.br/. Verificação do domínio online e redirecionamentos será feita após publicação autorizada.
