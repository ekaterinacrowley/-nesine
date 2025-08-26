(() => {
  // src/js/lang.js
  var translations = {
    en: {
      header: {
        title: "Welcome to our site!",
        menuHome: "Home",
        menuAbout: "About",
        menuContact: "Contact"
      },
      footer: {
        copyright: "All rights reserved."
      },
      main: {
        greeting: { html: "<span>Hello, user!</span> Welcome to the site." },
        description: "This is the main content area.",
        button: "Get Bonus",
        bonus: "Your bonus is active!",
        erroreSpan: "Test",
        erroreSpan2: "Test"
      },
      xbet: {
        title: "Strong Partnerships with a Strong Brand",
        description: "1xBet is a trusted sponsor and business partner of world-renowned clubs, athletes, and technology brands."
      },
      players: {
        title: "Top T\xFCrkiye players",
        digit1: "Player 1",
        digit2: "Player 2",
        digit3: "Player 3"
      },
      secondary: {
        button: "Bet Now"
      },
      infographics: {
        title: "Fast, Easy, Secure \u2014 we're ready for your win",
        item1: "Fast",
        item2: "Easy",
        item3: "Secure",
        desc1: "Create your bet slip in 3 clicks. Live odds update in milliseconds; pages open in < 1 sec.",
        desc2: "60+ payment methods, instant TL deposit/withdrawal. Find thousands of matches and markets in seconds with smart filters.",
        desc3: "Curacao licensed certified betting site. 256-bit SSL, independent audits and responsible gaming policy keep your data safe."
      },
      banners: {
        title: "Start winning now!"
      }
    },
    tr: {
      header: {
        title: "Sitemize ho\u015F geldiniz!",
        menuHome: "Ana Sayfa",
        menuAbout: "Hakk\u0131m\u0131zda",
        menuContact: "\u0130leti\u015Fim"
      },
      footer: {
        copyright: "T\xFCm haklar\u0131 sakl\u0131d\u0131r."
      },
      main: {
        greeting: { html: "<span>Site engellendi,</span> ama kuponun g\xFCvende" },
        description: "\xC7al\u0131\u015Fan ba\u011Flant\u0131y\u0131 senin i\xE7in bulduk \u2014 \xFCstelik hesab\u0131na \xF6zel bir bonus haz\u0131rlad\u0131k.",
        button: "Bonusu Al",
        bonus: "+100 \u20BA bonus",
        erroreSpan: "Engellendi",
        erroreSpan2: "BTK karar\u0131na g\xF6re hizmete eri\u015Fim"
      },
      xbet: {
        title: "G\xFC\xE7l\xFC Markayla G\xFC\xE7l\xFC Ortakl\u0131klar",
        description: "1xBet, d\xFCnya \xE7ap\u0131nda tan\u0131nan kul\xFCplerin, sporcular\u0131n ve teknoloji markalar\u0131n\u0131n g\xFCvenilir sponsoru ve i\u015F orta\u011F\u0131d\u0131r."
      },
      players: {
        title: "Top T\xFCrkiye oyuncular\u0131",
        digit1: "Oyuncu 1",
        digit2: "Oyuncu 2",
        digit3: "Oyuncu 3"
      },
      secondary: {
        button: "Bahis Yap"
      },
      infographics: {
        title: "H\u0131zl\u0131, Kolay, G\xFCvenli \u2014 kazanman\u0131z i\xE7in haz\u0131r\u0131z",
        item1: "H\u0131zl\u0131",
        item2: "Kolay",
        item3: "G\xFCvenli",
        desc1: "Bahis kuponunuzu 3 t\u0131kta olu\u015Fturun. Canl\u0131 oranlar milisaniyeler i\xE7inde g\xFCncellenir; sayfalar < 1 sn\u2019de a\xE7\u0131l\u0131r.",
        desc2: "60+ \xF6deme y\xF6ntemi, an\u0131nda TL yat\u0131rma / \xE7ekme. Binlerce ma\xE7 ve marketi ak\u0131ll\u0131 filtrelerle saniyeler i\xE7inde bulun.",
        desc3: "Cura\xE7ao lisansl\u0131 sertifikal\u0131 bahis sitesi. 256-bit SSL, ba\u011F\u0131ms\u0131z denetimler ve sorumlu oyun politikas\u0131yla verileriniz g\xFCvende."
      },
      banners: {
        title: "Kazanmaya \u015Eimdi Ba\u015Fla!"
      }
    }
  };
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    setDirection(lang);
  }
  function setDirection(lang) {
    document.documentElement.dir = "ltr";
    document.body.style.textAlign = "";
  }
  function getLanguage() {
    return localStorage.getItem("lang") || "en";
  }
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t)
      return;
    document.querySelectorAll('[data-i18n="players.title"]').forEach((el) => el.textContent = t.players.title);
    document.querySelectorAll('[data-i18n="players.digit1"]').forEach((el) => el.textContent = t.players.digit1);
    document.querySelectorAll('[data-i18n="players.digit2"]').forEach((el) => el.textContent = t.players.digit2);
    document.querySelectorAll('[data-i18n="players.digit3"]').forEach((el) => el.textContent = t.players.digit3);
    document.querySelectorAll('[data-i18n="secondary.button"]').forEach((el) => el.textContent = t.secondary.button);
    document.querySelectorAll('[data-i18n="header.title"]').forEach((el) => el.textContent = t.header.title);
    document.querySelectorAll('[data-i18n="header.menuHome"]').forEach((el) => el.textContent = t.header.menuHome);
    document.querySelectorAll('[data-i18n="header.menuAbout"]').forEach((el) => el.textContent = t.header.menuAbout);
    document.querySelectorAll('[data-i18n="header.menuContact"]').forEach((el) => el.textContent = t.header.menuContact);
    document.querySelectorAll('[data-i18n="footer.copyright"]').forEach((el) => el.textContent = t.footer.copyright);
    document.querySelectorAll('[data-i18n="main.greeting"]').forEach((el) => {
      if (typeof t.main.greeting === "object" && t.main.greeting.html) {
        el.innerHTML = t.main.greeting.html;
      } else {
        el.textContent = t.main.greeting;
      }
    });
    document.querySelectorAll('[data-i18n="main.description"]').forEach((el) => el.textContent = t.main.description);
    document.querySelectorAll('[data-i18n="main.button"]').forEach((el) => el.textContent = t.main.button);
    document.querySelectorAll('[data-i18n="main.bonus"]').forEach((el) => el.textContent = t.main.bonus);
    document.querySelectorAll('[data-i18n="main.erroreSpan"]').forEach((el) => el.textContent = t.main.erroreSpan);
    document.querySelectorAll('[data-i18n="main.erroreSpan2"]').forEach((el) => el.textContent = t.main.erroreSpan2);
    document.querySelectorAll('[data-i18n="infographics.title"]').forEach((el) => el.textContent = t.infographics.title);
    document.querySelectorAll('[data-i18n="infographics.item1"]').forEach((el) => el.textContent = t.infographics.item1);
    document.querySelectorAll('[data-i18n="infographics.item2"]').forEach((el) => el.textContent = t.infographics.item2);
    document.querySelectorAll('[data-i18n="infographics.item3"]').forEach((el) => el.textContent = t.infographics.item3);
    document.querySelectorAll('[data-i18n="infographics.desc1"]').forEach((el) => el.textContent = t.infographics.desc1);
    document.querySelectorAll('[data-i18n="infographics.desc2"]').forEach((el) => el.textContent = t.infographics.desc2);
    document.querySelectorAll('[data-i18n="infographics.desc3"]').forEach((el) => el.textContent = t.infographics.desc3);
    document.querySelectorAll('[data-i18n="banners.title"]').forEach((el) => el.textContent = t.banners.title);
    document.querySelectorAll('[data-i18n="xbet.title"]').forEach((el) => el.textContent = t.xbet.title);
    document.querySelectorAll('[data-i18n="xbet.description"]').forEach((el) => el.textContent = t.xbet.description);
  }
  document.addEventListener("DOMContentLoaded", function() {
    const lang = getLanguage();
    applyTranslations(lang);
    setDirection(lang);
  });
  window.setLanguage = setLanguage;
})();
