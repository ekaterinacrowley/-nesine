
// Динамически подгружать блок статей для выбранного языка через fetch
async function showArticlesByLang(lang) {
  const main = document.querySelector('main');
  if (!main) return;
  // Удаляем все существующие блоки статей
  main.querySelectorAll('[data-lang]').forEach(div => div.remove());
  // Создаём новый блок и подгружаем содержимое
  const div = document.createElement('div');
  div.setAttribute('data-lang', lang);
  let file = '';
  if (lang === 'ru') file = 'components/articles-ru.html';
  if (lang === 'en') file = 'components/articles-en.html';
  if (lang === 'ar') file = 'components/articles-ar.html';
  if (file) {
    try {
      const resp = await fetch(file);
      if (resp.ok) {
        div.innerHTML = await resp.text(); 
      } else {
        div.innerHTML = '<p>Не удалось загрузить статьи</p>';
      }
    } catch {
      div.innerHTML = '<p>Ошибка загрузки статей</p>';
    }
    // Вставляем после заголовка
    const h1 = main.querySelector('h1[data-i18n="main.greeting"]');
    if (h1 && h1.nextSibling) {
      main.insertBefore(div, h1.nextSibling);
    } else {
      main.appendChild(div);
    }
  }
}

// Инициализация показа статей по языку
document.addEventListener('DOMContentLoaded', function() {
  const lang = localStorage.getItem('lang') || 'ru';
  showArticlesByLang(lang);
  // Следим за сменой языка
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', e => {
      showArticlesByLang(e.target.value);
    });
  }
  // На случай смены языка не через select
  window.showArticlesByLang = showArticlesByLang;
});

// Переопределяем setLanguage, если он есть
if (typeof setLanguage === 'function') {
  const origSetLanguage = setLanguage;
  window.setLanguage = function(lang) {
    origSetLanguage(lang);
    showArticlesByLang(lang);
  };
}

// Счетчик с рандомным числом
function startRandomCounter() {
  const el = document.getElementById('random-counter');
  if (!el) return;
  function update() {
    el.textContent = Math.floor(Math.random() * (1600 - 1200 + 1)) + 1200;
  }
  update();
  setInterval(update, 5000);
}

document.addEventListener('DOMContentLoaded', startRandomCounter);