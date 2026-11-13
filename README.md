# Next.js E-Commerce Storefront

A storefront UI built with **Next.js 16 (App Router)**, **React 19**, TypeScript and Tailwind CSS
v4: a landing page with a carousel, a filterable product catalogue, individual product pages,
search, and a shared cart.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8)

> **Scope:** this is a frontend-focused build. The product catalogue is a local data file, the
> cart lives in React state, and the login/signup pages are layout only — there is no backend,
> no database and no real authentication. Those are listed as next steps rather than mocked.

## What is implemented

| Area | Status |
| --- | --- |
| Landing page with hero carousel | Done |
| Product catalogue grid | Done |
| Product detail pages (`/products/[id]`) | Done |
| Search route | Done |
| Cart with quantity and total (`CartContext`) | Done |
| Responsive layout, dark-friendly typography | Done |
| Authentication | Layout only |
| Persistence (DB, cart across reloads) | Not built |
| Checkout and payments | Not built |

## Architecture

```
src/
├── app/
│   ├── page.tsx              landing page
│   ├── products/page.tsx     catalogue
│   ├── products/[id]/page.tsx  dynamic detail route
│   ├── search/page.tsx       search results
│   ├── cart/page.tsx         cart view
│   └── login/, signup/       forms (no backend)
├── components/               Header, Footer, Carousel, ProductCard, ProductsGrid, AddToCartButton
├── context/CartContext.tsx   cart state shared via React context
├── data/products.ts          seeded catalogue
└── types/product.ts          shared Product type
```

Cart state is intentionally lifted into a context provider mounted in `layout.tsx`, so the header
badge, product cards and cart page all read one source of truth instead of passing props through
every level. Deriving `cartTotal` with a single `reduce` avoids storing a value that can drift out
of sync with the items.

Dynamic routes use the App Router's `[id]` segment with data resolved from the local catalogue,
which mirrors how the same page would consume a real API response.

## Running

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Next steps

1. Replace `data/products.ts` with an API or database-backed catalogue.
2. Persist the cart (`localStorage` for guests, server-side cart for signed-in users).
3. Add real authentication and protect account routes.
4. Add checkout and a payment provider.
5. Add component and end-to-end tests.
