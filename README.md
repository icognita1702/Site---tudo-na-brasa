<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Tudo na Brasa

Site em React + Vite preparado para deploy estático.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Cloudflare Pages

Este projeto já está preparado para Cloudflare Pages.

### Git Integration

No painel do Cloudflare Pages, use estas configurações:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

### CLI Deploy

1. Faça login:
   `npx wrangler login`
2. Crie o projeto uma vez no Cloudflare Pages com o nome `site-tudo-na-brasa`
3. Faça o deploy:
   `npm run cf:deploy`

### Observações

- O roteamento SPA já está coberto pelo arquivo [`public/_redirects`](./public/_redirects).
- As imagens da seção "Conheça o Nosso Espaço" foram restauradas a partir dos arquivos locais originais e publicadas como JPGs otimizados em [`public`](./public).
