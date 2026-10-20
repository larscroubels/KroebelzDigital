// Kroebelz Digital: translations, cookie consent, navigation and page interactions.

const CONTACT_EMAIL = "info@kroebelzdigital.be";
const LANG_STORAGE_KEY = "kroebelz:lang";
const CONSENT_STORAGE_KEY = "kroebelz:consent";
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE = 182 * 24 * 60 * 60 * 1000;
const DEFAULT_LANG = "nl";
const INTERNATIONAL_LANG = "en";
// Set to false once Kroebelz Digital has officially launched.
const SHOW_LAUNCH_NOTICE = true;
const LAUNCH_STORAGE_KEY = "kroebelz:launch";

const translations = {
  nl: {
    "meta.homeTitle": "Kroebelz Digital | Websites die indruk maken",
    "meta.homeDescription":
      "Kroebelz Digital ontwerpt en bouwt moderne, snelle websites voor ondernemers en zelfstandigen. Gevestigd in Ingelmunster, België.",
    "meta.workTitle": "Mijn werk | Kroebelz Digital",
    "meta.workDescription":
      "Een selectie van websites ontworpen en gebouwd door Kroebelz Digital uit Ingelmunster, België.",
    "meta.privacyTitle": "Privacybeleid | Kroebelz Digital",
    "meta.privacyDescription": "Lees welke persoonsgegevens Kroebelz Digital verwerkt, waarom en welke rechten je hebt.",
    "meta.cookieTitle": "Cookiebeleid | Kroebelz Digital",
    "meta.cookieDescription": "Lees welke gegevens de website van Kroebelz Digital op je toestel bewaart en hoe je dat zelf bepaalt.",

    "nav.skip": "Naar de inhoud",
    "nav.label": "Hoofdmenu",
    "nav.home": "Kroebelz Digital, naar het begin",
    "nav.homePage": "Kroebelz Digital, naar de homepage",
    "nav.language": "Taal kiezen",
    "nav.toggle": "Menu openen",
    "nav.toggleClose": "Menu sluiten",
    "nav.services": "Diensten",
    "nav.about": "Over mij",
    "nav.process": "Werkwijze",
    "nav.work": "Mijn werk",
    "nav.contact": "Contact",

    "hero.status": "Beschikbaar voor nieuwe projecten",
    "hero.title": "Websites die <em>indruk</em> maken.",
    "hero.lead":
      "Ik ontwerp en bouw moderne, snelle websites die je bedrijf online laten opvallen. Doordacht design, een vlotte gebruikservaring en een persoonlijke aanpak.",
    "hero.primaryCta": "Vertel me over je project",
    "hero.secondaryCta": "Bekijk mijn werk",
    "hero.point1": "Ontwerp op maat",
    "hero.point2": "Perfect op elk scherm",
    "hero.point3": "Persoonlijke aanpak",
    "hero.mockUrl": "jouwbedrijf.be",

    "services.eyebrow": "Wat ik voor je doe",
    "services.title": "Goed design is meer dan <em>er mooi uitzien.</em>",
    "services.intro":
      "Je website moet er sterk uitzien, vlot aanvoelen en op elk scherm perfect werken. Daar zorg ik voor.",
    "services.design.title": "Webdesign",
    "services.design.text":
      "Een eigen, herkenbare stijl en een heldere opbouw die bij je merk passen en meteen een sterke eerste indruk maken.",
    "services.development.title": "Webontwikkeling",
    "services.development.text":
      "Responsieve websites in HTML, CSS en JavaScript: snel, toegankelijk en tot in de kleinste details afgewerkt.",
    "services.refresh.title": "Website vernieuwen",
    "services.refresh.text":
      "Je huidige website een frisse look geven, de gebruikservaring verbeteren en alles weer helemaal bij de tijd brengen.",

    "about.imageAlt": "Portret van Lars Croubels, oprichter van Kroebelz Digital",
    "about.role": "Designer & developer",
    "about.chipTop": "Design met een doel.",
    "about.chipBottom": "Gebouwd voor mensen.",
    "about.eyebrow": "Even voorstellen",
    "about.title": "Hoi, ik ben Lars.<br><em>Ik laat het web voor jou werken.</em>",
    "about.lead":
      "Ik ben 24, woon in Ingelmunster en bouw met passie websites die er goed uitzien én echt iets opleveren.",
    "about.copy1":
      "Ik studeerde Digital Design aan Howest, waar ik mijn oog voor vormgeving en digitale ervaringen heb aangescherpt. Ideeën tot leven brengen doe ik het liefst: van de eerste schets tot een website die klaar is voor de wereld.",
    "about.copy2":
      "Een goed project begint voor mij met luisteren. Ik wil begrijpen wat je nodig hebt en iets maken dat klopt, voor jou én voor je klanten.",
    "about.skillsLabel": "Vaardigheden",
    "about.cta": "Heb je een idee? Laten we praten",

    "process.eyebrow": "Eenvoudig van begin tot eind",
    "process.title": "Een goede website begint met een <em>goed gesprek.</em>",
    "process.intro":
      "Geen ingewikkelde trajecten. We werken stap voor stap samen en maken van jouw idee iets tastbaars.",
    "process.step1.title": "Kennismaking",
    "process.step1.text": "We bespreken je idee, je doelen en wat je website voor je moet doen.",
    "process.step2.title": "Plan & ontwerp",
    "process.step2.text": "Ik werk de structuur en de visuele richting uit, helemaal afgestemd op je bedrijf.",
    "process.step3.title": "Bouwen & verfijnen",
    "process.step3.text": "Je website krijgt vorm en samen schaven we aan de details.",
    "process.step4.title": "Lancering",
    "process.step4.text": "Ik test alles grondig en zet je website online, klaar voor je eerste bezoekers.",
    "process.note": "Van eerste gesprek tot lancering duurt het meestal ongeveer een week.",

    "contact.eyebrow": "Laten we iets moois maken",
    "contact.title": "Heb je een project <em>in gedachten?</em>",
    "contact.intro":
      "Vertel me kort over je idee. Of je nu een volledig nieuwe website zoekt of je huidige wil verbeteren: ik hoor graag van je.",
    "contact.emailLabel": "Mail me",
    "contact.whatsappLabel": "Stuur een bericht via WhatsApp",
    "contact.locationLabel": "Gevestigd in",
    "contact.location": "Ingelmunster, België",

    "form.title": "Projectaanvraag",
    "form.required": "* Verplichte velden",
    "form.name": "Naam",
    "form.email": "E-mailadres",
    "form.emailPlaceholder": "naam@bedrijf.be",
    "form.project": "Waarmee kan ik je helpen?",
    "form.projectNew": "Een nieuwe website",
    "form.projectRedesign": "Een vernieuwde website",
    "form.projectOther": "Iets anders",
    "form.message": "Je bericht",
    "form.messagePlaceholder": "Vertel kort iets over je bedrijf, je idee en wat je voor ogen hebt…",
    "form.submit": "Verstuur je aanvraag",
    "form.note": "Je e-mailprogramma opent met je bericht al ingevuld.",
    "form.error.nameMissing": "Vul je naam in.",
    "form.error.emailMissing": "Vul je e-mailadres in.",
    "form.error.emailInvalid": "Dit e-mailadres lijkt niet te kloppen. Kijk je het even na?",
    "form.error.messageMissing": "Vertel me kort iets over je project.",
    "form.error.summary": "Bijna klaar: vul de gemarkeerde velden nog even aan.",
    "form.status.opened":
      "Je e-mailprogramma zou nu moeten openen. Verstuur de mail om je aanvraag af te ronden. Opent er niets? Mail dan rechtstreeks naar info@kroebelzdigital.be.",
    "form.mail.subject": "Projectaanvraag: {project}",
    "form.mail.body":
      "Hallo Lars,\n\n{message}\n\nProject: {project}\nNaam: {name}\nE-mail: {email}\n\nMet vriendelijke groeten,\n{name}",

    "footer.blurb": "Webdesign en webontwikkeling voor ondernemers die online willen opvallen.",
    "footer.navTitle": "Navigatie",
    "footer.contactTitle": "Contact",
    "footer.legalTitle": "Juridisch",
    "footer.privacy": "Privacybeleid",
    "footer.cookies": "Cookiebeleid",
    "footer.preferences": "Privacyvoorkeuren",
    "footer.rights": "Alle rechten voorbehouden.",
    "footer.backToTop": "Terug naar boven",
    "whatsapp.label": "Stuur Lars een bericht via WhatsApp",

    "work.title": "Mijn <em>projecten</em>",
    "work.intro": "Een selectie van websites waaraan ik gewerkt heb. Klik op een project voor meer uitleg en een live voorbeeld.",
    "work.dpk.tag": "Hobbyproject",
    "work.dpk.imageAlt": "De homepage van dpkservice op een laptop",
    "work.dpk.summary":
      "Website voor DPK Service, een technische dienst voor onderhoud en herstellingen van rollend materieel, machines, aanhangwagens en ramen. Een krachtig, donker design dat de diensten meteen centraal zet.",
    "work.dpk.scope": "Webdesign · Webontwikkeling",
    "work.view": "Bekijk project",
    "work.visit": "Bezoek website",
    "work.liveLoad": "Live voorbeeld laden",
    "work.liveNote":
      "Het live voorbeeld laadt de echte website van een externe server, die zelf cookies kan plaatsen. Door het te laden, sta je externe media toe. Dat kun je altijd wijzigen via de privacyvoorkeuren.",
    "work.fallback": "Zie je niets? Sommige websites laten zich niet in een andere pagina tonen.",
    "work.openTab": "Open in een nieuw tabblad",
    "work.soonTitle": "Binnenkort meer",
    "work.soonText": "Nieuwe projecten zijn in de maak.",
    "work.nextEyebrow": "Volgende stap",
    "work.nextTitle": "Klaar om je project <em>te starten?</em>",
    "work.nextIntro": "Laten we samen iets bouwen waar je bedrijf echt mee vooruit kan.",
    "work.nextCta": "Neem contact op",
    "work.close": "Sluiten",
    "work.frameTitle": "Live voorbeeld van de website",

    "legal.eyebrow": "Juridisch",
    "legal.updated": "Laatst bijgewerkt op 20 oktober 2026",
    "privacy.title": "Privacybeleid",
    "privacy.lead":
      "Je privacy is belangrijk. Hier lees je welke persoonsgegevens ik verwerk, waarom ik dat doe en welke rechten je hebt. Ik houd het bewust eenvoudig: deze website volgt je niet en verzamelt niet meer dan nodig.",
    "cookies.title": "Cookiebeleid",
    "cookies.lead": "Hier lees je welke gegevens deze website op je toestel bewaart, waarom, en hoe je zelf bepaalt wat je toestaat.",

    "consent.label": "Cookiemelding",
    "consent.title": "Jouw privacy, jouw keuze",
    "consent.text":
      "Deze website gebruikt geen tracking- of advertentiecookies. Met jouw toestemming onthoud ik je taalkeuze en laad ik live voorbeelden van externe websites.",
    "consent.policyLink": "Lees het cookiebeleid",
    "consent.acceptAll": "Alles accepteren",
    "consent.rejectAll": "Alles weigeren",
    "consent.customize": "Voorkeuren instellen",
    "consent.prefsTitle": "Privacyvoorkeuren",
    "consent.prefsIntro":
      "Kies zelf wat deze website op je toestel mag bewaren en welke externe inhoud ze mag laden. Je kunt je keuze altijd aanpassen via ‘Privacyvoorkeuren’ onderaan elke pagina.",
    "consent.necessaryTitle": "Strikt noodzakelijk",
    "consent.necessaryText":
      "Nodig om de website te laten werken en je cookiekeuze te onthouden. Deze opslag kun je niet uitschakelen.",
    "consent.alwaysOn": "Altijd actief",
    "consent.preferencesTitle": "Voorkeuren",
    "consent.preferencesText": "Onthoudt je taalkeuze, zodat de website bij je volgende bezoek meteen in jouw taal opent.",
    "consent.mediaTitle": "Externe media",
    "consent.mediaText":
      "Laadt inhoud van andere websites, zoals de live voorbeelden in mijn portfolio. Die websites kunnen zelf cookies plaatsen.",
    "consent.save": "Keuze opslaan",
    "consent.saved": "Je privacyvoorkeuren zijn opgeslagen.",

    "launch.badge": "Binnenkort",
    "launch.title": "Kroebelz Digital start <em>binnenkort</em> officieel op.",
    "launch.text":
      "Kijk gerust al rond. Heb je nu al een project in gedachten? Neem contact op, dan plannen we het samen in.",
    "launch.cta": "Neem contact op",
    "launch.dismiss": "Verder rondkijken",
  },

  en: {
    "meta.homeTitle": "Kroebelz Digital | Websites that make an impression",
    "meta.homeDescription":
      "Kroebelz Digital designs and builds modern, fast websites for businesses and independent professionals. Based in Ingelmunster, Belgium.",
    "meta.workTitle": "My work | Kroebelz Digital",
    "meta.workDescription": "Selected websites designed and built by Kroebelz Digital in Ingelmunster, Belgium.",
    "meta.privacyTitle": "Privacy policy | Kroebelz Digital",
    "meta.privacyDescription": "Which personal data Kroebelz Digital processes, why, and what your rights are.",
    "meta.cookieTitle": "Cookie policy | Kroebelz Digital",
    "meta.cookieDescription": "What the Kroebelz Digital website stores on your device and how you stay in control.",

    "nav.skip": "Skip to content",
    "nav.label": "Main menu",
    "nav.home": "Kroebelz Digital, back to top",
    "nav.homePage": "Kroebelz Digital, go to homepage",
    "nav.language": "Choose language",
    "nav.toggle": "Open menu",
    "nav.toggleClose": "Close menu",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.work": "Work",
    "nav.contact": "Contact",

    "hero.status": "Currently taking on new projects",
    "hero.title": "Websites that make an <em>impression</em>.",
    "hero.lead":
      "I design and build modern, fast websites that help your business stand out online. Thoughtful design, a seamless experience and a personal approach from start to finish.",
    "hero.primaryCta": "Start your project",
    "hero.secondaryCta": "See my work",
    "hero.point1": "Tailor-made design",
    "hero.point2": "Flawless on every screen",
    "hero.point3": "A personal approach",
    "hero.mockUrl": "yourbusiness.com",

    "services.eyebrow": "What I do",
    "services.title": "Good design goes <em>beyond good looks.</em>",
    "services.intro":
      "Your website should look sharp, feel effortless and work flawlessly on every screen. That's where I come in.",
    "services.design.title": "Web design",
    "services.design.text":
      "A distinctive look and a clear structure that fit your brand and make a strong first impression.",
    "services.development.title": "Web development",
    "services.development.text":
      "Responsive sites built with HTML, CSS and JavaScript: fast, accessible and polished down to the last detail.",
    "services.refresh.title": "Website refresh",
    "services.refresh.text":
      "Give your current site a fresh look, a smoother user experience and a feel that's right up to date.",

    "about.imageAlt": "Portrait of Lars Croubels, founder of Kroebelz Digital",
    "about.role": "Designer & developer",
    "about.chipTop": "Design with purpose.",
    "about.chipBottom": "Built for people.",
    "about.eyebrow": "About me",
    "about.title": "Hi, I'm Lars.<br><em>I make the web work for you.</em>",
    "about.lead":
      "I'm a 24-year-old digital creative from Ingelmunster, Belgium, who loves building websites that look great and actually deliver.",
    "about.copy1":
      "I studied Digital Design at Howest, where I sharpened my eye for visual design and digital experiences. Bringing ideas to life is what I enjoy most, from the very first sketch to a website that's ready for launch.",
    "about.copy2":
      "For me, every good project starts with listening. I want to understand what you need and build something that feels right, for you and for your customers.",
    "about.skillsLabel": "Skills",
    "about.cta": "Got an idea? Let's talk",

    "process.eyebrow": "Simple from start to finish",
    "process.title": "Every great website starts with a <em>good conversation.</em>",
    "process.intro": "No complicated process. We work together step by step to turn your idea into something real.",
    "process.step1.title": "Let's talk",
    "process.step1.text": "We talk through your idea, your goals and what your website needs to achieve.",
    "process.step2.title": "Plan & design",
    "process.step2.text": "I map out the structure and visual direction, tailored to your business.",
    "process.step3.title": "Build & refine",
    "process.step3.text": "Your website takes shape, and we fine-tune the details together.",
    "process.step4.title": "Launch",
    "process.step4.text": "I test everything thoroughly and take your site live, ready for its first visitors.",
    "process.note": "From first conversation to launch usually takes about a week.",

    "contact.eyebrow": "Let's build something good",
    "contact.title": "Got a project <em>in mind?</em>",
    "contact.intro":
      "Tell me a bit about your idea. Whether you need a brand-new website or want to improve the one you have, I'd love to hear from you.",
    "contact.emailLabel": "Email me",
    "contact.whatsappLabel": "Message me on WhatsApp",
    "contact.locationLabel": "Based in",
    "contact.location": "Ingelmunster, Belgium",

    "form.title": "Project enquiry",
    "form.required": "* Required fields",
    "form.name": "Name",
    "form.email": "Email address",
    "form.emailPlaceholder": "name@company.com",
    "form.project": "What can I help you with?",
    "form.projectNew": "A new website",
    "form.projectRedesign": "A website redesign",
    "form.projectOther": "Something else",
    "form.message": "Your message",
    "form.messagePlaceholder": "A few words about your business, your idea and what you have in mind…",
    "form.submit": "Send enquiry",
    "form.note": "This opens your email app with your message ready to send.",
    "form.error.nameMissing": "Please enter your name.",
    "form.error.emailMissing": "Please enter your email address.",
    "form.error.emailInvalid": "That email address doesn't look quite right. Mind checking it?",
    "form.error.messageMissing": "Please tell me a little about your project.",
    "form.error.summary": "Almost there. Please complete the highlighted fields.",
    "form.status.opened":
      "Your email app should open now. Send the email to complete your enquiry. Nothing happening? Email me directly at info@kroebelzdigital.be.",
    "form.mail.subject": "Project enquiry: {project}",
    "form.mail.body":
      "Hi Lars,\n\n{message}\n\nProject: {project}\nName: {name}\nEmail: {email}\n\nKind regards,\n{name}",

    "footer.blurb": "Web design and development for businesses that want to stand out online.",
    "footer.navTitle": "Navigate",
    "footer.contactTitle": "Contact",
    "footer.legalTitle": "Legal",
    "footer.privacy": "Privacy policy",
    "footer.cookies": "Cookie policy",
    "footer.preferences": "Privacy preferences",
    "footer.rights": "All rights reserved.",
    "footer.backToTop": "Back to top",
    "whatsapp.label": "Message Lars on WhatsApp",

    "work.title": "Selected <em>work</em>",
    "work.intro": "A selection of websites I've worked on. Click a project for the story behind it and a live preview.",
    "work.dpk.tag": "Side project",
    "work.dpk.imageAlt": "The dpkservice homepage on a laptop",
    "work.dpk.summary":
      "Website for DPK Service, a technical service company that maintains and repairs vehicles, machinery, trailers and windows. A bold, dark design that puts the services front and centre.",
    "work.dpk.scope": "Web design · Web development",
    "work.view": "View project",
    "work.visit": "Visit website",
    "work.liveLoad": "Load live preview",
    "work.liveNote":
      "The live preview loads the actual website from an external server, which may set its own cookies. Loading it allows external media. You can change this at any time in your privacy preferences.",
    "work.fallback": "Nothing showing? Some websites can't be displayed inside another page.",
    "work.openTab": "Open in a new tab",
    "work.soonTitle": "More coming soon",
    "work.soonText": "New projects are in the works.",
    "work.nextEyebrow": "Next step",
    "work.nextTitle": "Ready to start <em>your project?</em>",
    "work.nextIntro": "Let's build something that genuinely moves your business forward.",
    "work.nextCta": "Get in touch",
    "work.close": "Close",
    "work.frameTitle": "Live website preview",

    "legal.eyebrow": "Legal",
    "legal.updated": "Last updated 20 October 2026",
    "privacy.title": "Privacy policy",
    "privacy.lead":
      "Your privacy matters. This page explains which personal data I process, why I do so and what your rights are. I keep it deliberately simple: this website doesn't track you and collects no more than it needs.",
    "cookies.title": "Cookie policy",
    "cookies.lead": "This page explains what this website stores on your device, why, and how you decide what to allow.",

    "consent.label": "Cookie notice",
    "consent.title": "Your privacy, your choice",
    "consent.text":
      "This website doesn't use tracking or advertising cookies. With your permission, I'll remember your language and load live previews of external websites.",
    "consent.policyLink": "Read the cookie policy",
    "consent.acceptAll": "Accept all",
    "consent.rejectAll": "Reject all",
    "consent.customize": "Set preferences",
    "consent.prefsTitle": "Privacy preferences",
    "consent.prefsIntro":
      "Choose what this website may store on your device and which external content it may load. You can change your choice at any time via ‘Privacy preferences’ at the bottom of every page.",
    "consent.necessaryTitle": "Strictly necessary",
    "consent.necessaryText":
      "Required for the website to work and to remember your cookie choice. This storage can't be switched off.",
    "consent.alwaysOn": "Always active",
    "consent.preferencesTitle": "Preferences",
    "consent.preferencesText": "Remembers your language, so the website opens in your language on your next visit.",
    "consent.mediaTitle": "External media",
    "consent.mediaText":
      "Loads content from other websites, such as the live previews in my portfolio. Those websites may set their own cookies.",
    "consent.save": "Save choices",
    "consent.saved": "Your privacy preferences have been saved.",

    "launch.badge": "Coming soon",
    "launch.title": "Kroebelz Digital is launching <em>soon</em>.",
    "launch.text": "Feel free to look around. Already have a project in mind? Get in touch and we'll plan it in together.",
    "launch.cta": "Get in touch",
    "launch.dismiss": "Keep browsing",
  },
};

