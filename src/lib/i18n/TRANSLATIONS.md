# Portfolio translation notes

## Editorial rules

- English is the owner's curated source. Preserve its wording, punctuation, capitalization, spelling, facts, and emphasis. The independent pre-localization baseline is `e2e/fixtures/english-original.json`; do not regenerate it from the catalogs to make a failing test pass.
- Spanish uses a friendly, professional, neutral Latin American voice and `tú` for invitations. Translate meaning and idioms naturally; preserve numbers, claims, and each testimonial's viewpoint.
- The 239 catalog entries cover the active portfolio, expanded content, metadata, controls, accessibility labels, and image descriptions. Author names, technology names, brands, handles, URLs, and screenshots remain shared.
- Rich messages contain named placeholders rendered with Svelte snippets, allowing different word order and punctuation without injecting HTML. Both catalogs must have the same keys and placeholders.
- Postal addresses and direct mail are translated as `direcciones` and `correo publicitario` / `correo postal`, distinct from email designs (`correos electrónicos`). `Legacy` identifies earlier products and does not assert that their external websites are offline.
- Spanish uses established localized place names and correct accents. Source spellings remain untouched in English. Spanish word counts use dots for thousands and commas for decimals without changing amounts.

## Media-title references

Use published titles rather than literal inventions. Prefer Latin American distributor listings. These primary-source references were checked during implementation; titles are stored locally and never fetched at runtime.

