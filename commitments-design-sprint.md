## Gabriella Gruppkontrakt:

### Mötesstruktur

Alla möten på Teams, kameran på.

#### Schemat:

| Mån | Tis | Ons               | Tors | Fre          |
| --- | --- | ----------------- | ---- | ------------ |
| X   | X   | 10–12, Intro möte | 9–12 | 13–16, Retro |

| Mån                     | Tis                             | Ons            | Tors                  | Fre                                                  |
| ----------------------- | ------------------------------- | -------------- | --------------------- | ---------------------------------------------------- |
| 10–13, Lämna till Jenni | 10–13, boka tid för överlämning | Överlämning x2 | 9–12, sprint 1 + plan | Uppföljning grupper kl.9 + kl.10, 13.00 retro + jobb |

| Mån            | Tis  | Ons            | Tors | Fre                               |
| -------------- | ---- | -------------- | ---- | --------------------------------- |
| 9.30, sprint 2 | 9.30 | 9.30, sprint 3 | 9.30 | 9.30 samling, Redovisning, 10 min |

### Hur jobbar vi?

Jobbar helst ensamma med issues, var och tar ansvar för att säga till i tid om man fastnar och behöver hjälp. När det kommer till att rensa upp / koppla ihop koden efter merges så kan vi göra det tillsammans i slutet av mötet v.b.
Om man är sjuk så SKA man inte jobba och man meddelar det via Discord, gruppens allmän chat. Om inspiration tryter eller man slår huvudet i väggen på en issue får man gärna säga till så att issues kan bytas ut och man får hjälp.

### Hur vill vi ha feedback:

- Diem: Skriftligt, möten, 1v1 – fritt val. Uppskattar feedback. Viktigt att man ger feedback på ett proffsigt sätt. Artigt och konstruktivt. Ju mer desto bättre.
- Victoria: Vänlig feedback, lite schyst men gärna rak och tydlig. Dock inte hårt. Kom gärna med ett förslag/ lösning på hur man kan förbättra och inte bara ”detta är ett problem”. Tar gärna feedback muntligt, text kan tolkas fel.
- Mustafa: Tar gärna feedback asap! Kom gärna med konstruktiv feedback, ge exempel/ förslag på vad som kan förbättras och hur. Text, muntligt alla former funkar.
- Amanda: Jag tar helst på ting jag frågar om specifikt men gärna säga till om man har funderingar eller förslag på förbättringar. Tar gärna feedback muntligt och sittandes tillsammans och titta på koden. Uppskattar framför allt om någon har förslag på hur man kan skriva om koden så den är kortare/ mer komprimerad. Undvika micro-managing.

### Vad är kunskapsnivåerna? Vad är kul? Vad är mindre roligt?

- Diem:
  - K: Den här utbildningen. CMS + WordPress.
  - R: Struktur + clean code + JS
  - MR: CSS + Sätta sig in i andras kod
- Victoria:
  - K: Den här utbildningen. Läst Java + databaser + WordPress.
  - R: När saker funkar + struktur + skriva clean code + sass + nestla
  - MR: Felsökning + kodkonfliker
- Mustafa:
  - K: Utbildningen + Har jobbat Agilt
  - R: Backend + Sass + Css + struktur + refaktorera
  - MR: Skapa design från scratch
- Amanda:
  - K: Utbildningen + C# + Python
  - R: Struktur + planering + refakutrera kod + hitta många lösningar på ett problem + lära nytt
  - MR: Css

### Vi skriver git-commits + merges enligt:

:gitmoji: förklarande namn på ändring <- lokal/ web commit  
:gitmoji: förklarande namn på feature <- merge meddelande

### Hur ofta ska vi comitta (till vår branch)?

När vi vill men lokalt, gärna när något är ”klart”. Ex. Issue: Skapa leave btn + koppla den på startsidan
C1 :gitmoji: html for leave btn
C2 :gitmoji: css for leave btn
C3 :gitmoji: function leaveStartPage written
C4 :gitmoji: correcting css + add eventlistener for leave btn
Pull Request :gitmoji: Added leavebtn on startPage + function.

### Hur, när och vem gör code reviews/ merges - när får man merge:a in i branchen? Vill vi alltid ha gruppmöte innan?

- Vi mergar under gruppmöten, om man har en correction på sin mergade branch kan man få merga en fix utanför mötena (obs behöver fortsatt minst 2 ok från gupp i pullrequest).
- Får inte röra dev om vi inte är i ett gruppmöte.
- Om man råkar jobba i dev + commita så kan man använda sig av kommandot:
  git checkout b- <branchname> för att skapa en ny branch.
- Skapa en dev branch som säkerhet. ”Nya main” – tas bort i slutet.
- Alla andra i gruppen reviewar.

### Hur hanterar vi att göra-listan/backlogen, ska vi använda projects + issues på GitHub?

Projekt + issues som vi sätter upp tillsammans. En issue om dagen, minst.

### Hur ser vår tidsplan ut, vad har vi för milstolpar och hur hanterar vi om vi märker att vi hamnar efter/före i planeringen?

- 2 dagars sprits från och med dagen efter överlämning.
- Retrospective på fredagar.
- Pratar igenom det på gruppmötet och delar ut issues på ett nytt sätt om vi sackar efter.
- Om vi är jättesnabba så har vi ett möte om nya förväntningar INNAN vi lägger till massa extra ting.