const SUPPORTED_LANGS = Object.keys(translations);
let currentLang = DEFAULT_LANG;

const consent = { decided: false, preferences: false, media: false };

function createStore(type) {
  // Storage can be unavailable (private mode, blocked site data); every call then degrades to a no-op.
  return {
    get(key) {
      try {
        return window[type].getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        window[type].setItem(key, value);
      } catch {}
    },
    remove(key) {
      try {
        window[type].removeItem(key);
      } catch {}
    },
  };
}

const localStore = createStore("localStorage");
const sessionStore = createStore("sessionStorage");

function t(key, params = {}) {
  const template = translations[currentLang]?.[key] ?? translations[DEFAULT_LANG][key];
  if (template === undefined) return undefined;
  return template.replace(/\{(\w+)\}/g, (match, name) => params[name] ?? match);
}

function loadConsent() {
  Object.assign(consent, { decided: false, preferences: false, media: false });

  const raw = localStore.get(CONSENT_STORAGE_KEY);
  if (!raw) return;

  let saved = null;
  try {
    saved = JSON.parse(raw);
  } catch {}

  const isValid = saved?.version === CONSENT_VERSION && Date.now() - saved.savedAt < CONSENT_MAX_AGE;
  if (!isValid) {
    localStore.remove(CONSENT_STORAGE_KEY);
    return;
  }

  Object.assign(consent, { decided: true, preferences: saved.preferences === true, media: saved.media === true });
}

