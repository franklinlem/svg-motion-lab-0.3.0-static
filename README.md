# SVG Motion Lab

Editor visual de animação SVG, com React, TypeScript, Vite e Web Animations API. Autoria: Franklin Martins. Versão beta 0.3.0, processamento local, sem backend, contas ou telemetria.

## Executar

Node 22.12+ (testado com 22.23.2).

```sh
npm ci
npm run dev
```

Abra `/` para a apresentação ou `/editor/` para editar. `npm run build` gera páginas educativas estáticas; para conferir guias, SEO e PWA use `npm run preview` após o build.

```sh
npm run typecheck
npm run lint
npm test
npx playwright install --with-deps
npm run test:e2e
npm run build
npm run preview
```

## Criar sua primeira animação

1. Importe um SVG (até 1 MiB) ou abra Órbita, Decolar ou Geometria.
2. Revise o relatório; apenas o SVG sanitizado pode substituir o projeto aberto.
3. Selecione uma forma no canvas ou na lista. Aplique Fade In, Slide, Pulse, Spin ou Bounce.
4. Edite os valores por offset, pivô e timing. Preview começa pausado.
5. Baixe o projeto JSON para backup, ou ZIP com CSS/JS, SVG e demonstração HTML.

Use SVG **inline** na integração. O SVG de apoio não é uma animação autônoma em `<img>`. O pacote JS expõe `initAnimation(container)` com `play`, `pause`, `restart` e `dispose`. O pacote considera movimento reduzido.

## Persistência

Uma sessão e sua versão anterior no IndexedDB. Tema no localStorage. Falha de armazenamento não bloqueia edição. Autosave não substitui backup JSON. Limpeza em Ajuda → Apagar dados deste dispositivo. Atualizações da PWA oferecem download do JSON antes de gravar e recarregar.

## Escopo e limitações

Cinco canais: X, Y, rotação, escala uniforme e opacidade. Sem morphing, vídeo, GIF, Lottie, trajetórias, edição vetorial, CSS arbitrário ou recursos externos. Grupo e descendente não podem ser animados simultaneamente. Veja [política SVG](docs/svg-policy.md), [arquitetura](docs/architecture.md), [formato](docs/project-format.md), [deploy](docs/deploy-hostinger.md) e [evidências](docs/test-matrix.md).

## Publicação e licença

Ainda não publicado. Não há domínio assumido nem licença de distribuição escolhida: decisão de Franklin pendente. A sugestão de repositório é `franklinlem/svg-motion-lab`; o projeto local não pressupõe acesso remoto. A criação de repositório público e publicação devem ser decididas separadamente.

Para publicar, defina `SITE_URL=https://dominio-confirmado` no build. Sem a variável, páginas recebem `noindex`, robots bloqueia indexação e sitemap não inventa URLs.

Os três SVGs de exemplo foram produzidos para este projeto, sem assets de terceiros. Dependências e suas licenças estão registradas em `docs/dependencies.json`; nenhuma credencial ou SVG pessoal faz parte da entrega.
