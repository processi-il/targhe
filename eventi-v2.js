// VERSIONE 2 (con foto trovate online)
// Dati degli incontri BookCity 2026 – Piazza dei Mestieri
// Fonte: "bookcity milano piazza dei mestieri.docx"
// Per aggiungere una foto mancante: mettila in "foto persone/" e compila il campo foto/copertina.

const SEDE = "Piazza dei Mestieri · Via Privata Miramare 15, Milano";

const GIORNI = [
  { id: "ven20", nome: "Venerdì", data: "20 novembre", breve: "Ven 20" },
  { id: "lun23", nome: "Lunedì", data: "23 novembre", breve: "Lun 23" },
  { id: "mar24", nome: "Martedì", data: "24 novembre", breve: "Mar 24" },
  { id: "mer25", nome: "Mercoledì", data: "25 novembre", breve: "Mer 25" },
  { id: "gio26", nome: "Giovedì", data: "26 novembre", breve: "Gio 26" },
  { id: "ven27", nome: "Venerdì", data: "27 novembre", breve: "Ven 27" },
];

const F = "foto persone/";
const W = "foto web/"; // immagini trovate online (versione 2)

const EVENTI = [
  {
    giorno: "ven20", inizio: "11:00", fine: null,
    ospite: "Francesca Fagnani", ruolo: "Giornalista e conduttrice",
    titolo: "Fuori BookCity: un incontro speciale in videoconferenza",
    descrizione: "Un appuntamento speciale fuori programma: gli studenti incontrano Francesca Fagnani in videoconferenza.",
    tag: "Fuori BookCity · Videoconferenza",
    foto: F + "francesca fagnani foto.jpg",
    libro: null,
  },
  {
    giorno: "lun23", inizio: "9:30", fine: "11:30",
    ospite: "Anna Danesi", ruolo: "Capitana della Nazionale di pallavolo",
    link: "https://www.eventbrite.it/e/biglietti-anna-danesi-un-sogno-doro-2003121343862?aff=oddtdtcreator",
    titolo: "Un sogno d'oro: la mia storia, la pallavolo e le sfide del futuro",
    descrizione: "Sacrifici, vittorie olimpiche e lavoro di squadra: la capitana azzurra racconta come inseguire i propri sogni superando ogni ostacolo.",
    foto: F + "anna danesi foto.jpg",
    libro: { titolo: "Un sogno d'oro", editore: "Sperling & Kupfer", copertina: F + "anna danesi libro.jpg" },
  },
  {
    giorno: "lun23", inizio: "11:30", fine: "12:30",
    ospite: "Sonia Montegiove", ruolo: "Autrice ed esperta IT",
    link: "https://www.eventbrite.it/e/sonia-montegiove-ai-come-ansia-tickets-2003198707258?aff=oddtdtcreator&keep_tld=true",
    titolo: "AI come ansIA: comprendere l'Intelligenza Artificiale senza paure",
    descrizione: "Opportunità, rischi e miti dell'IA: una riflessione critica per trasformare l'ansia del cambiamento in conoscenza.",
    foto: F + "sonia montegiove foto.jpg",
    libro: { titolo: "AI come ansIA", editore: "Apogeo", copertina: F + "sonia montegiove libro.jpg" },
  },
  {
    giorno: "lun23", inizio: "11:30", fine: "12:30",
    ospite: "Angelo Pisani", ruolo: "Comico e comunicatore",
    link: "https://www.eventbrite.it/e/angelo-pisani-la-forza-delle-parole-tickets-2003198792513?aff=oddtdtcreator&keep_tld=true",
    titolo: "La forza delle parole: lezione-spettacolo sul linguaggio consapevole",
    descrizione: "Ironia e improvvisazione per riflettere sul peso delle parole, nella vita e sui social, contro pregiudizi e violenza verbale.",
    tag: "Lezione-spettacolo",
    foto: F + "angelo pisani foto.jpg",
    libro: null,
  },
  {
    giorno: "lun23", inizio: "11:30", fine: "12:30",
    ospite: "Gabriele Parpiglia", ruolo: "Autore e giornalista",
    link: "https://www.eventbrite.it/e/gabriele-parpiglia-sotto-attacco-di-panico-tickets-2003198926915?aff=oddtdtcreator&keep_tld=true",
    titolo: "Sotto attacco di panico: storia di burnout e ripartenza",
    descrizione: "Ansia, burnout e attacchi di panico: dalla sua storia personale, come riconoscere una malattia invisibile e ripartire.",
    foto: W + "gabriele parpiglia foto.jpg",
    libro: { titolo: "Sotto attacco di panico", editore: "Mursia", copertina: W + "gabriele parpiglia libro.jpg" },
  },
  {
    giorno: "lun23", inizio: "15:30", fine: "16:30",
    ospite: "Sonia Montegiove", ruolo: "Autrice e divulgatrice",
    link: "https://www.eventbrite.it/e/ai-genitori-guidare-i-figli-nellera-dellintelligenza-artificiale-tickets-2003198982080?aff=oddtdtcreator&keep_tld=true",
    titolo: "AI & Genitori: guidare i figli nell'era dell'Intelligenza Artificiale",
    descrizione: "Consigli pratici per accompagnare i figli in un uso consapevole dell'IA e dei media digitali.",
    tag: "Per i genitori",
    foto: F + "sonia montegiove foto.jpg",
    libro: { titolo: "AI come ansIA", editore: "Apogeo", copertina: F + "sonia montegiove libro.jpg" },
  },
  {
    giorno: "lun23", inizio: "17:30", fine: "19:00",
    ospite: "Nico Acampora", con: "con Elisabetta Soglio", ruolo: "Fondatore di PizzAut",
    link: "https://www.eventbrite.it/e/guardare-il-mondo-insieme-fratelli-sorelle-e-autismo-tickets-2003199080374?aff=oddtdtcreator&keep_tld=true",
    titolo: "Guardare il mondo insieme: fratelli, sorelle e autismo",
    descrizione: "In anteprima il nuovo libro: emozioni e ruolo dei fratelli e delle sorelle di ragazzi autistici, tra empatia e inclusione.",
    tag: "Anteprima",
    foto: F + "nico acampora foto.png",
    libro: { titolo: "Nuovo libro", editore: "In uscita a novembre", copertina: null },
  },
  {
    giorno: "mar24", inizio: "11:30", fine: "12:30",
    ospite: "Ivan Zazzaroni", ruolo: "Giornalista e scrittore",
    link: "https://www.eventbrite.it/e/per-vincere-domani-storie-di-sport-leadership-e-determinazione-tickets-2003199153593?aff=oddtdtcreator&keep_tld=true",
    titolo: "Per vincere domani: storie di sport, leadership e determinazione",
    descrizione: "Lo sport come metafora di vita: disciplina, gestione della sconfitta, leadership e lavoro di squadra raccontati attraverso i grandi campioni.",
    foto: F + "invan zazzaroni foto.jpg",
    libro: { titolo: "Per vincere domani", editore: "Mondadori", copertina: F + "ivan zazzaroni libro.jpg" },
  },
  {
    giorno: "mar24", inizio: "11:30", fine: "12:30",
    ospite: "Psicologa Cruda", ruolo: "Autrice e psicologa",
    link: "https://www.eventbrite.it/e/torno-subito-forse-viaggio-nella-psicologia-e-nella-mente-dei-giovani-tickets-2003199245869?aff=oddtdtcreator&keep_tld=true",
    titolo: "Torno subito (forse): viaggio nella psicologia e nella mente dei giovani",
    descrizione: "Un dialogo senza filtri su ansie della crescita, relazioni, social e gestione delle emozioni, con empatia e ironia.",
    foto: F + "psicologa cruda foto.webp",
    libro: { titolo: "Torno subito (forse)", editore: "Magazzini Salani", copertina: F + "psicologa cruda libro.jpg" },
  },
  {
    giorno: "mer25", inizio: "9:30", fine: "10:30",
    ospite: "Alessandra Spada", ruolo: "Scrittrice",
    link: "https://www.eventbrite.it/e/alessandra-spada-centomila-battiti-tickets-2004116591675?aff=oddtdtcreator",
    luogo: "Aula della scuola",
    titolo: "Centomila battiti: due vite in parallelo, al ritmo del cuore",
    descrizione: "Emma e Alice, due ragazze le cui vite scorrono in parallelo fino a incontrarsi: un romanzo sull'adolescenza, le emozioni e il coraggio di ascoltare il proprio cuore.",
    foto: W + "alessandra spada foto.jpg",
    libro: { titolo: "Centomila battiti", editore: "Feltrinelli", copertina: W + "alessandra spada libro.jpg" },
  },
  {
    giorno: "mer25", inizio: "10:30", fine: "11:30",
    ospite: "Rajaa Bezzaz", ruolo: "Inviata e autrice",
    link: "https://www.eventbrite.it/e/rajaa-bezzaz-araba-felice-riscatto-identita-e-storie-di-rinascita-tickets-2003199363220?aff=oddtdtcreator&keep_tld=true",
    titolo: "Araba felice: riscatto, identità e storie di rinascita",
    descrizione: "Riscatto personale, incontro tra culture e superamento dei pregiudizi: un racconto intenso sulla costruzione della propria identità.",
    foto: F + "rajaa bezzaz foto.jpg",
    libro: { titolo: "Araba felice", editore: "Cairo Publishing", copertina: F + "rajaa bezzaz libro.jpg" },
  },
  {
    giorno: "mer25", inizio: "11:30", fine: "12:30",
    ospite: "Sabrina Zanoni", ruolo: "Autrice",
    link: "https://www.eventbrite.it/e/girasoli-la-bellezza-della-rinascita-e-delle-seconde-possibilita-tickets-2003201830600?aff=oddtdtcreator&keep_tld=true",
    titolo: "The Little Free Library: la casetta dei libri liberi",
    descrizione: "Le casette dei libri liberi: prendi un libro, lascia un libro. Un incontro sul piacere di condividere la lettura e far crescere una comunità di lettori.",
    foto: F + "sabrina zanoni foto.jpg",
    libro: { titolo: "The Little Free Library – La casetta dei libri liberi", editore: "", copertina: null },
  },
  {
    giorno: "mer25", inizio: "11:30", fine: "12:30",
    ospite: "Fabio Geda", ruolo: "Scrittore",
    link: "https://www.eventbrite.it/e/nel-mare-ci-sono-i-coccodrilli-coraggio-speranza-e-futuro-tickets-2003201924882?aff=oddtdtcreator&keep_tld=true",
    titolo: "Nel mare ci sono i coccodrilli: coraggio, speranza e futuro",
    descrizione: "La storia vera di Enaiatollah Akbari, fuggito bambino dall'Afghanistan: immigrazione, diritti umani e resilienza.",
    foto: F + "fabio geda foto.jpg",
    libro: { titolo: "Nel mare ci sono i coccodrilli", editore: "Baldini + Castoldi", copertina: F + "fabio geda libro.jpg" },
  },
  {
    giorno: "gio26", inizio: "11:30", fine: "12:30",
    ospite: "Diego Passoni", ruolo: "Conduttore e scrittore",
    link: "https://www.eventbrite.it/e/isola-ritrovare-se-stessi-tra-appartenenza-e-liberta-tickets-2003201996095?aff=oddtdtcreator&keep_tld=true",
    titolo: "Isola: ritrovare se stessi tra appartenenza e libertà",
    descrizione: "Un viaggio narrativo ed emotivo sul senso di comunità, sulla ricerca della propria identità e sul coraggio di essere unici senza paura dei giudizi altrui. Un confronto vivace sul valore della diversità.",
    foto: F + "diego passoni foto.jpg",
    libro: { titolo: "Isola", editore: "Mondadori", copertina: F + "diego passoni libro.jpg" },
  },
  {
    giorno: "ven27", inizio: "11:30", fine: "12:30",
    ospite: "Samuele Cornalba", ruolo: "Autore",
    link: "https://www.eventbrite.it/e/bagai-il-racconto-della-provincia-dei-sogni-e-delladolescenza-tickets-2003202027188?aff=oddtdtcreator",
    titolo: "Bagai: il racconto della provincia, dei sogni e dell'adolescenza",
    descrizione: "Paure, speranze e desideri di una generazione: la vita di provincia e la scoperta della propria voce nel mondo.",
    foto: F + "samuele cornalba foto.jpg",
    libro: { titolo: "Bagai", editore: "Einaudi", copertina: F + "samuele cornalba libro.jpg" },
  },
  {
    giorno: "ven27", inizio: "11:30", fine: "12:30",
    ospite: "Ilaria Camilletti", ruolo: "Autrice",
    link: "https://www.eventbrite.it/e/ilaria-nella-giungla-sfide-orientamento-e-crescita-giovanile-tickets-2003202182653?aff=oddtdtcreator&keep_tld=true",
    titolo: "Ilaria nella giungla: sfide, orientamento e crescita giovanile",
    descrizione: "La giungla dell'adolescenza tra insicurezze, pressioni sociali e la scelta del proprio percorso, con consapevolezza e ironia.",
    foto: F + "ilaria camilletti foto.jpg.jpeg",
    libro: { titolo: "Ilaria nella giungla", editore: "Accento", copertina: F + "ilaria camilletti libro.jpg.jpeg" },
  },
  {
    giorno: "ven27", inizio: "16:00", fine: "17:00",
    ospite: "Roberta Tagliavini", ruolo: "Antiquaria e autrice",
    link: "https://www.eventbrite.it/e/la-mercante-di-brera-passione-talento-ed-estro-milanese-tickets-2003202695186?aff=oddtdtcreator&keep_tld=true",
    titolo: "La mercante di Brera: passione, talento ed estro milanese",
    descrizione: "Una storia di ribellione e passione: come trasformare una vocazione creativa in un'eccellenza riconosciuta nel mondo.",
    foto: F + "roberta tagliavini foto.jpg",
    libro: { titolo: "La mercante di Brera", editore: "Sperling & Kupfer", copertina: F + "roberta tagliavini libro.jpg" },
  },
];

// Helpers condivisi
function esc(s) {
  return String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
function iniziali(nome) {
  return nome.split(/\s+/).map(p => p[0]).join("").slice(0, 2).toUpperCase();
}
function orario(e) {
  return e.fine ? `${e.inizio} – ${e.fine}` : `ore ${e.inizio}`;
}
function fotoHTML(e, cls) {
  return e.foto
    ? `<img class="${cls}" src="${encodeURI(e.foto)}" alt="${esc(e.ospite)}">`
    : `<div class="${cls} placeholder">${iniziali(e.ospite)}</div>`;
}
function splitTitolo(t) {
  const i = t.indexOf(":");
  return i > 0 ? [t.slice(0, i), t.slice(i + 1).trim()] : [t, ""];
}