function saveConsent(choices) {
  Object.assign(consent, choices, { decided: true });
  localStore.set(
    CONSENT_STORAGE_KEY,
    JSON.stringify({
      version: CONSENT_VERSION,
      savedAt: Date.now(),
      preferences: consent.preferences,
      media: consent.media,
    }),
  );
  document.dispatchEvent(new CustomEvent("consentchange", { detail: { ...consent } }));
}

function readSavedLanguage() {
  const saved = (consent.preferences && localStore.get(LANG_STORAGE_KEY)) || sessionStore.get(LANG_STORAGE_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : null;
}

function persistLanguage(lang) {
  // The session copy is strictly necessary; keeping it across visits needs consent.
  sessionStore.set(LANG_STORAGE_KEY, lang);
  if (consent.preferences) localStore.set(LANG_STORAGE_KEY, lang);
  else localStore.remove(LANG_STORAGE_KEY);
}

function resolveInitialLanguage() {
  const saved = readSavedLanguage();
  if (saved) return saved;

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const base = String(tag || "").slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGS.includes(base)) return base;
  }
  // Visitors whose browser speaks neither language are better served in English.
  return preferred.some(Boolean) ? INTERNATIONAL_LANG : DEFAULT_LANG;
}

function applyTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });

  // Only used for strings from the dictionary above, never for user input.
  root.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = t(el.dataset.i18nHtml);
    if (value !== undefined) el.innerHTML = value;
  });

  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((part) => part.trim());
      const value = attr && key ? t(key) : undefined;
      if (value !== undefined) el.setAttribute(attr, value);
    });
  });

  // Long-form content such as the legal pages ships in both languages.
  root.querySelectorAll("[data-lang-block]").forEach((el) => {
    el.hidden = el.dataset.langBlock !== currentLang;
  });
}