| Original                     | Spanish display                    | Reference                                                                                                                                                         |
| ---------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Little Prince            | El principito                      | [Penguin Colombia](https://www.penguinlibros.com/co/tematicas/144416-ebook-el-principito-9789500753449)                                                           |
| 12 Rules for Life            | 12 reglas para vivir               | [Planeta](https://www.planetadelibros.com/libro-12-reglas-para-vivir/272063)                                                                                      |
| Hard Thing About Hard Things | Emprender y liderar una startup    | [Publisher's sample](https://librosdecabecera.com/wp-content/uploads/descargas/capitulo-gratis/capitulo-gratis-emprender-y-liderar-una-startup.pdf)               |
| Zero to One                  | De cero a uno                      | [Planeta](https://www.planetadelibros.com/libro-de-cero-a-uno/117063?soporte=192143)                                                                              |
| Rework                       | Reinicia                           | [Urano catalog](https://www.edicionesurano.com/all?format=epub&list_format=list&orderby=_score&page=7)                                                            |
| Remote                       | Remoto                             | [Urano](https://www.edicionesurano.com/remoto_1)                                                                                                                  |
| Shoe Dog                     | Nunca te pares                     | [Penguin](https://www.penguinlibros.com/us/tematicas/253970-audiolibro-nunca-te-pares-9788417992446)                                                              |
| Crazy Love                   | Loco amor                          | [Casa Creación catalog](https://casacreacion.com/site/uxycmooz/2022/02/Novedades-2022.pdf)                                                                        |
| Extreme Ownership            | Responsabilidad total              | [Editorial Tenos](https://www.editorialtenos.com/products/responsabilidad-total)                                                                                  |
| Outliers                     | Fuera de serie                     | [Penguin](https://www.penguinlibros.com/es/libro-de-negocio/34032-libro-fuera-de-serie-9788466342438)                                                             |
| David and Goliath            | David y Goliat                     | [Penguin México](https://www.penguinlibros.com/mx/tematicas/278578-audiolibro-david-y-goliat-9788430624928)                                                       |
| You've Got Mail              | Tienes un e-mail                   | [Apple TV Perú](https://tv.apple.com/pe/clip/tienes-un-mail/umc.cmc.79v67jaav9ikd0gcr8nhlqjlm?targetId=umc.cmc.188paonucjoralu8zej2w86d6&targetType=Movie)        |
| Interstellar                 | Interestelar                       | [Apple TV México trailer](https://tv.apple.com/mx/clip/interestelar/umc.cmc.zanodn4ctpwvg0j8sjxt5bgs?targetId=umc.cmc.1vrwat5k1ucm5k42q97ioqyq3&targetType=Movie) |
| Blood Diamond                | Diamante de sangre                 | [Apple TV México](https://tv.apple.com/mx/movie/diamante-de-sangre/umc.cmc.j1bslw4gxyqw5h0gmiz853ec)                                                              |
| Angels in the Outfield       | Ángeles de los jardines            | [Disney+ Spanish listing](https://www.disneyplus.com/es-us/browse/entity-736800e6-bdf1-407f-9381-8269088c1c8d)                                                    |
| Lord of the Rings (Trilogy)  | El señor de los anillos (trilogía) | [Apple TV México trilogy](https://tv.apple.com/mx/movie-bundle/trilogia-el-senor-de-los-anillos/umc.cmr.its.bun.5o6t9x14o1cxzl9uw6hqw345h)                        |
| Gangs of New York            | Pandillas de Nueva York            | [Apple TV Spanish listing](https://tv.apple.com/us/movie/pandillas-de-nueva-york/umc.cmc.1x8t8u68lqkntpnrc0i9rkxve?l=es)                                          |
| 100 Foot Journey             | Un viaje de diez metros            | [Apple TV Chile](https://tv.apple.com/cl/movie/un-viaje-de-diez-metros/umc.cmc.ck2c1ungcggnl1itr9cr9hpi)                                                          |
| The Matrix                   | Matrix                             | [Apple TV México synopsis](https://tv.apple.com/mx/movie/the-matrix/umc.cmc.af8k9kcq9r1s1qmmdxpq4itn)                                                             |
| Training Day                 | Día de entrenamiento               | [Apple TV México](https://tv.apple.com/mx/movie/dia-de-entrenamiento/umc.cmc.72xzmklhmz9na8mhcxvidfvf0)                                                           |
| Catch Me If You Can          | Atrápame si puedes                 | [Apple TV México](https://tv.apple.com/mx/movie/atrapame-si-puedes/umc.cmc.4p199eelws0o5vx6uwrsendqv)                                                             |
| Suits                        | La ley de los audaces              | [Netflix Colombia](https://www.netflix.com/co/title/70195800)                                                                                                     |
| Body Guard                   | Guardaespaldas                     | [Netflix Colombia](https://www.netflix.com/co/title/80235864)                                                                                                     |

`Delivering Happiness` retains its title in [the publisher's Spanish edition](https://www.profiteditorial.com/libro/delivering-happiness/). `Severance` also retains its title in [Apple TV Colombia](https://tv.apple.com/co/room/suspenso-en-appletv/edt.item.690cf573-8799-46cd-afb2-5e05e157044f). Other original series names remain where no different official regional title was verified. `That '70s Show` uses the [official title's spelling](https://about.netflix.com/en/news/hello-wisconsin-netflix-announces-that-90s-show-spinoff-from-that-70s-show) only in Spanish mode.

No verified Spanish edition title was established for `The Launch Pad: Inside Y Combinator`, `Tocqueville and the American Experiment`, or `A New Grammar Reference of Modern Spanish`, so their identifying titles remain intact, as agreed.

## Behavior and verification

- English is prerendered and remains readable without JavaScript. Explicit selections persist under `localStorage.language`; browser language is not used. Theme preferences remain independent.
- A saved Spanish preference briefly conceals the page until matching English hydration completes and Spanish is applied. The concealment expires after 1.5 seconds if hydration fails. Storage failures never prevent switching.
- Both controls share one reactive store. Changing language does not recreate the page, reset disclosures, close the mobile menu, restart testimonials, or change links.
- Run `npm run check`, `npm run test:unit -- --run`, `npm run build`, then `npm test`. Install the configured test browsers first with `npx playwright install chromium firefox webkit` when needed.
- The browser suite checks the independent English baseline, both toggle locations, persistence, blocked storage, keyboard focus, accessibility text, no-JavaScript fallback, and 320/375/768/1024/1440px layouts in both languages and themes. Unit checks enforce catalog completeness, matching placeholders, and an explicit allowlist of untranslated proper names.
