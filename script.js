/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

const translations = {
  cyr: {
    hero_title_1: "Тэлеграм па-беларуску.",
    hero_title_2: "Клясычным правапісам.",
    hero_desc:
      "Далучайцеся да стварэньня і тэставаньня лякалізацыі Better Belarusian. Зробім наш улюбёны мэсэнджар родным разам.",
    btn_install: "Усталяваць мову",
    btn_help: "Дапамагчы перакладу",
    stats_title: "Статус перакладу",
    label_platform: "Плятформа",
    label_lang_name: "Назва",
    status_process: "У працэсе",
    label_done: "Гатова",
    count_phrases: "661 радкоў",
    count_total: "з 10 207",
    progress_desc:
      "Гэта толькі пачатак вялікага шляху. Дапамажыце нам перакласьці астатнія 10 тысяч радкоў.",
    status_soon: "Хутка",
    status_later: "Пазьней",
    vocab_title: "Жывая мова",
    vocab_subtitle:
      "Мы спрашчаем грувасткія канструкцыі і дадаем інтэрфэйсу беларускага калярыту.",
    cat_text: "Тэкст",
    word_msg_old: "Паведамленьні",
    word_msg_new: "Паведы",
    word_msg_desc: "Каротка, трапна і без лішніх складоў.",
    cat_video: "Відэа",
    word_video_old: "Відэапаведамленьне",
    word_video_new: "Калабок",
    word_video_desc: "Круглае відэа? Значыць, гэта калабок!",
    cat_audio: "Гук",
    word_audio_old: "Галасавое паведамленьне",
    word_audio_new: "Галасок",
    word_audio_desc: "Мілагучнае слова для вашага голасу.",
    vocab_more:
      "...і многае іншае, што робіць карыстаньне праграмай прыемнейшым.",
    feat_classic_title: "Клясычны правапіс",
    feat_classic_desc: "Мы прытрымліваемся граматыкі Браніслава Тарашкевіца.",
    feat_open_title: "Адкрыты код",
    feat_open_desc: "Плятформа перакладаў адкрытая для кожнага.",
    feat_adapt_title: "Адаптыўнасьць",
    feat_adapt_desc: "Ідэальна выглядае ў сьветлай і цёмнай тэме.",
    cta_title: "Шукаем аднадумцаў!",
    cta_desc: "Дапамажыце нам зь перакладам, рэдагаваньнем або тэставаньнем.",
    cta_btn: "Запоўніць анкету",
    cta_note: "Гэта зойме ня больш за 2 хвіліны",
    footer_note: "Неафіцыйны праект.",
    footer_channel: "Telegram-канал",
    footer_support: "Падтрымаць",
  },
  lat: {
    hero_title_1: "Telehram pa-biełarusku.",
    hero_title_2: "Klasyčnym pravapisam.",
    hero_desc:
      "Dałučajciesia da stvareńnia i testavańnia lakalizacyi Better Belarusian. Zrobim naš uliubiony mesendžar rodnym razam.",
    btn_install: "Ustaliavać movu",
    btn_help: "Dapamahčy pierakładu",
    stats_title: "Status pierakładu",
    label_platform: "Pliatforma",
    label_lang_name: "Nazva",
    status_process: "U pracesie",
    label_done: "Hatova",
    count_phrases: "661 radkoŭ",
    count_total: "z 10 207",
    progress_desc:
      "Heta tolki pačatak vialikaha šlachu. Dapamažycie nam pierakłaści astatnija 10 tysiač radkoŭ.",
    status_soon: "Chutka",
    status_later: "Paźniej",
    vocab_title: "Žyvaja mova",
    vocab_subtitle:
      "My spraščajem hruvastkija kanstrukcyi i dadajem interfejsu biełaruskaha kalarytu.",
    cat_text: "Tekst",
    word_msg_old: "Paviedamleńni",
    word_msg_new: "Paviedy",
    word_msg_desc: "Karotka, trapna i biez lišnich składoŭ.",
    cat_video: "Videa",
    word_video_old: "Videapaviedamleńnie",
    word_video_new: "Kałabok",
    word_video_desc: "Kruhłaje videa? Značyć, heta kałabok!",
    cat_audio: "Huk",
    word_audio_old: "Hałasavoje paviedamleńnie",
    word_audio_new: "Hałasok",
    word_audio_desc: "Miłahučnaje słova dla vašaha hołasu.",
    vocab_more:
      "...i mnohaje inšaje, što robić karystańnie prahramaj pryjemniejšym.",
    feat_classic_title: "Klasyčny pravapis",
    feat_classic_desc:
      "My prytrymlivajemsia hramatyki Branisłava Taraškievica.",
    feat_open_title: "Adkryty kod",
    feat_open_desc: "Pliatforma pierakładaŭ adkrytaja dla kožnaha.",
    feat_adapt_title: "Adaptyŭnaść",
    feat_adapt_desc: "Ideaĺna vyhladaje ŭ śvietłaj i ciomnaj temie.",
    cta_title: "Šukajem adnadumcaŭ!",
    cta_desc: "Dapamažycie nam ź pierakładam, redahavańniem abo testavańniem.",
    cta_btn: "Zapoŭnić ankietu",
    cta_note: "Heta zojmie nia bolš za 2 chviliny",
    footer_note: "Neaficyjny prajekt.",
    footer_channel: "Telegram-kanał",
    footer_support: "Padtrymać",
  },
  ru: {
    hero_title_1: "Телеграм на беларуском.",
    hero_title_2: "Классическим правописанием.",
    hero_desc:
      "Присоединяйтесь к созданию и тестированию локализации Better Belarusian. Сделаем наш любимый мессенджер родным вместе.",
    btn_install: "Установить язык",
    btn_help: "Помочь переводу",
    stats_title: "Статус перевода",
    label_platform: "Платформа",
    label_lang_name: "Название",
    status_process: "В процессе",
    label_done: "Готово",
    count_phrases: "661 строк",
    count_total: "из 10 207",
    progress_desc:
      "Это только начало большого пути. Помогите нам перевести остальные 10 тысяч строк.",
    status_soon: "Скоро",
    status_later: "Позже",
    vocab_title: "Живой язык",
    vocab_subtitle:
      "Мы упрощаем громоздкие конструкции и добавляем интерфейсу беларуского колорита.",
    cat_text: "Текст",
    word_msg_old: "Паведамленні", // Арыгінал пакідаем
    word_msg_new: "Паведы", // Арыгінал пакідаем
    word_msg_desc: "Кратко, метко и без лишних слогов.",
    cat_video: "Видео",
    word_video_old: "Відэапаведамленьне",
    word_video_new: "Калабок",
    word_video_desc: "Круглое видео? Значит, это колобок!",
    cat_audio: "Звук",
    word_audio_old: "Галасавое паведамленьне",
    word_audio_new: "Галасок",
    word_audio_desc: "Благозвучное слово для вашего голоса.",
    vocab_more:
      "...и многое другое, что делает использование программы приятнее.",
    feat_classic_title: "Классическое правописание",
    feat_classic_desc: "Мы придерживаемся грамматики Бронислава Тарашкевича.",
    feat_open_title: "Открытый код",
    feat_open_desc: "Платформа переводов открыта для каждого.",
    feat_adapt_title: "Адаптивность",
    feat_adapt_desc: "Идеально выглядит в светлой и темной теме.",
    cta_title: "Ищем единомышленников!",
    cta_desc: "Помогите нам с переводом, редактированием или тестированием.",
    cta_btn: "Заполнить анкету",
    cta_note: "Это займет не более 2 минут",
    footer_note: "Неофициальный проект.",
    footer_channel: "Telegram-канал",
    footer_support: "Поддержать",
  },
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const btns = {
    cyr: document.getElementById("btn-cyr"),
    lat: document.getElementById("btn-lat"),
    ru: document.getElementById("btn-ru"),
  };

  // Reset all buttons to inactive state
  Object.values(btns).forEach((btn) => {
    btn.classList.remove(
      "bg-white",
      "dark:bg-tg-cardDark",
      "shadow-sm",
      "text-tg-text",
      "dark:text-white",
    );
    btn.classList.add("text-tg-hint", "dark:text-tg-hintDark");
  });

  // Set active button
  if (btns[lang]) {
    btns[lang].classList.add(
      "bg-white",
      "dark:bg-tg-cardDark",
      "shadow-sm",
      "text-tg-text",
      "dark:text-white",
    );
    btns[lang].classList.remove("text-tg-hint", "dark:text-tg-hintDark");
  }

  localStorage.setItem("lang", lang);
}

const themeToggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

function updateTheme(isDark) {
  if (isDark) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: light)"]',
      )
      .setAttribute("content", "#17212b");
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]',
      )
      .setAttribute("content", "#17212b");
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: light)"]',
      )
      .setAttribute("content", "#ffffff");
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]',
      )
      .setAttribute("content", "#ffffff");
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = !html.classList.contains("dark");
    updateTheme(isDark);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    updateTheme(true);
  } else {
    updateTheme(false);
  }
  const savedLang = localStorage.getItem("lang") || "cyr";
  setLanguage(savedLang);
});