function setLanguage(lang, { persist = true } = {}) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;
  document.documentElement.lang = lang;

  applyTranslations();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  if (persist) persistLanguage(lang);
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function initLanguage() {
  if (!consent.preferences) localStore.remove(LANG_STORAGE_KEY);
  setLanguage(resolveInitialLanguage(), { persist: false });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang !== currentLang) setLanguage(btn.dataset.lang);
    });
  });

  // Keep other open tabs in sync.
  window.addEventListener("storage", (event) => {
    if (event.key === LANG_STORAGE_KEY && SUPPORTED_LANGS.includes(event.newValue)) {
      setLanguage(event.newValue, { persist: false });
    }
  });

  document.addEventListener("consentchange", () => persistLanguage(currentLang));
}

const consentTemplate = `
  <section class="consent-banner" id="consentBanner" aria-labelledby="consentBannerTitle" hidden>
    <p class="consent-title" id="consentBannerTitle" data-i18n="consent.title"></p>
    <p class="consent-text">
      <span data-i18n="consent.text"></span>
      <a href="cookie-policy.html" data-i18n="consent.policyLink"></a>
    </p>
    <div class="consent-actions">
      <button type="button" class="btn btn-dark" data-consent="reject" data-i18n="consent.rejectAll"></button>
      <button type="button" class="btn btn-red" data-consent="accept" data-i18n="consent.acceptAll"></button>
    </div>
    <button type="button" class="consent-customize" data-consent-open data-i18n="consent.customize"></button>
  </section>

  <dialog class="consent-dialog" id="consentDialog" aria-labelledby="consentDialogTitle">
    <div class="consent-dialog-header">
      <h2 class="consent-dialog-title" id="consentDialogTitle" data-i18n="consent.prefsTitle"></h2>
      <button type="button" class="dialog-close" data-consent-close data-i18n-attr="aria-label:work.close">
        <span aria-hidden="true">✕</span>
      </button>
    </div>
    <p class="consent-dialog-intro" data-i18n="consent.prefsIntro"></p>
    <ul class="consent-options" role="list">
      <li class="consent-option">
        <div>
          <p class="consent-option-title" data-i18n="consent.necessaryTitle"></p>
          <p class="consent-option-text" data-i18n="consent.necessaryText"></p>
        </div>
        <span class="consent-always" data-i18n="consent.alwaysOn"></span>
      </li>
      <li class="consent-option">
        <div>
          <label class="consent-option-title" for="consentPreferences" data-i18n="consent.preferencesTitle"></label>
          <p class="consent-option-text" id="consentPreferencesText" data-i18n="consent.preferencesText"></p>
        </div>
        <span class="form-switch">
          <input class="form-check-input consent-switch" type="checkbox" role="switch" id="consentPreferences" name="preferences" aria-describedby="consentPreferencesText" />
        </span>
      </li>
      <li class="consent-option">
        <div>
          <label class="consent-option-title" for="consentMedia" data-i18n="consent.mediaTitle"></label>
          <p class="consent-option-text" id="consentMediaText" data-i18n="consent.mediaText"></p>
        </div>
        <span class="form-switch">
          <input class="form-check-input consent-switch" type="checkbox" role="switch" id="consentMedia" name="media" aria-describedby="consentMediaText" />
        </span>
      </li>
    </ul>
    <div class="consent-dialog-actions">
      <button type="button" class="btn btn-outline" data-consent="reject" data-i18n="consent.rejectAll"></button>
      <button type="button" class="btn btn-outline" data-consent="save" data-i18n="consent.save"></button>
      <button type="button" class="btn btn-red" data-consent="accept" data-i18n="consent.acceptAll"></button>
    </div>
    <p class="consent-dialog-links">
      <a href="privacy-policy.html" data-i18n="footer.privacy"></a>
      <a href="cookie-policy.html" data-i18n="footer.cookies"></a>
    </p>
  </dialog>

  <p class="toast-message" role="status" aria-live="polite"></p>
`;

