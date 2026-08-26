# RAL → Netto

## Demo live

[Apri il calcolatore RAL → Netto](https://ral-netto-jet-hr.ciaoydr.chatgpt.site)

![Anteprima del calcolatore](public/og.png)

Prototipo di calcolatore della retribuzione netta per un impiegato privato, residente per tutto il 2026 in una delle cinque città disponibili, senza familiari a carico, altri redditi o agevolazioni.

L'utente può scegliere RAL, 12/13/14 mensilità, contratto a tempo determinato o indeterminato e città fra Milano, Roma, Napoli, Bologna e Torino.

## Modello di calcolo

1. Contributi dipendente: 9,19% della RAL, più 1% sulla quota oltre 56.224 €.
2. Imponibile IRPEF: RAL meno contributi.
3. IRPEF lorda progressiva 2026: 23% fino a 28.000 €, 33% da 28.000 € a 50.000 €, 43% oltre 50.000 €.
4. Detrazioni da lavoro dipendente e ulteriore detrazione 2026 fra 20.000 € e 40.000 €.
5. Aliquote regionali 2026 e aliquote comunali 2025, ultimo dato pubblicato, specifiche per la città scelta.
6. Somma esente per lavoratori dipendenti con redditi fino a 20.000 €.

La scelta del contratto applica le detrazioni minime previste: 690 € per l'indeterminato e 1.380 € per il determinato. Nel caso simulato di 365 giorni la detrazione ordinaria è già superiore, quindi normalmente il netto non cambia. L'eventuale contributo addizionale NASpI del contratto a termine è a carico del datore e non viene sottratto al dipendente.

Il calcolo è annuale e non replica arrotondamenti, competenze o conguagli di un cedolino reale. Sono esclusi trattamento integrativo sotto 15.000 €, particolarità del CCNL, dimensione aziendale, premi, fringe benefit, familiari, deduzioni e altri redditi.


## Cosa mostra il risultato

- netto annuale e netto medio per mensilità;
- contributi previdenziali a carico del dipendente;
- imponibile fiscale;
- IRPEF lorda, detrazioni e IRPEF netta;
- addizionale regionale e comunale;
- incidenza complessiva delle trattenute.

## Tecnologie

- React e TypeScript per interfaccia e logica;
- Vinext/Vite per sviluppo e compilazione;
- CSS per il design responsive;
- OpenAI Sites per l'hosting della demo.

La logica è leggibile direttamente in app/page.tsx: non utilizza servizi esterni o formule nascoste.

## Limiti dichiarati

Il prototipo non simula rapporti iniziati durante l'anno, familiari a carico, altri redditi, premi, fringe benefit, specificità del CCNL, arrotondamenti mensili o tutte le operazioni di conguaglio di un cedolino reale.

## Avvio locale

```bash
pnpm install
pnpm dev
```

## Fonti principali

- Legge 30 dicembre 2025, n. 199 (Legge di Bilancio 2026)
- INPS, circolare n. 6 del 30 gennaio 2026
- Portali tributari ufficiali di Lombardia, Lazio, Campania, Emilia-Romagna e Piemonte
- Dipartimento delle Finanze, banca dati delle addizionali comunali IRPEF

## Nota

I risultati sono stime orientative costruite per un esercizio di product building e non costituiscono consulenza fiscale, previdenziale o del lavoro.
