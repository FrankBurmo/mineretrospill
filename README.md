# MineRetroSpill 🕹️

**[Åpne MineRetroSpill på GitHub Pages →](https://frankburmo.github.io/mineretrospill/)**

> Nettsted som lar brukeren enkelt registrere sitt bibliotek over fysiske retrospill.

![Screenshot](https://github.com/user-attachments/assets/c0545397-6173-4480-8de8-cc9fed9524f1)

## Om prosjektet

MineRetroSpill er et norskspråklig nettsted med fokus på det norske markedet. Alle spill som ble utgitt for de støttede plattformene er forhåndsdefinert, slik at brukerne enkelt kan krysse av de spillene de eier.

### Støttede plattformer

- 🎮 **Nintendo 8-bit (NES)** – 120 spill
- 🕹️ **Super Nintendo (SNES)** – 130 spill

### Funksjoner

- Kryss av spill du eier ved å klikke på dem
- Progresjonsstolpe per konsoll og totalt
- Søk, filtrer (alle / eier / mangler) og sorter (tittel / år) per plattform
- Dataene lagres lokalt i nettleseren (localStorage)
- Moderne retro 90-talls stil med pikselskrifter og neon-glød

## Teknologi

- **React 19** + **TypeScript** (Vite)
- CSS med Google Fonts (Press Start 2P, VT323)
- localStorage for persistens
- GitHub Actions → GitHub Pages

## Kom i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:5173/mineretrospill/](http://localhost:5173/mineretrospill/) i nettleseren.

## Bygging og utrulling

```bash
npm run build     # Produksjonsbygg til /dist
npm run preview   # Forhåndsvisning av produksjonsbygg
```

GitHub Actions bygger og publiserer automatisk til GitHub Pages ved push til `main`.

## Lisens

Dette prosjektet er lisensiert under [MIT-lisensen](LICENSE).