let toastTimer = 0;

function showToast(key) {
  const toast = document.querySelector(".toast-message");
  if (!toast) return;
  toast.textContent = t(key);
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function initConsent() {
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.insertAdjacentHTML("afterend", consentTemplate);
  else document.body.insertAdjacentHTML("afterbegin", consentTemplate);

  const banner = document.getElementById("consentBanner");
  const dialog = document.getElementById("consentDialog");
  const switches = {
    preferences: dialog.querySelector('[name="preferences"]'),
    media: dialog.querySelector('[name="media"]'),
  };

  const syncBanner = () => {
    banner.hidden = consent.decided;
    document.documentElement.classList.toggle("consent-pending", !consent.decided);
  };

  const openPreferences = () => {
    switches.preferences.checked = consent.preferences;
    switches.media.checked = consent.media;
    if (typeof dialog.showModal === "function") dialog.showModal();
  };

  // Controls that only work with JavaScript stay hidden in the static HTML.
  document.querySelectorAll("[data-js-only]").forEach((el) => {
    el.hidden = false;
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-consent-open]")) {
      event.preventDefault();
      openPreferences();
      return;
    }

    const action = event.target.closest("[data-consent]")?.dataset.consent;
    if (!action) return;

    if (action === "accept") saveConsent({ preferences: true, media: true });
    else if (action === "reject") saveConsent({ preferences: false, media: false });
    else saveConsent({ preferences: switches.preferences.checked, media: switches.media.checked });

    if (dialog.open) dialog.close();
    showToast("consent.saved");
  });

  dialog.querySelector("[data-consent-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener("consentchange", syncBanner);

  // A choice made in another tab applies here too.
  window.addEventListener("storage", (event) => {
    if (event.key !== CONSENT_STORAGE_KEY) return;
    loadConsent();
    document.dispatchEvent(new CustomEvent("consentchange", { detail: { ...consent } }));
  });

  syncBanner();
}

