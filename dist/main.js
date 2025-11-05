(() => {
  // src/js/main.js
  async function showArticlesByLang(lang) {
    const main = document.querySelector("main");
    if (!main)
      return;
    main.querySelectorAll("[data-lang]").forEach((div2) => div2.remove());
    const div = document.createElement("div");
    div.setAttribute("data-lang", lang);
    let file = "";
    if (lang === "ru")
      file = "components/articles-ru.html";
    if (lang === "en")
      file = "components/articles-en.html";
    if (lang === "ar")
      file = "components/articles-ar.html";
    if (file) {
      try {
        const resp = await fetch(file);
        if (resp.ok) {
          div.innerHTML = await resp.text();
        } else {
          div.innerHTML = "<p>\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u0438</p>";
        }
      } catch {
        div.innerHTML = "<p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0442\u0430\u0442\u0435\u0439</p>";
      }
      const h1 = main.querySelector('h1[data-i18n="main.greeting"]');
      if (h1 && h1.nextSibling) {
        main.insertBefore(div, h1.nextSibling);
      } else {
        main.appendChild(div);
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    const lang = localStorage.getItem("lang") || "ru";
    showArticlesByLang(lang);
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        showArticlesByLang(e.target.value);
      });
    }
    window.showArticlesByLang = showArticlesByLang;
  });
  if (typeof setLanguage === "function") {
    const origSetLanguage = setLanguage;
    window.setLanguage = function(lang) {
      origSetLanguage(lang);
      showArticlesByLang(lang);
    };
  }
  function startRandomCounter() {
    const el = document.getElementById("random-counter");
    if (!el)
      return;
    function update() {
      el.textContent = Math.floor(Math.random() * (20200 - 19700 + 1)) + 19700;
    }
    update();
    setInterval(update, 5e3);
  }
  document.addEventListener("DOMContentLoaded", startRandomCounter);
  var html = document.documentElement;
  var brand = html.getAttribute("data-brand") || "default";
  var faviconPath = `/images/favicon-${brand}.ico`;
  var favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }
  favicon.href = faviconPath;
  window.addEventListener("DOMContentLoaded", () => {
    fetch("/brands.txt").then((resp) => resp.text()).then((text) => {
      const brands = text.split("\n").map((b) => b.trim()).filter((b) => b && !b.startsWith("//"));
      const html2 = document.documentElement;
      let brand2 = html2.getAttribute("data-brand");
      if (brands.includes(brand2)) {
        let formatted = brand2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        const logo = document.querySelector(".logo");
        if (logo) {
          logo.textContent = formatted;
        }
      }
    });
    const viewer = document.querySelector("spline-viewer");
    if (viewer && viewer.shadowRoot) {
      const logo = viewer.shadowRoot.querySelector("#logo");
      if (logo) {
        logo.style.display = "none";
      }
    }
  });
})();
