+++
title = 'Clearfake'
date = 2024-09-11T00:19:40+02:00
draft = false
type = 'post'
tags = ['malware']
showTableOfContents= true
+++

## Analisi Malware
Questa tipologia di "malware" che è stato riscontrato appartiene alla categoria dei **Clearfake**.
La tecnica sfruttata dagli attaccanti è: un pop-up che mostra alle potenziali vittime un messaggio di errore e suggerisce di copiare e incollare uno script dannoso nel terminale di PowerShell o nella finestra di dialogo Run di Windows. Questo script, una volta eseguito, avvia il malware.

Nel particolare si tratta della sottocategoria "**ClickFix**" e utilizza un'iniezione su siti web compromessi. I comandi di PowerShell scaricano ed eseguono un **file MSI** o uno script VBS, causando infezioni e data leaking.

In termini più semplici, alcuni informazioni, principalmente *cookies e password* sono stati inviati non appena il comando è stato eseguito, tramite alcuni file zip che sono stati creati nella zona della cache del Browser Google Chrome.
### Comando
Di seguito viene spiegato, in modo semplificato, cosa succede dopo l'inserimento del comando nella Shell di Windows
1. **Scarica da Internet**: Il comando scarica delle informazioni da un sito web. Pensa a quando scarichi un file dal tuo browser, ma in questo caso, lo fa automaticamente senza che tu lo veda.
2. **Finge di essere un Browser**: Quando scarica queste informazioni, finge di essere un browser specifico (come Google Chrome) per evitare di essere bloccato dal sito web.
3. **Esegue quello che scarica**: Dopo aver scaricato queste informazioni, le esegue automaticamente come se fossero istruzioni per il computer. Questo è molto pericoloso perché queste istruzioni potrebbero fare qualsiasi cosa sul tuo computer.
4. **Pulisce la finestra del comando**: Cancella quello che è stato visualizzato nella finestra dove hai eseguito il comando, così non puoi vedere cosa è successo.
5. **Cancella la clipboard**: La clipboard è dove il computer memorizza le cose che copi, come testo o immagini. Questo comando cancella quello che c'era nella clipboard, rendendo difficile vedere cosa è stato copiato lì prima.
6. **Esegue il comando di nuovo in modo nascosto**: Combina tutti questi passaggi in un unico comando e poi lo esegue di nuovo in una finestra nascosta, così non puoi vedere cosa sta facendo.
7. **Esce**: Chiude la finestra del comando.
#### Perché è Pericoloso
Questo comando è pericoloso perché:
- **Scarica e esegue codice** da internet senza che tu sappia cosa sta facendo esattamente.
- **Nasconde le sue tracce** cancellando la finestra del comando e la clipboard.
- **Funziona in modo nascosto**, quindi non puoi vedere facilmente cosa sta succedendo.
### Funzionamento
![clearfake funzionamento](/images/clearfake/clearfake_funzionamento.jpg "ClearFake funzionamento")