function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const menu = document.getElementById("mainNav");
  if (!navbar) return;

  let lastY = window.scrollY;
  let ticking = false;
  let pinnedUntil = 0;

  // Keep the navbar in view while the page scrolls to an anchor.
  const pin = () => {
    pinnedUntil = performance.now() + 1200;
  };
  if (window.location.hash) pin();
  window.addEventListener("hashchange", pin);
  // Switching language reflows the page, and the scroll correction that follows shouldn't hide the menu.
  document.addEventListener("languagechange", pin);
  document.addEventListener("click", (event) => {
    if (event.target.closest('a[href*="#"]')) pin();
  });

  const update = () => {
    const y = Math.max(window.scrollY, 0);
    const menuOpen = menu?.classList.contains("show");
    const hasFocus = Boolean(navbar.querySelector(":focus-visible"));
    const pinned = performance.now() < pinnedUntil;
    const delta = y - lastY;

    navbar.classList.toggle("is-scrolled", y > 12);
    if (delta < 0 || y < 240 || pinned || menuOpen || hasFocus) {
      navbar.classList.remove("is-hidden");
    } else if (delta > 0) {
      navbar.classList.add("is-hidden");
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true },
  );
  navbar.addEventListener("focusin", () => navbar.classList.remove("is-hidden"));
  update();

  if (!menu) return;

  const collapse = () => {
    if (menu.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    }
  };

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", collapse));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("show")) {
      collapse();
      navbar.querySelector(".navbar-toggler")?.focus();
    }
  });

  const toggler = navbar.querySelector(".navbar-toggler");
  const syncTogglerLabel = () => {
    const key = menu.classList.contains("show") ? "nav.toggleClose" : "nav.toggle";
    toggler?.setAttribute("aria-label", t(key));
  };
  menu.addEventListener("shown.bs.collapse", syncTogglerLabel);
  menu.addEventListener("hidden.bs.collapse", syncTogglerLabel);
  document.addEventListener("languagechange", syncTogglerLabel);
}

