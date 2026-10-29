# philosophiederneuenzeit.de

Wissenschaftliche Website von Dr. Magdalena (Lina) Börsig-Hover. Statische Seite mit [Astro](https://astro.build), Schriften lokal eingebunden (keine Google-Server, keine Cookies).

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # fertige Seite in dist/
```

## Wo was steht

| Inhalt | Datei |
|---|---|
| Schriftenverzeichnis, Rezensionen, Vorträge, Lehre, Tätigkeiten | `src/data/werk.js` |
| Seiten | `src/pages/*.astro` |
| Farben, Schriften, Raster | `src/styles/global.css` |
| Kontaktdaten | `src/lib.js` |
| Bilder | `public/img/` |

Neue Publikation: in `src/data/werk.js` einen Eintrag in die passende Liste einfügen (Jahr, Titel, Nachweis). Die Sortierung nach Jahr passiert automatisch.

## Veröffentlichung

Jeder Push auf `main` baut die Seite über GitHub Actions und veröffentlicht sie auf GitHub Pages (Vorschau unter `https://flowtimotion-cyber.github.io/Philosophiederneuenzeit/`, mit `noindex`).

### Domain bei ALL-INKL.COM mit GitHub Pages verbinden

Die Domain liegt bei ALL-INKL.COM, die Seite selbst bleibt auf GitHub Pages.

1. **ALL-INKL KAS → Tools → DNS-Einstellungen** für philosophiederneuenzeit.de:
   - `A`-Records für die Hauptdomain (Name leer bzw. `@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` für `www` auf `flowtimotion-cyber.github.io`
   - vorhandene A-Records oder Weiterleitungen auf den ALL-INKL-Webspace für diese Domain entfernen
   - MX-Einträge nur anfassen, wenn über die Domain E-Mail laufen soll (aktuell läuft die E-Mail über t-online)
2. **ALL-INKL KAS → Vertragsdaten**: Vertrag zur Auftragsverarbeitung (AVV) abschließen, falls noch nicht geschehen.
3. Wenn die DNS-Einträge greifen (bis zu 24 h): Repo → Settings → Pages → Custom domain `www.philosophiederneuenzeit.de` eintragen, nach der Prüfung „Enforce HTTPS“ aktivieren.
4. Repo → Settings → Secrets and variables → Actions → Variables: `CUSTOM_DOMAIN` = `true` anlegen und den Workflow neu starten. Ab dann wird ohne Unterpfad und ohne `noindex` gebaut.

## Offene Punkte (Freigabe durch die Autorin)

Einträge mit `pruefen:` in `src/data/werk.js` enthalten Unsicherheiten aus dem Entwurf (Seitenzahlen, Publikationsort, Datumsangaben). Die beiden Guardini-Fotos aus dem Entwurf sind eingebunden (Startseite, Forschung, Buchseite). Vor dem Livegang auf der echten Domain die Nutzungsrechte klären: Profilporträt beim Universitätsarchiv Tübingen, Schreibtischfoto Quelle unbekannt.