[link immagine](https://www.bridewell.com/insights/blogs/detail/clearfake-campaign)
### Catena
![catena](/images/clearfake/chain.jpg "Catena")

[link immagine](https://www.securityopenlab.it/news/3793/errori-del-browser-no-e-un-attacco-malware.html)
## Portatile
### Scansione del portatile
Sono stati utilizzati diversi antivirus per la scansione.
#### AVG
[link](https://www.avg.com/it-it/homepage#pc)
Dalla scansione eseguita il 20/05/2024 alle 09:24 sono stati trovati 3 elementi, tutti spostati in automaticamente quarantena.

| Nome tipo               | File infetto | Azione     | Orario           |
| ----------------------- | ------------ | ---------- | ---------------- |
| HTML:ClearFake-C \[Trj] | f_0012f2     | Quarantena | 20/05/2024 09:24 |
| HTML:ClearFake-C \[Trj] | f_0012dd     | Quarantena | 20/05/2024 09:24 |
| HTML:ClearFake-C \[Trj] | f_001c80     | Quarantena | 20/05/2024 09:24 |

Questi file contengono tutte le informazioni che sono state inviate agl'aggressori, sono stati **eliminati manualmente** dalla quarantena, quindi eliminati completamente dal computer.
#### MalwareBites
[link](https://it.malwarebytes.com/)
Scansione completa di 7 ore e 53 minuti con il giorno 21/05/2024:

| Elementi analizzati | Elementi rilevati |
| ------------------- | ----------------- |
| 873,526             | 0                 |

Non presenta minacce.
#### Microsoft Defender
Analisi completa effettuata il 21/05/2024, ed ha riscontrato:

| Rilevato               | Stato   |
| ---------------------- | ------- |
| HackTool:Win32/Patcher | Rimosso |

Questo programma presenta comportamenti potenzialmente indesiderati.
#### RougueKiller
[link](https://www.adlice.com/roguekiller/)
Scansione completa eseguita il 23/05/2024:

| Elementi analizzati | Elementi rilevati |
| ------------------- | ----------------- |
| 115506              | 7                 |

Che sono i seguenti:

| Nome tipo                       | Azione     | Rilevamento              |
| ------------------------------- | ---------- | ------------------------ |
| DriverToolKit                   | Quarantena | PUP.DriverToolKit        |
| DriverToolKit                   | Quarantena | PUP.DriverToolKit        |
| MacPaw Inc                      | Quarantena | PUP.CleanMyPC            |
| TSRProSetting                   | Quarantena | PUP.AdvancedSystemRepair |
| (x64) ForumerlT                 | Quarantena | PUP.Gen1                 |
| (x64) ConsentPrompBehaviorAdmin | Quarantena | PUM.Policies             |
| (x64) {A07E5BFF-B16C-4ABA-A30F} | Quarantena | PUP.Gen0                 |

Tutti i problemi che sono stati riscontrati sono stati eliminati manualmente.
### Precauzioni aggiuntive
Si ritiene il ora il computer sia pulito, quindi non è stata eseguita una formattazione.

Oltre alle scansioni eseguite, è stata cancellata tutta la cronologia e tutti i cookies presenti su Google Chrome, questo perché potrebbero esserci rimasti alcuni file infetti non rilevati dagl'antivirus.

Sarà necessario cambiare tutte le password dei siti salvati nel gestore di password di Google Chrome, perché potrebbero essere state inviate agl'attaccanti. La probabilità che ci sia un accesso non autorizzato è alta. (Questa parte è stata completata successivamente insieme con il cliente.)
## Blog
Il blog presentava il malware subito dopo la sua apertura, per risolvere questa inconvenienza è stato fatto un controllo approfondito del **file system**, che presentava una coppia di file, presenti su **ogni cartella e sottocartella**, che rappresentavano il template del *ClearFake*, con uno script bash che cambiava i permessi di modifica, per evitare l'eliminazione del file.
### Backup Issues
Per risolvere il problema, l'idea migliore era ripristinare un backup precedente all'accaduto, ma anche tutti i **backup erano stati eliminati dall'attaccante**, tranne uno del 15/05/2024.
Quest'ultimo presentavo molti file sospetti, ma risultava essere meno restrittivo per eliminazione.
### Risoluzione
Dopo aver ripristinato il backup sono state eseguite le seguenti operazioni:
1. **Eliminazione** file sospetti che non permettevano il corretto funzionamento del sito web;
2. **Ri-pubblicazione** del blog tramite il cambiamento dei permessi nella cartella *public_html* per permettere la visualizzazione e indicizzazione;
3. **Pulizia plug-in**: sono stati rimossi molti plug-in non utilizzati che potrebbero compromettere il sistema perché obsoleti, in particolare uno di essi si presentava in *duplice* copia, chiamato "**Wordpress Core**";
4. **Aggiornamento** temi e plug-in usati, sono stati anche rimossi temi inutilizzati;
5. **Abilitazione** aggiornamenti automatici;
6. **Cambiamento** password per accesso Wordpress.
### Conclusione
Si presuppone che il malware sia entrato tramite un plug-in obsoleto o non aggiornato, ed abbiamo infettato tutte le cartelle con il ClearFake malware.
Ora il sito è perfettamente funzionante e più sicuro.

ps: per motivi di riservatezza non fornirò il link ne il nome del sito.