function initScrollSpy() {
  const links = [...document.querySelectorAll('#mainNav .nav-link[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const linkFor = (section) => links.find((link) => link.getAttribute("href") === `#${section.id}`);

  // Watch a thin band across the middle of the viewport: whichever section crosses it is current.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor(entry.target);
        if (entry.isIntersecting) {
          links.forEach((other) => other.classList.toggle("active", other === link));
        } else {
          link?.classList.remove("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  const headings = document.querySelectorAll("h2[data-i18n-html]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(entry.target.hasAttribute("data-reveal") ? "is-visible" : "is-inview");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    observer.observe(item);
  });
  headings.forEach((heading) => observer.observe(heading));
  document.documentElement.classList.add("has-reveal");
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("formStatus");
  const fields = ["name", "email", "message"].map((name) => form.elements.namedItem(name)).filter(Boolean);
  const touched = new WeakSet();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const errorKeyFor = (field) => {
    const value = field.value.trim();
    if (!value) return `form.error.${field.name}Missing`;
    if (field.type === "email" && !emailPattern.test(value)) return "form.error.emailInvalid";
    return null;
  };

  const showError = (field, key) => {
    const message = document.getElementById(field.getAttribute("aria-describedby"));
    field.classList.toggle("is-invalid", Boolean(key));
    field.toggleAttribute("aria-invalid", Boolean(key));
    if (message) {
      message.dataset.errorKey = key || "";
      message.textContent = key ? t(key) : "";
    }
  };

  const validate = (field) => {
    const key = errorKeyFor(field);
    showError(field, key);
    return !key;
  };

  const setStatus = (key, tone) => {
    if (!status) return;
    status.dataset.statusKey = key || "";
    status.dataset.tone = tone || "";
    status.textContent = key ? t(key) : "";
  };

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim()) touched.add(field);
      if (touched.has(field)) validate(field);
    });
    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) validate(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach((field) => touched.add(field));

    const invalid = fields.filter((field) => !validate(field));
    if (invalid.length) {
      setStatus("form.error.summary", "error");
      invalid[0].focus();
      return;
    }

    const project = form.elements.namedItem("project");
    const params = {
      name: form.elements.namedItem("name").value.trim(),
      email: form.elements.namedItem("email").value.trim(),
      message: form.elements.namedItem("message").value.trim(),
      project: project?.selectedOptions[0]?.textContent.trim() ?? "",
    };

    const subject = encodeURIComponent(t("form.mail.subject", params));
    const body = encodeURIComponent(t("form.mail.body", params));

    setStatus("form.status.opened", "success");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });

  document.addEventListener("languagechange", () => {
    form.querySelectorAll("[data-error-key]").forEach((el) => {
      if (el.dataset.errorKey) el.textContent = t(el.dataset.errorKey);
    });
    if (status?.dataset.statusKey) status.textContent = t(status.dataset.statusKey);
  });
}

function initProjectPreview() {
  const dialog = document.getElementById("projectDialog");
  const triggers = document.querySelectorAll("[data-project-preview]");
  // Without <dialog> support the triggers stay plain links to the live site.
  if (!dialog || !triggers.length || typeof dialog.showModal !== "function") return;

  const title = dialog.querySelector("#projectDialogTitle");
  const textSlots = dialog.querySelectorAll("[data-dialog-text]");
  const image = dialog.querySelector("[data-dialog-image]");
  const visitLinks = dialog.querySelectorAll("[data-dialog-visit]");
  const liveButton = dialog.querySelector("[data-dialog-live]");
  const liveNote = dialog.querySelector("[data-dialog-live-note]");
  const frame = dialog.querySelector("[data-dialog-frame]");
  let opener = null;
  let projectUrl = "";

  const showLive = (isLive) => {
    dialog.classList.toggle("is-live", isLive);
    if (isLive) frame.src = projectUrl;
    else frame.removeAttribute("src");
  };

  const syncLiveNote = () => {
    liveNote.hidden = consent.media;
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      opener = trigger;
      projectUrl = trigger.href;

      title.textContent = trigger.dataset.projectTitle || "";
      // Each slot names the trigger attribute that holds its translation key.
      textSlots.forEach((slot) => {
        slot.dataset.i18n = trigger.dataset[slot.dataset.dialogText] || "";
      });
      image.src = trigger.dataset.projectImage || "";
      image.dataset.i18nAttr = trigger.dataset.projectImageAlt ? `alt:${trigger.dataset.projectImageAlt}` : "";
      visitLinks.forEach((link) => {
        link.href = projectUrl;
      });

      applyTranslations(dialog);
      syncLiveNote();
      showLive(false);
      dialog.showModal();
    });
  });

  liveButton.addEventListener("click", () => {
    if (!consent.media) saveConsent({ preferences: consent.preferences, media: true });
    showLive(true);
  });

  dialog.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    showLive(false);
    opener?.focus();
  });

  document.addEventListener("consentchange", () => {
    syncLiveNote();
    if (!consent.media && dialog.classList.contains("is-live")) showLive(false);
  });
}

const launchTemplate = `
  <dialog class="launch-dialog" id="launchDialog" tabindex="-1" aria-labelledby="launchTitle" aria-describedby="launchText">
    <button type="button" class="dialog-close" data-launch-close data-i18n-attr="aria-label:work.close">
      <span aria-hidden="true">✕</span>
    </button>
    <p class="launch-badge">
      <span class="status-dot" aria-hidden="true"></span>
      <span data-i18n="launch.badge"></span>
    </p>
    <h2 class="launch-title" id="launchTitle" data-i18n-html="launch.title"></h2>
    <p class="launch-text" id="launchText" data-i18n="launch.text"></p>
    <div class="launch-actions">
      <a class="btn btn-red" href="index.html#contact" data-launch-close>
        <span data-i18n="launch.cta"></span>
        <span class="btn-arrow" aria-hidden="true">↗</span>
      </a>
      <button type="button" class="btn btn-outline" data-launch-close data-i18n="launch.dismiss"></button>
    </div>
  </dialog>
`;

function initLaunchNotice() {
  if (!SHOW_LAUNCH_NOTICE || sessionStore.get(LAUNCH_STORAGE_KEY)) return;

  document.body.insertAdjacentHTML("beforeend", launchTemplate);
  const dialog = document.getElementById("launchDialog");
  if (typeof dialog.showModal !== "function") {
    dialog.remove();
    return;
  }
  applyTranslations(dialog);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-launch-close]")) dialog.close();
  });

  window.setTimeout(() => {
    if (document.querySelector("dialog[open]")) return;
    dialog.showModal();
    // Start on the dialog itself, so the close button doesn't light up before anyone has used the keyboard.
    dialog.focus();
    // Shown once per visit, not on every page.
    sessionStore.set(LAUNCH_STORAGE_KEY, "1");
  }, 900);
}

function initYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = year;
  });
}

loadConsent();
initConsent();
initLanguage();
initNavbar();
initScrollSpy();
initReveal();
initContactForm();
initProjectPreview();
initYear();
initLaunchNotice();
